import { useState } from "react";

export const useOpen = (initState) => {
  const [open, setOpen] = useState(initState);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return { open, onClose, onOpen };
};
