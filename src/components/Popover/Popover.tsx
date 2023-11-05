import { type PopoverProps } from "./Popover.types";
import "./Popover.scss";
import { useHandlePopoverBlur } from "./useHandlePopoverBlur";
import { createPortal } from "react-dom";
import { type CSSProperties } from "react";

export const Popover = ({ parent, popover }: PopoverProps) => {
  const {
    containerRef,
    open,
    setOpen,
    containerRect,
    popoverContentRef,
    popoverContentRect,
  } = useHandlePopoverBlur();
  return (
    <div ref={containerRef} className="popover-component">
      <div onClick={() => setOpen(!open)} className="popover-component__parent">
        {parent}
      </div>
      {createPortal(
        <div
          ref={popoverContentRef}
          data-open={open}
          className="popover-component__popover"
          style={
            containerRect &&
            popoverContentRect &&
            ({
              "--popover-left": `${Math.round(
                containerRect.right - popoverContentRect.width
              )}px`,
              "--popover-top": `${Math.round(
                containerRect.top + containerRect.height
              )}px`,
            } as CSSProperties)
          }
        >
          {popover}
        </div>,
        document.body
      )}
    </div>
  );
};
