import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-5">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      {subtitle && (
        <p className="mt-3 text-muted text-sm">{subtitle}</p>
      )}
    </motion.div>
  );
}
