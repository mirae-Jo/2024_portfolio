"use client";
import useHover from "@/hooks/useHover";
import { PropsWithChildren, useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
};

const TipContainer = ({
  children,
  text,
  className = "",
}: PropsWithChildren<Props>) => {
  const { isHover, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <div
      className={["relative", className].join(" ")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {!isHover && (
        <span
          data-tip={true}
          onMouseMoveCapture={(e) => {
            e.stopPropagation();
          }}
          className={`absolute bottom-full text-[1.2rem] leading-[1.5rem] mb-[2rem] left-1/2 -translate-x-1/2 text-center break-keep min-w-24`}>
          {text}
        </span>
      )}
      {children}
    </div>
  );
};

export default TipContainer;
