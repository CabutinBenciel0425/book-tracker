import type { FilterTypes, SortOptionTypes } from "../features/books/BooksPage";
import type { Book } from "../features/books/bookTypes";

export function useFilter(
  books: Book[],
  searchInput: string,
  filterType: FilterTypes,
  sortOption: SortOptionTypes,
) {
  const bookCounts = {
    all: books.length,
    completed: books.filter((b) => b.status === "completed").length,
    reading: books.filter((b) => b.status === "reading").length,
    "to-read": books.filter((b) => b.status === "to-read").length,
  };

  let result = books;

  if (filterType !== "all") {
    result = result.filter((res) => res.status === filterType);
  }

  if (searchInput.trim().length > 0) {
    result = result.filter((res) =>
      res.title.toLowerCase().includes(searchInput.toLowerCase()),
    );
  }

  result = result.sort((a, b) => {
    if (sortOption === "recent") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }
  });

  return { result, bookCounts };
}
