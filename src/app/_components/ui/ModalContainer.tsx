"use client";

import React, {
  cloneElement,
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
  useState,
} from "react";
import CloseBtnSvg from "../svg/CloseBtnSvg";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

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

  const client = new QueryClient();

  return (
    <ModalContext.Provider value={value}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
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
        <div className='fixed w-screen h-full bg-black bg-opacity-40 backdrop-blur-[20px] z-30 top-0'>
          {children}
        </div>
      )}
    </>
  );
};

export const Close = () => {
  const { handleToggleModal } = useContext(ModalContext);

  return (
    <div
      onClick={handleToggleModal}
      className='fixed top-[3rem] right-[3rem] hover:cursor-pointer'>
      <CloseBtnSvg />
    </div>
  );
};
export default ModalContainer;
