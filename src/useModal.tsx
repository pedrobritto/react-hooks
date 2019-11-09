import { useState } from "react";

/**
 * Manage modal state.
 */
const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false)
  };
};

export default useModal;
