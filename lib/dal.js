import { cache } from "react";
import { redirect } from "next/navigation";

import { getAdminSessionFromCookies } from "./session";

export const verifyAdminSession = cache(async () => {
  const session = await getAdminSessionFromCookies();

  if (!session || session.role !== "admin") {
    redirect("/admin/login");
  }

  return session;
});

export async function isAdminAuthenticated() {
  const session = await getAdminSessionFromCookies();
  return Boolean(session && session.role === "admin");
}
