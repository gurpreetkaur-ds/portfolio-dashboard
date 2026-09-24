"use server";

import { timingSafeEqual, createHash } from "crypto";
import { redirect } from "next/navigation";

import { createAdminSession, deleteAdminSession } from "../../lib/session";

function safeCompare(a, b) {
  const hashA = createHash("sha256").update(String(a)).digest();
  const hashB = createHash("sha256").update(String(b)).digest();
  return timingSafeEqual(hashA, hashB);
}

export async function login(prevState, formData) {
  const password = formData.get("password");
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return {
      error:
        "ADMIN_PASSWORD is not configured on the server. Set it in your environment variables first.",
    };
  }

  if (!process.env.SESSION_SECRET) {
    return {
      error:
        "SESSION_SECRET is not configured on the server. Set it in your environment variables first.",
    };
  }

  if (!password || !safeCompare(password, adminPassword)) {
    return { error: "Incorrect password." };
  }

  await createAdminSession();
  redirect("/admin");
}

export async function logout() {
  await deleteAdminSession();
  redirect("/admin/login");
}
