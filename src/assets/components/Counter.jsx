import { useEffect, useState } from "react";
import useCountStore from "../../store/isCounted";

const Counter = () => {
  const [countText, setCountText] = useState(0);

  const today = new Date().toLocaleDateString();
  const userCount = useCountStore((state) => state.userCount);

  useEffect(() => {
    setCountText(userCount);
  }, [userCount]);

  return (
    <div id="counter-wrapper">
      <h1>People visited:</h1>
      <span>Date: {today}</span>
      <div className="counter">
        <div className="counter-item">
          <h2>{countText}</h2>
          <p>Monthly</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
