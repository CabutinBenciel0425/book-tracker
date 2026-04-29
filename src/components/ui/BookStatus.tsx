import { capitalizeFirstLetter } from "../../utils/helpers";

type BookStatusType = "completed" | "reading" | "to-read";

function BookStatus({ status }: { status: BookStatusType }) {
  const baseStyle = "text-sm py-1 px-4 border-2 rounded-md font-semibold";
  const statusStyle: Record<BookStatusType, string> = {
    completed: "border-green-600 text-green-600",
    reading: "border-blue-600 text-blue-600",
    "to-read": "border-orange-600 text-orange-600",
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
