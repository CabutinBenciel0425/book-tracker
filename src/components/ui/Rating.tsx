import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { useAppContext } from "../../hooks/useAppContext";

type RatingTypes = {
  starLength?: number;
  id: string;
};

function Rating({ starLength = 5, id }: RatingTypes) {
  const { state, toggleRating } = useAppContext();

  const book = state.books.find((b) => b.id === id);
  const rating = book?.rating ?? 0;

  function handleClickRating(index: number) {
    toggleRating(id, index + 1);
  }

  return (
    <div className="flex flex-row gap-1 text-xl">
      {Array.from({ length: starLength }, (_, index) => (
        <span
          key={index}
          className="cursor-pointer"
          onClick={() => handleClickRating(index)}
        >
          {index < rating ? <IoIosStar /> : <IoIosStarOutline />}
        </span>
      ))}
    </div>
  );
}

export default Rating;
