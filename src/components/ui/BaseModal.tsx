import type React from "react";

function BaseModal({
  onClose,
  children,
}: {
  onClose: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0  bg-black/50 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg p-6 w-lg max-h-[90vh] overflow-y-auto"
      >
        {children}
      </div>
    </div>
  );
}

export default BaseModal;
