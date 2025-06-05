export default function Header() {
  return (
    <div className="flex items-center justify-around p-6 border-b-1">
      <img src="./public/vite.svg" alt="logo" />
      <nav>
        <a className="p-4" href="">
          Some information
        </a>
        <a className="p-4" href="">
          About
        </a>
        <a className="p-4" href="">
          Home
        </a>
      </nav>
      <button>Leave</button>
    </div>
  );
}
