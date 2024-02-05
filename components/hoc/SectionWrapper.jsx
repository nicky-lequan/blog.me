function SectionWrapper(Component, idName) {
  const WrappedSection = () => (
    <section className="mt-8 mb-80 px-8">
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component />
    </section>
  );

  return WrappedSection;
}

export default SectionWrapper;
