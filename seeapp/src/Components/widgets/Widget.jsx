import "./widgets.scss";

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">PLAYER:</span>
        <span className="counter">LAKERS</span>
        <span className="link">LeBron James</span>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Widget;
