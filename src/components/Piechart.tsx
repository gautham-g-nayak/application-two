import PercentageIndicator from "./PercentageIndicator"

type PieProps = {
  correct: number;
  total: number;
};

function Piechart({ correct, total }: PieProps) {
  const correctDegree = (correct / total) * 360;
  const incorrectDegree = 360 - correctDegree;
  const pieStyle = () => ({
    height: "200px",
    width: "200px",
    backgroundColor: "green",
    backgroundImage: `conic-gradient(red ${incorrectDegree}deg, green ${incorrectDegree}deg ${correctDegree}deg)`,
    borderRadius: "50%",
  });
  return (
    <div>
      <div style={pieStyle()}></div>
      <PercentageIndicator numQuestions={correct} total={total} color={"green"}/>
      <PercentageIndicator numQuestions={total-correct} total={total} color={"red"}/>
    </div>
  );
}

export default Piechart;
