import { FaChevronLeft } from "react-icons/fa";
import ActionsButton from "../../components/ui/ActionsButton";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import BaseModal from "../../components/ui/BaseModal";
import AddUpdateModal from "../../components/ui/AddUpdateModal";
import Rating from "../../components/ui/Rating";
import { formatDate } from "../../utils/helpers";
import BookStatus from "../../components/ui/BookStatus";
import NoBooksFound from "../../components/ui/NoBooksFound";
import Loader from "../../components/ui/Loader";

function BookDetails() {
  const { state } = useAppContext();
  const [loadingBook, setLoadingBook] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedBook = state.books.find((book) => book.id === id);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingBook(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loadingBook)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader />
      </div>
    );
  if (!id || !selectedBook) return <NoBooksFound />;

  console.log(id);

  return (
    <div className="flex flex-col gap-10 h-full w-full">
      <div className="flex flex-row items-center justify-between px-10">
        <div className="flex flex-row gap-4 items-center">
          <FaChevronLeft
            onClick={() => navigate(-1)}
            className="cursor-pointer hover:text-main-accent-hover text-3xl font-semibold"
          />
          <span className="text-xl font-semibold">Back to Books Page</span>
        </div>
        <div>
          <ActionsButton
            id={id}
            showView={false}
            onEdit={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      <div className="w-full h-full px-10 flex flex-col gap-10 lg:flex-row items-start mt-30">
        <div className="flex flex-col gap-10 justify-start w-1/2">
          <div className="flex flex-col gap-5 justify-center items-center">
            <img src="https://placehold.co/260x360" alt="" />
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-6 text-xl">
          <div className="mb-5">
            <h1 className="text-4xl font-semibold">{selectedBook?.title}</h1>
          </div>
          <div className="w-3/8 flex flex-row items-center justify-between">
            <span className="font-semibold">Author: </span>
            <span>{selectedBook?.author}</span>
          </div>

          <div className="w-3/8 flex flex-row items-center justify-between">
            <span className="font-semibold">Status: </span>
            <span>
              <BookStatus status={selectedBook.status} />
            </span>
          </div>

          <div className="w-3/8 flex flex-row items-center justify-between">
            <span className="font-semibold">Date Added: </span>
            <span>{formatDate(selectedBook.createdAt)}</span>
          </div>

          <div className="w-3/8 flex flex-row items-center justify-between">
            <span className="font-semibold">Category: </span>
            <span className="text-xl text-center">
              {selectedBook?.category}
            </span>
          </div>

          <div className="w-3/8 flex flex-row items-center justify-between">
            <span className="font-semibold">Rating: </span>
            <Rating starLength={5} id={id} />
          </div>
        </div>
      </div>

      {isModalOpen && selectedBook && (
        <BaseModal onClose={() => setIsModalOpen(false)}>
          <AddUpdateModal
            setIsModalOpen={setIsModalOpen}
            editingBook={selectedBook}
          />
        </BaseModal>
      )}
    </div>
  );
}

export default BookDetails;
