import Button from "../../components/ui/Button";
import Filters from "../../components/ui/Filters";
import Input from "../../components/ui/Input";
import { useAppContext } from "../../hooks/useAppContext";
import BookItem from "./BookItem";

function BooksPage() {
  const { state } = useAppContext();

  function handleSubmit() {
    console.log("click search");
  }

  return (
    <div className="w-full h-full flex flex-col gap-15">
      <div className="w-full flex flex-row items-center justify-between">
        <div className="px-5 flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">My Books</h1>
          <p>Manage your library</p>
        </div>
        <div className="flex flex-row items-center justify-between gap-5">
          <div className="relative w-full max-w-md">
            <Input
              type="text"
              className="w-full bg-transparent pl-5 pr-10 py-2 text-lg border-2 border-main-border outline-none focus:border-main-border-focus rounded-lg transition-all duration-200 ease-in"
              placeholder="Search your books here..."
            />

            <Button
              onClick={handleSubmit}
              typeName="search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-main-border hover:text-main-border-focus transition-all duration-200 ease-in cursor-pointer"
            />
          </div>

          <Button
            className="shrink-0 px-4 py-2 bg-main-accent text-neutral-100 cursor-pointer flex flex-row items-center justify-center gap-2 rounded-lg hover:bg-main-accent-hover active:scale-96 transition-all duration-200 ease-in"
            onClick={() => console.log("Add Book")}
            typeName="addBook"
          >
            Add Book
          </Button>
        </div>
      </div>

      <div>
        <Filters />
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-[60px_2fr_1.5fr_1fr_1fr_1fr_120px] text-sm text-gray-500 px-4 gap-5">
          <span></span>
          <span>Book</span>
          <span>Author</span>
          <span>Category</span>
          <span>Status</span>
          <span>Rating</span>
          <span>Actions</span>
        </div>

        {state.books.map((book) => (
          <BookItem book={book} />
        ))}
      </div>
    </div>
  );
}

export default BooksPage;
