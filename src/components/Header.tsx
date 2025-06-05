import { Link } from "react-router-dom";

export default function Header() {
  const navs = ["Information", "About", "Home"];

  const getPath = (title: string) => {
    if (title === "About") return "/About";
    if (title === "Home") return "/";
    return "/info";
  };
  return (
    <header className="flex items-center justify-around p-6 max-sm:p-3 border-b-1">
      <img src="./vite.svg" alt="logo" />
      <nav>
        {navs.map((nav) => (
          <Link key={nav} className="p-4" to={getPath(nav)}>
            {nav}
          </Link>
        ))}
      </nav>
      <button className="cursor-pointer">Leave</button>
    </header>
  );
}
