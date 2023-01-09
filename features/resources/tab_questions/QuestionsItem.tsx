import React from "react";
import { FC } from "react";
import { IQuestions } from "../tab_bim/Bim";
import { Accordeon } from "components/accordeon";

const QuestionsItem: FC<IQuestions> = ({ answer, question }) => {
  return <Accordeon title={question}>{answer}</Accordeon>;
};

export { QuestionsItem };
