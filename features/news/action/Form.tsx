import React, { FC, useEffect, useState } from "react";

import Styles from "./FormNews.module.scss";
import { Container } from "components/common/container";
import { Input } from "components/input";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadNews } from "components/breadcrumbs/mockData";
import { Button } from "components/button";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation, EffectCards } from "swiper";
/*import {FormikValues, useFormik} from "formik";
import {ValidationJob} from "features/auth/formsData/ValidationsShemas";*/

const FormNews: FC = () => {
  const [breadCrumbs, setBreadCrumbs] = useState<IBreadCrumbs[]>(dataBreadNews);
  const [inputFields, setInputFields] = useState([""]);

  /*    const formik: FormikValues = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            forgot: false,
            private_police: false,
        },
        validationSchema: ValidationJob(),
        onSubmit: () => {
            console.log("");
        },
    });*/

  const addFields = () => {
    setInputFields([...inputFields, ""]);
  };
  const deleteFields = (index: number) => {
    if (inputFields.length < 2) {
      return;
    } else {
      const data = [...inputFields];
      data.splice(index, 1);
      setInputFields(data);
    }
  };

  const handleFormChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const data = [...inputFields];
    data[index] = event.target.value;
    setInputFields(data);
  };

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Добавить новость" }]);
  }, [dataBreadNews]);

  return (
    <Container className={"wrapper_clear"}>
      <BreadCrumbs data={breadCrumbs} />
      <div className={Styles.added_news}>
        {/*                <SelectContainer
                    instanceId={"Select_search"}
                    onChange={() => {
                    }}
                    optionsData={[]}
                    defaultValue={{}}
                />*/}
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
        <div>
          <Input
            id={"title_block"}
            name={"title_block"}
            placeholder={"Заголовок"}
            value={""}
          />
        </div>
        <textarea></textarea>
        <div>
          <Input
            id={"title_block"}
            name={"title_block"}
            placeholder={"Заголовок"}
            value={""}
          />
        </div>

        <div
          className={`${Styles.added_news_container} ${Styles.margin_bottom}`}
        >
          <div className={Styles.add_input}>
            <Button children={"Добавить поле"} onClick={() => addFields()} />
          </div>
          <ul>
            {inputFields.map((input, index) => (
              <li key={index}>
                <div className={Styles.input_list}>
                  <div className={Styles.input_div}>
                    <Input
                      id={index.toString()}
                      value={input}
                      onChange={(event) => handleFormChange(index, event)}
                      placeholder={""}
                      type={"text"}
                    />
                  </div>
                  <Button onClick={() => deleteFields(index)} children={"-"} />
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
          {/*<div className={`${Styles.margin_bottom}`}>*/}
          {/*  <Swiper*/}
          {/*    effect={"cards"}*/}
          {/*    grabCursor={true}*/}
          {/*    modules={[EffectCards, Pagination, Navigation, Autoplay]}*/}
          {/*    className="mySwiper"*/}
          {/*  >*/}
          {/*    <SwiperSlide className="mySwiper_slide">*/}
          {/*      <div className={Styles.added_news_banner}>*/}
          {/*        <div className={Styles.added_input}>*/}
          {/*          <label className={Styles.added_label}>*/}
          {/*            <span className={Styles.added_label_span}>*/}
          {/*              <Input*/}
          {/*                accept={"image/*"}*/}
          {/*                type={"file"}*/}
          {/*                id={"added"}*/}
          {/*                name={"added"}*/}
          {/*                className={Styles.added_file}*/}
          {/*              />*/}
          {/*            </span>*/}
          {/*          </label>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </SwiperSlide>*/}
          {/*    <SwiperSlide className="mySwiper_slide">*/}
          {/*      <div className={Styles.added_news_banner}>*/}
          {/*        <div className={Styles.added_input}>*/}
          {/*          <label className={Styles.added_label}>*/}
          {/*            <span className={Styles.added_label_span}>*/}
          {/*              <Input*/}
          {/*                accept={"image/*"}*/}
          {/*                type={"file"}*/}
          {/*                id={"added"}*/}
          {/*                name={"added"}*/}
          {/*                className={Styles.added_file}*/}
          {/*              />*/}
          {/*            </span>*/}
          {/*          </label>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </SwiperSlide>*/}
          {/*    <SwiperSlide className="mySwiper_slide">*/}
          {/*      <div className={Styles.added_news_banner}>*/}
          {/*        <div className={Styles.added_input}>*/}
          {/*          <label className={Styles.added_label}>*/}
          {/*            <span className={Styles.added_label_span}>*/}
          {/*              <Input*/}
          {/*                accept={"image/*"}*/}
          {/*                type={"file"}*/}
          {/*                id={"added"}*/}
          {/*                name={"added"}*/}
          {/*                className={Styles.added_file}*/}
          {/*              />*/}
          {/*            </span>*/}
          {/*          </label>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </SwiperSlide>*/}
          {/*  </Swiper>*/}
          {/*</div>*/}
          {/*<div className={Styles.button}>*/}
          {/*  <Button children={"Сохранить"} />*/}
          {/*</div>*/}
        </div>
      </div>
    </Container>
  );
};

export { FormNews };
