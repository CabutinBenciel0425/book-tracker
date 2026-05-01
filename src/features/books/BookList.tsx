import Loader from "../../components/ui/Loader";
import { useAppContext } from "../../hooks/useAppContext";
import BookItem from "./BookItem";
import type { Book } from "./bookTypes";

type BookListPropsType = {
  result: Book[];
  onEditBook: (book: Book) => void;
};

function BookList({ result, onEditBook }: BookListPropsType) {
  const { state } = useAppContext();

  if (state.isLoading) return <Loader />;

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="grid w-4/6 grid-cols-[75px_2fr__1fr_120px] text-sm text-gray-500 px-4 gap-5">
        <span></span>
        <span>Book</span>
        <span>Status</span>
        <span>Actions</span>
      </div>

      {result.map((book) => (
        <BookItem book={book} key={book.id} onEdit={() => onEditBook(book)} />
      ))}
    </div>
  );
}

export default BookList;
