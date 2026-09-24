"use client";

import { useActionState } from "react";

export default function LoginForm({ loginAction }) {
  const [state, action, pending] = useActionState(loginAction, undefined);

  return (
    <div className="admin-login-wrapper">
      <form className="admin-login-card" action={action}>
        <span className="admin-login-logo">
          GK<span>.</span>
        </span>

        <h1>Admin Access</h1>
        <p>Enter your password to edit portfolio content.</p>

        <input
          type="password"
          name="password"
          placeholder="Password"
          autoFocus
          required
        />

        {state?.error && <div className="admin-login-error">{state.error}</div>}

        <button type="submit" disabled={pending}>
          {pending ? "Checking..." : "Log In"}
        </button>
      </form>
    </div>
  );
}
