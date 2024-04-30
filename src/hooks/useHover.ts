import { useState } from "react";

const useHover = () => {
  const [isHover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return { isHover, handleMouseEnter, handleMouseLeave };
};

export default useHover;
