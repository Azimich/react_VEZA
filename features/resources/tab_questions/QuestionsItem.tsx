import React from "react";
import { FC } from "react";
import Styles from "./Questions.module.scss";
import { IQuestions } from "../tab_bim/Bim";
import { Accordeon } from "components/accordeon";

const QuestionsItem: FC<IQuestions> = ({ title, desc }) => {
  return (
    <>
      <Accordeon title={title}>{desc}</Accordeon>
    </>
  );
};

export { QuestionsItem };
