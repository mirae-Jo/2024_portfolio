import { MouseEventHandler, useState } from "react";

const useHover = () => {
  const [isHover, setHover] = useState(false);

  const handleMouseEnter: MouseEventHandler = (e) => {
    const target = e.target as HTMLElement;
    if (target && target?.dataset["tip"]) return;
    setHover(true);
  };

  const handleMouseLeave: MouseEventHandler = (e) => {
    const target = e.target as HTMLElement;
    if (target && target?.dataset["tip"]) return;
    setHover(false);
  };

  return { isHover, handleMouseEnter, handleMouseLeave };
};

export default useHover;
