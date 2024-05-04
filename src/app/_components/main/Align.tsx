import { PropsWithChildren } from "react";

type AlignProps = {
  className?: string;
  direction?: "col" | "row";
};

const Flex = ({
  children,
  className = "",
  direction = "col",
}: PropsWithChildren<AlignProps>) => {
  return (
    <div className={[className, `flex flex-${direction}`].join(" ")}>
      {children}
    </div>
  );
};

const Start = ({ children }: PropsWithChildren) => {
  return <div className={`flex-1`}>{children}</div>;
};

const End = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={`flex-1 flex flex-row justify-end gap-[4.2rem] items-center`}>
      {children}
    </div>
  );
};

Flex.Start = Start;
Flex.End = End;

export default Flex;
