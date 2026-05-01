import { useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import { useFilter } from "../../hooks/useFilter";
import Button from "../../components/ui/Button";
import Filters from "../../components/ui/Filters";
import Input from "../../components/ui/Input";
import BookItem from "./BookItem";
import AddUpdateModal from "../../components/ui/AddUpdateModal";
import BaseModal from "../../components/ui/BaseModal";
import type { Book } from "./bookTypes";

export type FilterTypes = "all" | "reading" | "completed" | "to-read";

export type SortOptionTypes = "recent" | "oldest";

function BooksPage() {
  const { state } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [searchInput, setSearchInput] = useState<string>("");
  const [filterType, setFilterType] = useState<FilterTypes>("all");

  const [sortOption, setSortOption] = useState<SortOptionTypes>("recent");

  const { result, bookCounts } = useFilter(
    state.books,
    searchInput,
    filterType,
    sortOption,
  );

  function handleAddBook() {
    setEditingBook(null);
    setIsModalOpen(true);
  }

  function handleEditBook(book: Book) {
    setEditingBook(book);
    setIsModalOpen(true);
  }

  return (
    <div className="w-full h-full flex flex-col gap-15 items-center">
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
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />

            <Button
              typeName="search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-main-border hover:text-main-border-focus transition-all duration-200 ease-in cursor-pointer"
            />
          </div>

          <Button
            className="shrink-0 px-4 py-2 bg-main-accent text-neutral-100 cursor-pointer flex flex-row items-center justify-center gap-2 rounded-lg hover:bg-main-accent-hover active:scale-96 transition-all duration-200 ease-in"
            onClick={handleAddBook}
            typeName="addBook"
          >
            Add Book
          </Button>
        </div>
      </div>

      <div className="w-4/6 flex items-center justify-center">
        <Filters
          setFilterType={setFilterType}
          setSortOption={setSortOption}
          filterType={filterType}
          sortOption={sortOption}
          bookCounts={bookCounts}
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="grid w-4/6 grid-cols-[75px_2fr__1fr_120px] text-sm text-gray-500 px-4 gap-5">
          <span></span>
          <span>Book</span>
          <span>Status</span>
          <span>Actions</span>
        </div>

        {result.map((book) => (
          <BookItem book={book} key={book.id} onEdit={handleEditBook} />
        ))}
      </div>

      {isModalOpen && (
        <BaseModal onClose={() => setIsModalOpen(false)}>
          <AddUpdateModal
            setIsModalOpen={setIsModalOpen}
            editingBook={editingBook}
          />
        </BaseModal>
      )}
    </div>
  );
}

export default BooksPage;
