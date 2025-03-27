type ScrollHandler = (index: number) => void;

const useMoveScroll = (): ScrollHandler => {
  const handleScrollToSection: ScrollHandler = (index: number): void => {
    const sections = document.querySelectorAll("section");
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  return handleScrollToSection;
};

export default useMoveScroll;
