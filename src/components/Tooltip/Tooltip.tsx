import "./styles.scss";

const Tooltip = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "50px",
        right: "50px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div className="arrow-box">
        <p>
          <span style={{ color: "#e03c31" }}>Red</span>: Both answers are wrong.
        </p>
        <p style={{ marginLeft: "16px" }}>Birthday: Month and day are wrong.</p>
        <p>
          <span style={{ color: "#fdee00" }}>Yellow</span>: One answer correct.
        </p>
        <p style={{ marginLeft: "16px" }}>
          Birthday: Either month or day are correct.
        </p>
        <p>
          <span style={{ color: "#00a86b" }}>Green</span>: Both answers are
          correct.
        </p>
      </div>
      <button
        className="tooltip-button"
        style={{
          borderRadius: "20px",
          backgroundColor: "lightgray",
          border: "solid 4px darkgray",
          alignSelf: "end",
        }}
      >
        ?
      </button>
    </div>
  );
};

export default Tooltip;
