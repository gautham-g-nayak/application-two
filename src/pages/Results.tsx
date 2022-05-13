import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import questions from "../questions.json";
import { Box, Typography } from "@mui/material";
import Piechart from "../components/Piechart";

const Results = () => {
  const [appData] = useContext(AppContext);
  const [counter, setCounter] = useState(0);

  function correctOptions(index: number) {
    const options = questions[index].answerOptions.filter(
      (option) => option.isCorrect
    );
    const ans = options.map((option) => option.option);
    return ans;
  }

  function setValueOfPieChart() {
   
    let count = 0;
    Object.entries(appData.answers).map(([currentIndex, answer]: any) => {
      console.log(`appData : ${answer.value.toString()}`);
      console.log(`ans :${correctOptions(currentIndex - 1)}`);

      if (answer.value.toString() == correctOptions(currentIndex - 1)) {
        count++;
      }
    });
    setCounter(count);
  }

  useEffect(() => {
    setValueOfPieChart();
    const length = Object.entries(appData.answers).length;
    console.log(`length is ${length}`);
  }, [appData]);

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
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
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="500px"
        margin="10px 10px"
      >
        <Piechart correct={counter}  total = {questions.length}/>
      </Box>
    </Box>
  );
};

export default Results;
