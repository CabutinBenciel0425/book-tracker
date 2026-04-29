import Button from "./Button";

function ActionsButton() {
  const actionBtnStyle =
    "bg-transparent text-main-accent cursor-pointer text-xl hover:text-main-accent-hover";
  return (
    <div className="flex items-center justify-start gap-3">
      <Button
        className={actionBtnStyle}
        typeName="viewBook"
        onClick={() => console.log("view book")}
      />

      <Button
        className={actionBtnStyle}
        typeName="updateBook"
        onClick={() => console.log("update book")}
      />

      <Button
        className={actionBtnStyle}
        typeName="deleteBook"
        onClick={() => console.log("delete book")}
      />
    </div>
  );
}

export default ActionsButton;
