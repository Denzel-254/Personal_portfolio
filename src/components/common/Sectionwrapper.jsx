function SectionWrapper({ children, className, ...props }) {
  return (
    <section
      className={`py-4 md:py-10 px-7 ${className}`}
      {...props} // <-- Spread props here so id works
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export default SectionWrapper;
