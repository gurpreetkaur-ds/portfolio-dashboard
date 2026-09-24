import { isAdminAuthenticated } from "../../../../lib/dal";
import { getSiteContent, saveSiteContent } from "../../../../lib/content-store";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const content = await getSiteContent();
  return Response.json({ content });
}

export async function POST(request) {
  if (!(await isAdminAuthenticated())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  try {
    const saved = await saveSiteContent(body);
    return Response.json({ content: saved });
  } catch (error) {
    return Response.json(
      { error: error.message || "Failed to save content." },
      { status: 500 }
    );
  }
}
