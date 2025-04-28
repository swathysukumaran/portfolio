import React from "react";

type SectionTitleProps = {
  title: string;
};
function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex gap-10 items-center py-10">
      <h1 className="text-3xl text-white ">{title}</h1>
      <div className="w-50 h-[1px] bg-tertiary"></div>
    </div>
  );
}

export default SectionTitle;
