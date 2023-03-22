import React, { FC } from "react";

import { Button } from "components/button";
import { INewsDataItem } from "./News";
import Styles from "./News.module.scss";
import { ArrowRightIcon, EyeIcon } from "components/icons";
import { newsPath } from "utils/bootstrap";
import { Editor } from "components/editor_pen";
import { useAppSelector } from "store/hooks";
import { getAuth } from "features/auth/AuthSlice";
import { Modal, useModal } from "components/modal";
import { ModalNewsEdit } from "./modalNews/ModalNewsEdit";

const NewsWithItem: FC<INewsDataItem> = ({
  newsName,
  alias,
  shortDescription,
  imageModel,
  statistics,
}) => {
  const { isShow, toggle } = useModal();
  const auth = useAppSelector(getAuth);

  const contentModal = (
    <ModalNewsEdit
      description={shortDescription}
      title={newsName}
      image={imageModel}
      toggle={toggle}
    />
  );

  return (
    <div className={Styles.news_list}>
      <div className={Styles.news_container_item}>
        <div className={Styles.news_container_item_image}>
          <span>
            <EyeIcon />
            {statistics?.statisticsTotal}
          </span>
          <img src={imageModel.horizontal.pc} alt={newsName} />
        </div>
        <div className={Styles.news_container_item_right}>
          <div className={Styles.news_editor_position}>
            <h4 className={Styles.news_container_item_right_title}>
              {newsName}
            </h4>
            <div className={Styles.news_container_item_right_desc}>
              {shortDescription}
            </div>
            {auth.identify && auth.data.response && (
              <div className={Styles.news_editor} onClick={toggle}>
                <Editor />
              </div>
            )}
          </div>
          <Button
            link={newsPath + alias}
            theme={"news"}
            size={"context"}
            color={"link"}
          >
            <span>
              <p>Подробнее</p>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
      <Modal
        modalContent={contentModal}
        isShow={isShow}
        hide={toggle}
        headerText={"Редактирование"}
        theme={"full_modal"}
        bgModal={"white"}
      />
    </div>
  );
};

export { NewsWithItem };
