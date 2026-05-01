import { FcReadingEbook } from "react-icons/fc";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      className="flex flex-row gap-2 text-main-accent text-2xl items-center justify-center px-10 py-5"
      to="/"
    >
      <FcReadingEbook className="text-6xl" />
      <span className="font-semibold">Book Tracker</span>
    </Link>
  );
}

export default Logo;
