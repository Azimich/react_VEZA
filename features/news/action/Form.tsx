import React, { FC, useEffect, useState } from "react";

import Styles from "./FormNews.module.scss";
import { Container } from "components/common/container";
import { SelectContainer } from "components/select/SelectContainer";
import { Input } from "components/input";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadNews } from "components/breadcrumbs/mockData";
import { Button } from "components/button";

const FormNews: FC = () => {
  const [breadCrumbs, setBreadCrumbs] = useState<IBreadCrumbs[]>(dataBreadNews);
  const [value, setValue] = useState("");

  const handleOnchange = (event: any) => {
    setValue(event.target.value);
    console.log(value);
  };

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Добавить новость" }]);
  }, [dataBreadNews]);

  return (
    <Container className={"wrapper_clear"}>
      <BreadCrumbs data={breadCrumbs} />
      <div className={Styles.added_news}>
        <SelectContainer
          instanceId={"Select_search"}
          onChange={() => {}}
          optionsData={[]}
          defaultValue={{}}
        />
        <div className={Styles.added_news_banner}>
          <div className={Styles.added_input}>
            <label className={Styles.added_label}>
              <span className={Styles.added_label_span}>
                <Input
                  accept={"image/*"}
                  type={"file"}
                  id={"added"}
                  name={"added"}
                  className={Styles.added_file}
                />
              </span>
            </label>
          </div>
        </div>
        <div className={Styles.added_news_todo_container}>
          <div className={Styles.input_block}>
            <Input
              name={"todo"}
              id={"todo_id"}
              title={"Введите заголовок"}
              value={value}
              onChange={handleOnchange.bind(this)}
            />
            <Button children={"Добавить"} type={"button"} />
          </div>
          <div className={Styles.textarea_block}>
            <textarea name={"text"} placeholder={"Добавить описание"} />
          </div>
        </div>
        <div className={Styles.added_news_todo_container}>
          <div className={Styles.input_block}>
            <Input
              name={"todo"}
              id={"todo_id"}
              title={"Введите название оснавных пунктов"}
              value={value}
              onChange={handleOnchange.bind(this)}
              className={Styles.input_block_input}
            />
            <Button children={"Добавить"} type={"button"} />
          </div>
          <div className={Styles.input_block}>
            <Input
              name={"todo"}
              id={"todo_id"}
              title={"Добавить ключевые пункты"}
              value={value}
              onChange={handleOnchange.bind(this)}
            />
            <Button children={"Добавить"} type={"button"} />
          </div>
          <div className={Styles.added_news_todo_container}>
            <div className={Styles.input_block}>
              <Input
                name={"todo"}
                id={"todo_id"}
                title={"Введите заголовок"}
                value={value}
                onChange={handleOnchange.bind(this)}
              />
              <Button children={"Добавить"} type={"button"} />
            </div>
            <div className={Styles.textarea_block}>
              <textarea name={"text"} placeholder={"Добавить описание"} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { FormNews };
