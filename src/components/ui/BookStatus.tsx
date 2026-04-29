import { capitalizeFirstLetter } from "../../utils/helpers";

type BookStatusType = "completed" | "reading" | "to-read";

function BookStatus({ status }: { status: BookStatusType }) {
  const baseStyle = "text-sm py-1 px-4 border-2 rounded-md";
  const statusStyle: Record<BookStatusType, string> = {
    completed: "border-green-400",
    reading: "border-blue-400",
    "to-read": "border-orange-400",
  };

  return (
    <div className="flex items-center justify-start">
      <p className={`${baseStyle} ${statusStyle[status]}`}>
        {capitalizeFirstLetter(status)}
      </p>
    </div>
  );
}

export default BookStatus;
