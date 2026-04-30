import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppContext } from "../../hooks/useAppContext";
import BaseModal from "../ui/BaseModal";
import ConfirmModal from "../ui/ConfirmModal";

function Layout() {
  const { state, closeConfirmModal } = useAppContext();

  return (
    <div className="flex h-full w-full">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>

      {state.confirmModal.isOpen && (
        <BaseModal onClose={closeConfirmModal}>
          <ConfirmModal />
        </BaseModal>
      )}
    </div>
  );
}

export default Layout;
