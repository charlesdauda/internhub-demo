import Link from "next/link";
import NavDropdown from "./NavDropdown";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-page/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-extrabold tracking-tight text-ink">
            InternshipHub
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <NavDropdown
            label="Log in"
            variant="ghost"
            items={[
              { label: "Student", href: "/login/student" },
              { label: "Organisation", href: "/login/organisation" },
            ]}
          />
          <NavDropdown
            label="Sign up"
            variant="filled"
            items={[
              { label: "Student", href: "/signup/student" },
              { label: "Organisation", href: "/signup/organisation" },
            ]}
          />
        </div>
      </div>
    </header>
  );
}