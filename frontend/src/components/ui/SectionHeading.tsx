interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) => {
  const alignClasses = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignClasses}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate-600">{description}</p>
      )}
    </div>
  );
};