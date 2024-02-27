function SectionWrapper(Component, idName) {
  const WrappedSection = () => (
    <section className="mt-8 mb-10 xl:mb-20 px-4 md:px-8">
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component />
    </section>
  );

  return WrappedSection;
}

export default SectionWrapper;
