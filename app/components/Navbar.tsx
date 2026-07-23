import Link from "next/link";
import NavDropdown from "./NavDropdown";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#f5f8fa]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="text-base font-bold tracking-tight text-[#000000] sm:text-lg">
            iHub
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <NavDropdown
            label="Log in"
            variant="ghost"
            items={[
              { label: "Log in as student", href: "/login/student" },
              { label: "Log in as organisation", href: "/login/organisation" },
            ]}
          />
          <NavDropdown
            label="Sign up"
            variant="filled"
            items={[
              { label: "Sign up as student", href: "/signup/student" },
              { label: "Sign up as organisation", href: "/signup/organisation" },
            ]}
          />
        </div>
      </div>
    </header>
  );
}