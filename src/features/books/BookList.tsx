import { useAppContext } from "../../hooks/useAppContext";

function BookList() {
  const { state } = useAppContext();

  return (
    <div>
      {state.books.map((book) => (
        <p>{book.title}</p>
      ))}
    </div>
  );
}

export default BookList;
