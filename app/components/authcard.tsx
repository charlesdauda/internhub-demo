import Link from "next/link";
import Navbar from "./Navbar";

export default function AuthCard({
  mode,
  role,
}: {
  mode: "login" | "signup";
  role: "student" | "organisation";
}) {
  const isLogin = mode === "login";
  const roleLabel = role === "student" ? "student" : "organisation";
  const title = isLogin ? "Welcome back" : "Create your account";
  const subtitle = isLogin
    ? `Log in as a ${roleLabel} to pick up where you left off.`
    : `Sign up as a ${roleLabel} and get matched in minutes.`;

  const otherRole = role === "student" ? "organisation" : "student";
  const switchRoleHref = `/${mode}/${otherRole}`;
  const switchModeHref = `/${isLogin ? "signup" : "login"}/${role}`;

  return (
    <>
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-md rounded-[28px] bg-brand-dark px-8 py-10 sm:px-10 sm:py-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-mint">
            {roleLabel}
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            {title}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {subtitle}
          </p>

          <form className="mt-8 flex flex-col gap-4">
            {!isLogin && (
              <label className="flex flex-col gap-1.5 text-sm font-medium text-white/80">
                Full name
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand-mint"
                />
              </label>
            )}
            <label className="flex flex-col gap-1.5 text-sm font-medium text-white/80">
              Email address
              <input
                type="email"
                placeholder="you@example.com"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand-mint"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-white/80">
              Password
              <input
                type="password"
                placeholder="••••••••"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand-mint"
              />
            </label>

            <button
              type="submit"
              className="mt-2 rounded-full bg-brand-mint py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-mint-dark"
            >
              {isLogin ? "Log in" : "Create account"}
            </button>
          </form>

          <div className="mt-6 flex flex-col gap-2 text-center text-sm text-white/60">
            <span>
              {isLogin ? "New here?" : "Already have an account?"}{" "}
              <Link href={switchModeHref} className="font-semibold text-brand-mint hover:underline">
                {isLogin ? "Sign up" : "Log in"} as {roleLabel}
              </Link>
            </span>
            <span>
              Not a {roleLabel}?{" "}
              <Link href={switchRoleHref} className="font-semibold text-brand-mint hover:underline">
                {isLogin ? "Log in" : "Sign up"} as {otherRole}
              </Link>
            </span>
          </div>
        </div>
      </main>
    </>
  );
}