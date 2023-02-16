import React, { FC, useEffect, useState } from "react";

import Styles from "./FormNews.module.scss";
import { Container } from "components/common/container";
import { SelectContainer } from "components/select/SelectContainer";
import { Input } from "components/input";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadNews } from "components/breadcrumbs/mockData";
import { Button } from "components/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper";

const FormNews: FC = () => {
  const [breadCrumbs, setBreadCrumbs] = useState<IBreadCrumbs[]>(dataBreadNews);
  const [inputList, setInputList] = useState([]);
  const [input, setInput] = useState("");

  const handleOnChange = (event: any) => {
    setInput(event.target.value);
  };

  const handleAddTodo = (todo: string) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setInputList([...inputList, newTodo]);
    // setInput('')
  };
  const handleTodoDeleted = (id: number) => {
    const newList = inputList.filter((todos) => todos.id !== id);
    setInputList(newList);
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

        <div
          className={`${Styles.added_news_todo_container} ${Styles.margin_bottom}`}
        >
          <div className={Styles.add_input}>
            <Button
              children={"Добавить поле"}
              onClick={() => handleAddTodo(input)}
            />
          </div>
          <ul>
            {inputList.map((todos) => (
              <li key={todos.id}>
                {/*{todos.todo}*/}
                <div className={Styles.input_list}>
                  <div className={Styles.input_div}>
                    <Input
                      id={todos.id}
                      value={input}
                      onChange={handleOnChange}
                      placeholder={"Введите зогаловок"}
                      type={"text"}
                    />
                  </div>
                  <Button
                    onClick={() => handleTodoDeleted(todos.id)}
                    children={"X"}
                  />
                </div>
              </li>
            ))}
          </ul>

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
          <div className={`${Styles.margin_bottom}`}>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide className="mySwiper_slide">
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
              </SwiperSlide>
              <SwiperSlide className="mySwiper_slide">
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
              </SwiperSlide>
              <SwiperSlide className="mySwiper_slide">
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
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={Styles.button}>
            <Button children={"Сохранить"} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export { FormNews };
