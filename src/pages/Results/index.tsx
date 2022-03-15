import { Link, RouteComponentProps } from "@reach/router";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import { ResultItem } from "../../components/ResultItem";
import getQuestionState from "../../redux/selectors";
import { Question } from "../../types";

import "./style.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ResultsPage = (props: RouteComponentProps) => {
  const { questions, answers } = useSelector(getQuestionState);

  const getResults = () => {
    let count = 0;
    questions.forEach((qs: Question, index: number) => {
      if (qs.correct_answer === answers[index]) {
        count++;
      }
    });
    return count;
  };

  return (
    <div className="results-container">
      {questions && questions.length > 0 && (
        <>
          <Typography.Title level={2}>
            You scored {getResults()} / {questions.length}
          </Typography.Title>
          {questions.map((qs: Question, index: number) => (
            <ResultItem
              key={qs.question}
              question={qs}
              answer={answers[index]}
            />
          ))}
        </>
      )}
      <div className="button-wrapper">
        <Link to="/" className="btn-play">
          PLAY AGAIN
        </Link>
      </div>
    </div>
  );
};
