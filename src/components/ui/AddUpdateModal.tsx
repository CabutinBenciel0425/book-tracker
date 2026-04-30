import { useState, type SetStateAction } from "react";
import Input from "./Input";
import type { Book, BookStatus } from "../../features/books/bookTypes";
import Button from "./Button";
import { useAppContext } from "../../hooks/useAppContext";

type AddUpdateModalTypes = {
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  editingBook?: Book | null;
};

function AddUpdateModal({ setIsModalOpen, editingBook }: AddUpdateModalTypes) {
  const { addBook, updateBook } = useAppContext();
  const [titleValue, setTitleValue] = useState(editingBook?.title ?? "");
  const [authorValue, setAuthorValue] = useState(editingBook?.author ?? "");
  const [categoryValue, setCategoryValue] = useState(
    editingBook?.category ?? "",
  );
  const [statusValue, setStatusValue] = useState<BookStatus>(
    editingBook?.status ?? "to-read",
  );
  const [ratingValue, setRatingValue] = useState<number>(
    editingBook?.rating ?? 5,
  );
  const [favoriteValue, setFavoriteValue] = useState<boolean>(
    editingBook?.isFavorite ?? false,
  );

  const [titleError, setTitleError] = useState<boolean>(false);
  const [authorError, setAuthorError] = useState<boolean>(false);
  const [categoryError, setCategoryError] = useState<boolean>(false);

  function handleSubmit() {
    const errors = {
      title: titleValue.trim() === "",
      author: authorValue.trim() === "",
      category: categoryValue.trim() === "",
    };

    setTitleError(errors.title);
    setAuthorError(errors.author);
    setCategoryError(errors.category);

    if (Object.values(errors).some(Boolean)) return;

    const bookData = {
      id: editingBook ? editingBook.id : crypto.randomUUID(),
      title: titleValue.trim(),
      author: authorValue.trim(),
      category: categoryValue.trim(),
      status: statusValue,
      rating: ratingValue,
      isFavorite: favoriteValue,
      createdAt: editingBook ? editingBook.createdAt : new Date().toISOString(),
    };
    if (editingBook) {
      updateBook(bookData);
    } else {
      addBook(bookData);
    }

    setIsModalOpen(false);
  }

  return (
    <div className="flex flex-col gap-10 w-md px-5 py-8">
      <h1 className="text-3xl font-semibold">
        {editingBook ? "Update Book" : "Add Book"}
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-5 items-start justify-start w-full">
          <label htmlFor="title" className="text-xl font-semibold w-3/8 mt-2">
            Title:{" "}
          </label>
          <div>
            <Input
              type="text"
              id="title"
              value={titleValue}
              onChange={(e) => {
                setTitleValue(e.target.value);
                setTitleError(false);
              }}
              className="text-xl text-main-border hover:text-main-border-focus transition-all duration-200 ease-in cursor-pointer border-2 rounded-md outline-none focus:border-main-border-focus w-full py-1 px-2 "
            />
            <p className="text-red-500 text-sm mt-1 min-h-5">
              {titleError && "* Title of the book is required"}
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-5 items-start justify-start w-full">
          <label htmlFor="author" className="text-xl font-semibold w-3/8 mt-2">
            Author:{" "}
          </label>
          <div>
            <Input
              type="text"
              id="author"
              value={authorValue}
              onChange={(e) => {
                setAuthorValue(e.target.value);
                setAuthorError(false);
              }}
              className="text-xl text-main-border hover:text-main-border-focus transition-all duration-200 ease-in cursor-pointer border-2 rounded-md outline-none focus:border-main-border-focus w-full  py-1 px-2"
            />
            <p className="text-red-500 text-sm mt-1 min-h-5">
              {authorError && "* Author of the book is required"}
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-5 items-start justify-start w-full">
          <label
            htmlFor="category"
            className="text-xl font-semibold w-3/8 mt-2"
          >
            Category:{" "}
          </label>
          <div>
            <Input
              type="text"
              id="category"
              value={categoryValue}
              onChange={(e) => {
                setCategoryValue(e.target.value);
                setCategoryError(false);
              }}
              className="text-xl text-main-border hover:text-main-border-focus transition-all duration-200 ease-in cursor-pointer border-2 rounded-md outline-none focus:border-main-border-focus w-full py-1 px-2"
            />
            <p className="text-red-500 text-sm mt-1 min-h-5">
              {categoryError && "* Category of the book is required"}
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-1 items-center justify-start w-full">
          <label htmlFor="status" className="text-xl font-semibold w-3/8">
            Status:{" "}
          </label>
          <select
            name="status"
            id="status"
            value={statusValue}
            onChange={(e) => setStatusValue(e.target.value as BookStatus)}
            className="text-xl text-main-border hover:text-main-border-focus transition-all duration-200 ease-in cursor-pointer border-2 rounded-md outline-none w-fit py-1 px-2"
          >
            <option value="to-read">To Read</option>
            <option value="reading">Reading</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="flex flex-row gap-1 items-center justify-start w-full">
          <label htmlFor="rating" className="text-xl font-semibold w-3/8">
            Rating:{" "}
          </label>
          <select
            name="rating"
            id="rating"
            value={ratingValue}
            onChange={(e) => setRatingValue(Number(e.target.value))}
            className="text-xl text-main-border hover:text-main-border-focus transition-all duration-200 ease-in cursor-pointer border-2 rounded-md outline-none w-fit py-1 px-2"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        <div className="flex flex-row gap-1 items-center justify-start w-full">
          <label htmlFor="favorite" className="text-xl font-semibold w-3/8">
            Favorite:{" "}
          </label>
          <select
            name="favorite"
            id="favorite"
            value={favoriteValue ? "true" : "false"}
            onChange={(e) => setFavoriteValue(e.target.value === "true")}
            className="text-xl text-main-border hover:text-main-border-focus transition-all duration-200 ease-in cursor-pointer border-2 rounded-md outline-none w-fit py-1 px-2"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>

      <div className="flex flex-row items-center justify-end gap-3 mt-5">
        <Button
          className="border-2 border-main-accent bg-transparent text-main-accent text-lg rounded-md cursor-pointer px-2 py-1 hover:bg-blue-200 transition-all duration-200 ease-in"
          onClick={() => setIsModalOpen(false)}
          typeName="cancelBookModal"
        >
          Cancel
        </Button>
        <Button
          className="border-2 border-main-accent bg-main-accent text-neutral-100 text-lg rounded-md cursor-pointer hover:bg-main-accent-hover transition-all duration-200 ease-in py-1 px-2"
          typeName="addBookModal"
          onClick={handleSubmit}
        >
          {editingBook ? "Update Book" : "Add Book"}
        </Button>
      </div>
    </div>
  );
}

export default AddUpdateModal;
