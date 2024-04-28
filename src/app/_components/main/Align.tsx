import { PropsWithChildren } from "react";

type AlignProps = {
  className?: string;
};

const Align = ({ children, className = "" }: PropsWithChildren<AlignProps>) => {
  return (
    <div className={[className, "flex flex-col"].join(" ")}>{children}</div>
  );
};

const AlignLeft = ({ children }: PropsWithChildren) => {
  return <div className={`flex-1`}>{children}</div>;
};

const AlignRight = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={`flex-1 flex flex-row justify-end gap-[4.2rem] items-center`}>
      {children}
    </div>
  );
};

Align.Left = AlignLeft;
Align.Right = AlignRight;

export default Align;
