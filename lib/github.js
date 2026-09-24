const GITHUB_USERNAME = "gurpreetkaur-ds";
const API_BASE = "https://api.github.com";

async function githubFetch(path) {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    return await res.json();
  } catch {
    return null;
  }
}

export async function getGithubProfile() {
  const profile = await githubFetch(`/users/${GITHUB_USERNAME}`);

  if (!profile) return null;

  return {
    login: profile.login,
    name: profile.name || profile.login,
    avatarUrl: profile.avatar_url,
    bio: profile.bio,
    htmlUrl: profile.html_url,
    publicRepos: profile.public_repos,
    followers: profile.followers,
    following: profile.following,
  };
}

export async function getGithubRepos() {
  const repos = await githubFetch(
    `/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
  );

  if (!Array.isArray(repos)) return [];

  return repos
    .filter((repo) => !repo.fork && !repo.archived)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      homepage: repo.homepage || null,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      topics: repo.topics || [],
      updatedAt: repo.updated_at,
    }))
    .sort((a, b) => {
      if (b.stars !== a.stars) return b.stars - a.stars;
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
}
