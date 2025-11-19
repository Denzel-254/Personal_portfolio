function SectionWrapper({ children, className }) {
  return (
    <section className={`py-4 md:py-10px-7  ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export default SectionWrapper;
