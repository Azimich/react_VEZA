import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

import { ITab } from "../../../components/tabs/Tabs";
import { resourcesPath } from "../../../utils/bootstrap";
import { Container } from "../../../components/common/container";
import Styles from "./Questions.module.scss";
import { Tabs } from "../../../components/tabs";
import { tabsResourcesData } from "../../contacts/mockData";
import { QuestionsItem } from "./QuestionsItem";

import { questionsData } from "../mockData";
import { IQuestions } from "../tab_bim/Bim";
import { Input } from "components/input/InputContainer";
import { SearchInputIcon } from "components/icons/includes/SearchInputIcon";

const QuestionsContainer = () => {
  const [inputValue, setInputValue] = useState<string>();
  const [filteredData, setFilteredData] = useState<IQuestions[]>(questionsData);
  const handleOnChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const router = useRouter();
  const handleOnClickTabs = (e: ITab) => {
    router.push(resourcesPath + e.url);
  };

  useEffect(() => {
    setFilteredData(
      inputValue?.length > 0
        ? questionsData.filter((e) => {
            return e.title.toLowerCase().includes(inputValue.toLowerCase());
          })
        : questionsData
    );
  }, [inputValue]);

  return (
    <Container className={"wrapper"}>
      <div className={Styles.questions_container}>
        <Tabs
          props={tabsResourcesData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          activeTab={3}
          size={"max"}
        />
      </div>
      <div className={Styles.input_box}>
        <Input
          value={inputValue}
          onChange={(event) => handleOnChangeSearch(event)}
          type={"text"}
          name={"search_catalog"}
          placeholder={"Поиск"}
          className={Styles.input_field}
        />
        <SearchInputIcon />
      </div>
      {filteredData.map((item, i) => {
        return <QuestionsItem key={i} {...item} />;
      })}
    </Container>
  );
};
export { QuestionsContainer };
