function SectionWrapper({ children, className }) {
  return (
    <section className={`py-9 px-7  ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export default SectionWrapper;
