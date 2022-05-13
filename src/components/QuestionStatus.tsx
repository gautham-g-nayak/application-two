import { Box, Typography } from "@mui/material";
import questions from "../questions.json";
import { useContext } from "react";
import { AppContext } from "../App";

type QuestionStatusProps = {
    currentQuestion: number;
    setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  };

function QuestionStatus({ currentQuestion, setCurrentQuestion }: QuestionStatusProps) {
  const [appData, dispatchAppData] = useContext(AppContext);
  return (
    <Box
      width="340px"
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
      justifyContent="start"
      marginLeft="20%"
      alignContent="flex-start"
    >
      <Typography variant="h6" padding="20px 10px">
        Question Status :
      </Typography>
      {questions.map((question, index) => (
        <button
          onClick={() => setCurrentQuestion(index + 1)}
          key={index}
          style={{
            background:
              currentQuestion === index + 1
                ? "#f5e72d"
                : appData.answers[index + 1]
                ? appData.answers[index + 1].value !== ""
                  ? "#4CAF50"
                  : "gray"
                : "gray",
            border: "none",
            borderRadius: "50px",
            color: "white",
            padding: "15px 20px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 4px",
            cursor: "pointer",
          }}
        >
          {index + 1}
        </button>
      ))}
    </Box>
  );
}

export default QuestionStatus;
