import { useContext } from "react";
import { AppContext } from "../App";
import questions from "../questions.json";
import { Box, Typography } from "@mui/material";

const Results = () => {
  const [appData] = useContext(AppContext);

  function correctOptions(index: number) {
    const options = questions[index].answerOptions.filter(
      (option) => option.isCorrect
    );
    const ans = options.map((option) => option.option);
    return ans;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width="500px"
      margin="10px 10px"
    >
      <Typography variant="h5" padding="5px">
        Report :
      </Typography>
      {Object.entries(appData.answers).map(([currentIndex, answer]: any) => (
        <div
          key={currentIndex}
          style={{
            padding: "5px",
          }}
        >
          <p
            style={{
              borderStyle: "solid",
              borderWidth: "2px",
              margin: "0px",
              padding: "10px 10px",
              borderRadius: "5px",
              borderColor:
                answer.value.toString() == correctOptions(currentIndex - 1)
                  ? "green"
                  : "red",
            }}
          >
            {currentIndex}. {answer.value}
          </p>
          {answer.value.toString() == correctOptions(currentIndex - 1) ? (
            <p></p>
          ) : (
            <p>
              correct answer : {correctOptions(currentIndex - 1).join(", ")}
            </p>
          )}
        </div>
      ))}
    </Box>
  );
};

export default Results;
