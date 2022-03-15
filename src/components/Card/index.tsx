import { Button, Typography } from "antd";
import cx from "classnames";

import "./style.css";

type Props = {
  title: string;
  handleClick: (args: string) => void;
};

export const QuestionCard = ({ title, handleClick }: Props) => (
  <div className={cx("question-card")}>
    <Typography.Title level={3}>{title}</Typography.Title>
    <Button className={cx("btn-answer")} onClick={() => handleClick("True")}>
      TRUE
    </Button>
    <Button className={cx("btn-answer")} onClick={() => handleClick("False")}>
      FALSE
    </Button>
  </div>
);
