import { useContext, useEffect, useState } from "react";
import QuestionCard, { QuestionType } from "../components/QuestionCard";
import questions from "../questions.json";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

const TOTAL_QUESTIONS = questions.length;

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0].id);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [appData, dispatchAppData] = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  function handleNextButtonClick(index: number) {
    if (index === TOTAL_QUESTIONS - 1) {
      navigate("/results");
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  }

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        questions.map(
          (question, index) =>
            currentQuestion === question.id && (
              <Box
                key={question.id}
                height="500px"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Box>
                  <Typography variant="h3">Question: {index + 1}</Typography>
                  <Box
                    height="500px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                  >
                    <QuestionCard
                      id={question.id}
                      question={question.question}
                      questionType={question.questionType as QuestionType}
                      answers={question.answerOptions}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        disabled={index === 0}
                        onClick={() => setCurrentQuestion((prev) => prev - 1)}
                      >
                        Previous
                      </Button>

                      <Button onClick={() => handleNextButtonClick(index)}>
                        {index === TOTAL_QUESTIONS - 1 ? "Submit" : "Next"}
                      </Button>
                    </Box>
                  </Box>
                </Box>
                <Box
                  key={question.id}
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
                            ? appData.answers[index + 1].value !=="" ? "#4CAF50"
                            : "gray" : "gray",
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
              </Box>
            )
        )
      )}
    </Box>
  );
};

export default Questions;
