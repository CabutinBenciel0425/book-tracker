import { TbBookOff } from "react-icons/tb";
import { Link } from "react-router-dom";

function NoBooksFound() {
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <div>
        <TbBookOff className="text-4xl" />
      </div>

      <div className="text-2xl font-semibold text-main-accent">
        I'm sorry! No books found!
      </div>

      <div>
        <Link to="/" className="cursor-pointer text-xl underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NoBooksFound;
