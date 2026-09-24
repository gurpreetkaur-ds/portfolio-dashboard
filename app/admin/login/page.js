import LoginForm from "../../../components/admin/LoginForm";
import { login } from "../../actions/auth";

export const metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return <LoginForm loginAction={login} />;
}
