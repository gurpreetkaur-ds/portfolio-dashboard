import AdminEditor from "../../components/admin/AdminEditor";
import { verifyAdminSession } from "../../lib/dal";
import { getSiteContent } from "../../lib/content-store";
import { isContentStoreConfigured } from "../../lib/content-store";
import { logout } from "../actions/auth";

export const metadata = {
  title: "Admin — Edit Portfolio",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  await verifyAdminSession();

  const content = await getSiteContent();
  const storeConfigured = isContentStoreConfigured();

  return (
    <AdminEditor
      initialContent={content}
      storeConfigured={storeConfigured}
      logoutAction={logout}
    />
  );
}
