import { fireEvent, render, screen } from "@testing-library/react";
import App, { AppContext } from "./App";
import { TOTAL_QUESTIONS } from "./pages/Questions";
import questions from "./questions.json";
import { actions } from "./actions";
import RadioButtons from "./components/buttons/RadioButtons";
import CheckboxOptions from "./components/CheckboxOptions";
import PercentageIndicator from "./components/PercentageIndicator";
import Piechart from "./components/Piechart";
import RadioOptions from "./components/RadioOptions";
import QuestionStatus from "./components/QuestionStatus";
import Results from "./pages/Results";
import QuestionCard from "./components/QuestionCard";
import AuthLayout from "./components/AuthLayout";
import {
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  Grow,
  styled,
} from "@mui/material";

describe("unit testing basics", () => {
  test("renders Enter your details", () => {
    render(<App />);
    const element = screen.getByText(/Enter your details/i);
    expect(element).toBeInTheDocument();
  });

  test("renders Submit and Start Test", () => {
    render(<App />);
    const element = screen.getByText(/Submit and Start Test/i);
    expect(element).toBeInTheDocument();
  });

  test("renders result page", () => {
    const appData = {
      answers: {
        2: { type: "checkbox", value: ["string", "boolean"] },
      },
    };
    render(
      <AppContext.Provider value={[appData]}>
        <Results />
      </AppContext.Provider>
    );
    const element = screen.getByText(/Report :/i);
    expect(element).toBeInTheDocument();
  });

  test("renders Enter your details", () => {
    render(<App />);
    const element = screen.getByText(/Enter your details/i);
    expect(element).toBeInTheDocument();
  });

  test("assert if TOTAL_QUESTIONS has correct value", () => {
    expect(TOTAL_QUESTIONS).toBe(questions.length);
  });
});

describe("testing set answer", () => {
  test("testing set answer", () => {
    const { setAnswer } = actions;
    const newState = setAnswer(
      questions[0].id,
      questions[0].question,
      questions[0].questionType
    );

    const expectedState = {
      type: "SET_ANSWER",
      payload: {
        id: questions[0].id,
        data: {
          type: questions[0].questionType,
          value: questions[0].question,
        },
      },
    };
    expect(newState).toStrictEqual(expectedState);
  });
});

describe("testing components", () => {
  test("render radio buttons component", () => {
    render(
      <RadioButtons
        buttons={[
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ]}
        label=""
      />
    );
  });

  test("renders question card ", () => {
    const appData = {
      answers: {
        2: { type: "checkbox", value: ["string", "boolean"] },
      },
    };
    render(
      <AppContext.Provider value={[appData]}>
        <QuestionCard
          id={2}
          question={""}
          questionType={"checkbox"}
          answers={[]}
        />
      </AppContext.Provider>
    );
  });

  test("renders question card ", () => {
    const appData = {
      answers: {
        2: { type: "checkbox", value: ["string", "boolean"] },
      },
    };
    render(
      <AppContext.Provider value={[appData]}>
        <QuestionStatus currentQuestion={1} setCurrentQuestion={jest.fn()} />
      </AppContext.Provider>
    );
  });

  test("render check box options component", () => {
    const appData = {
      answers: {
        2: { type: "checkbox", value: ["string", "boolean"] },
      },
    };
    render(
      <CheckboxOptions
        options={questions[2].answerOptions.map((answer: any) => {
          return {
            option: answer.option,
            value: appData.answers[2]?.value.includes(answer.option) || false,
          };
        })}
        handleChange={jest.fn()}
      />
    );
  });

  test("render percentage indicator component", () => {
    const data = {
      numQuestions: 3,
      total: questions.length,
      color: "green",
    };
    render(
      <PercentageIndicator
        numQuestions={data.numQuestions}
        total={data.total}
        color={data.color}
      />
    );
  });

  test("render piechart component", () => {
    const data = {
      counter: 3,
    };
    render(<Piechart correct={data.counter} total={questions.length} />);
  });

  test("render radio options component", () => {
    const appData = {
      answers: {
        1: { type: "radio", value: "Every 15 days" },
      },
    };
    render(
      <RadioOptions
        options={questions[1].answerOptions.map((answer) => answer.option)}
        value={appData.answers[1]?.value || ""}
        handleChange={jest.fn()}
      />
    );
  });
});

describe("test Input Field component", () => {
  const StyledTextField = styled(TextField)({
    "& .MuiInputLabel-root ": {
      color: "#A9A9A9",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "inherit",
      },
    },
  });
  test("render Input Field component", () => {
    render(
      <StyledTextField
        fullWidth
        id="outlined-name"
        label="Name"
        variant="outlined"
      />
    );
    screen.debug();
  });

  test("snapshot testing", () => {
    const { container } = render(
      <StyledTextField
        fullWidth
        id="outlined-name"
        label="Name"
        variant="outlined"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
