import { useEffect, useRef, useState } from "react";

export const useHandlePopoverBlur = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePopoverBlur = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePopoverBlur);
    return () => {
      document.removeEventListener("mousedown", handlePopoverBlur);
    };
  }, [containerRef]);

  const containerRect = containerRef.current?.getBoundingClientRect();

  const popoverContentRef = useRef<HTMLDivElement>(null);
  const popoverContentRect = popoverContentRef.current?.getBoundingClientRect();
  return {
    open,
    setOpen,
    containerRef,
    containerRect,
    popoverContentRef,
    popoverContentRect,
  };
};
