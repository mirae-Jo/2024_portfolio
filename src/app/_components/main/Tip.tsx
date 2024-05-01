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
        <span className={`absolute bottom-full text-lg mb-[2rem]`}>{text}</span>
      )}
      {children}
    </div>
  );
};

export default TipContainer;
