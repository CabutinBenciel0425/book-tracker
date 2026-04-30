import ActionsButton from "../../components/ui/ActionsButton";
import BookStatus from "../../components/ui/BookStatus";
import Rating from "../../components/ui/Rating";
import type { Book } from "./bookTypes";

function BookItem({
  book,
  onEdit,
}: {
  book: Book;
  onEdit: (book: Book) => void;
}) {
  return (
    <div
      className="border-b border-b-main-border w-full rounded-sm py-2 grid grid-cols-[60px_2fr_1.5fr_1fr_1fr_1fr_120px] px-4 gap-5 hover:bg-blue-100 transition-all duration-200 ease-in"
      key={book.id}
    >
      {/* image */}
      <div>
        <img className="rounded-md" src="https://placehold.co/60x90" alt="" />
      </div>

      {/* title */}
      <div className="flex items-center justify-start">
        <p className="font-semibold text-xl">{book.title}</p>
      </div>

      {/* author */}
      <div className="flex items-center justify-start">
        <p className="">{book.author}</p>
      </div>

      {/* category */}
      <div className="flex items-center justify-start">
        <p className="">{book.category}</p>
      </div>

      {/* status */}
      <BookStatus status={book.status} />

      {/* rating */}
      <div className="flex items-center justify-start">
        <Rating id={book.id} />
      </div>

      {/* actionButtons */}
      <ActionsButton id={book.id} onEdit={() => onEdit(book)} />
    </div>
  );
}

export default BookItem;
