import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const CursorContext = createContext();

const CursorContextProvider = ({ children }) => {
  const [cursor, setCursor] = useState({ active: false });

  return (
    <CursorContext.Provider value={[cursor, setCursor]}>
      {children}
    </CursorContext.Provider>
  );
};

CursorContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CursorContextProvider;
