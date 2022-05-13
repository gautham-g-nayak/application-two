type PieProps = {
  numQuestions: number;
  total: number;
  color: string;
};

function PercentageIndicator({ numQuestions, total, color }: PieProps) {
  const percentage = (numQuestions / total) * 100;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        alignContent: "flex-start",
      }}
    >
      <div
        style={{
          background: color,
          border: "none",
          color: "white",
          padding: "10px 10px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          margin: "10px 10px",
        }}
      >
        {percentage}%
      </div>
      <h4>- {color === "red" ? "incorrect answers" : "correct answers"}</h4>
    </div>
  );
}

export default PercentageIndicator;
