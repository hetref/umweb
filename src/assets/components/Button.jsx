import PropTypes from "prop-types";
import { useCallback, useContext } from "react";
import { CursorContext } from "../../context/CursorContextProvider";

const Button = ({ classOption, text, path, type }) => {
  const [, setCursor] = useContext(CursorContext);
  const toggleCursor = useCallback(() => {
    setCursor(({ active }) => ({ active: !active }));
  }, [setCursor]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const onHomeClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {type === "homenav" ? (
        <>
          <button
            className={`${classOption}`}
            onMouseEnter={toggleCursor}
            onMouseLeave={toggleCursor}
            onClick={onHomeClick}
          >
            {text}
          </button>
        </>
      ) : (
        <button
          onClick={() => scrollToSection(path)}
          className={`${classOption}`}
          onMouseEnter={toggleCursor}
          onMouseLeave={toggleCursor}
        >
          {text}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  classOption: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
  type: PropTypes.string,
};
Button.defaultProps = {
  classOption: "",
  path: "",
  type: "",
};

export default Button;
