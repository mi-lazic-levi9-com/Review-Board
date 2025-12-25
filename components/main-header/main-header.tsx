import Link from "next/link";
import NavLink from "../nav-link/nav-link";

export default function MainHeader() {
  return (
    <header className="bg-gray-900 text-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-cyan-400 hover:text-cyan-300"
        >
          ReviewBoard
        </Link>
        <nav>
          <ul className="flex items-center gap-6">
            <NavLink href="/products" linkText="Reviews" />
            <NavLink href="/categories" linkText="Categories" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
