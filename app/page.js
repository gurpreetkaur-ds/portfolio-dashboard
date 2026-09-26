import HomeClient from "../components/HomeClient";
import { getGithubProfile, getGithubRepos } from "../lib/github";
import { getSiteContent } from "../lib/content-store";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [githubProfile, githubRepos, content] = await Promise.all([
    getGithubProfile(),
    getGithubRepos(),
    getSiteContent(),
  ]);

  return (
    <HomeClient
      githubProfile={githubProfile}
      githubRepos={githubRepos}
      content={content}
    />
  );
}
