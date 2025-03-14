const useMoveScroll = () => {
  const handleScrollToSection = (index: number) => {
    const sections = document.querySelectorAll("section");
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  return handleScrollToSection;
};

export default useMoveScroll;
