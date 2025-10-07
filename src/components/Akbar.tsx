const Akbar = () => {
  const click = () => {
    prompt("Kim zor?");
    while (true) {
      console.log("Akbar sila");
    }
  };

  return (
    <div className="page akbar-page">
      <button className="legend-btn" onClick={click}>
        Click
      </button>
    </div>
  );
};

export default Akbar;
