import React from "react";

type HTextProps = {
  children: React.ReactNode;
};

const HText = ({ children }: HTextProps) => {
  return (
    <div className="basis-3/5 font-montserrat text-3xl font-bold">
      {children}
    </div>
  );
};

export default HText;
