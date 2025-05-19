type SectionTitleProps = {
  title: string;
};

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-6 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-secondary whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-grow h-px bg-tertiary opacity-60" />
    </div>
  );
}

export default SectionTitle;
