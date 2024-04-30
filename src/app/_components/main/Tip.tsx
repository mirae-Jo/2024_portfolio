"use client";
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
  const [isHover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className={["relative", className].join(" ")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <span
        className={`absolute bottom-full text-lg ${
          isHover && "hidden"
        } mb-[2rem]`}>
        {text}
      </span>
      {children}
    </div>
  );
};

export default TipContainer;
