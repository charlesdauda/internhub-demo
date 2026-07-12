export default function Footer() {
  return (
    <footer className="border-t border-[#E4E7EC] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#111318] md:flex-row">
        <p className="text-[#0B0F19]">InternshipHub</p>
        <p>&copy; {new Date().getFullYear()} InternshipHub. Built for Ghanaian universities.</p>
      </div>
    </footer>
  );
}