const Counter = () => {
  const today = new Date().toLocaleDateString();

  return (
    <div id="counter-wrapper">
      <h1>People visited:</h1>
      <span>Date: {today}</span>
      <div className="counter">
        <div className="counter-item">
          <h2>100</h2>
          <p>Monthly</p>
        </div>
        <div className="counter-item">
          <h2>100</h2>
          <p>Yearly</p>
        </div>
        <div className="counter-item">
          <h2>100</h2>
          <p>Till Date</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
