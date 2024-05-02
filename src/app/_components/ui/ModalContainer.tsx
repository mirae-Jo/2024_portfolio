"use client";
import React, {
  cloneElement,
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
  useState,
} from "react";

interface ModalContextProps {
  isShow: boolean;
  handleToggleModal: () => void;
}

const ModalContext = createContext<ModalContextProps>({
  isShow: false,
  handleToggleModal: () => {},
});

const ModalContainer = ({ children }: PropsWithChildren) => {
  // provider
  const [isShow, setShow] = useState(false);

  const handleToggleModal = () => {
    setShow(!isShow);
  };

  const value = {
    isShow,
    handleToggleModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const Toggle = ({ children }: PropsWithChildren) => {
  const { isShow, handleToggleModal } = useContext(ModalContext);
  return (
    !isShow &&
    cloneElement(children as ReactElement, { onClick: handleToggleModal })
  );
};

export const Content = ({ children }: PropsWithChildren) => {
  const { isShow } = useContext(ModalContext);
  return (
    <>
      {isShow && (
        <div className='fixed w-screen h-full bg-black bg-opacity-40 backdrop-blur-[20px] z-10 top-0'>
          {children}
          <Close />
        </div>
      )}
    </>
  );
};

export const Close = () => {
  const { handleToggleModal } = useContext(ModalContext);

  return <div onClick={handleToggleModal}>Close</div>;
};
export default ModalContainer;
