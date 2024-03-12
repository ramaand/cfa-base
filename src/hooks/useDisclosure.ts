import { useState } from 'react';

type TUseDisclosureReturn = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
};

const useDisclosure = (initialState = false): TUseDisclosureReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return { isOpen, onOpen, onClose, onToggle };
};

export default useDisclosure;
