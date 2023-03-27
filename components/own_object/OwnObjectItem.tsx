import React, { FC } from "react";
import Styles from "./OwnObject.module.scss";
import { IObjects } from "../../types/response";
import { Editor } from "components/editor_pen";
import { Modal, useModal } from "components/modal";
import { EditObjectIndustry } from "features/decision/modal/EditObjectIndustry";
import { useAppSelector } from "store/hooks";
import { getAuth } from "features/auth/AuthSlice";

const OwnObjectItem: FC<IObjects> = ({
  title,
  // titleDelivery,
  imageUrl,
  categories,
  address,
  slidePosition,
  industryObjectId,
}) => {
  const slide_class = `col${slidePosition}`;
  const { isShow, toggle } = useModal();
  const auth = useAppSelector(getAuth);

  const contentModal = (
    <EditObjectIndustry
      title={title}
      imageUrl={imageUrl}
      categories={[]}
      address={address}
      toggle={toggle}
      slidePosition={slidePosition}
      industryObjectId={industryObjectId}
    />
  );

  return (
    <>
      <li className={Styles[slide_class]}>
        <img src={imageUrl} alt="Фото" />
        <div className={Styles.object__slider}>
          <span>
            <p className={Styles.title}>{title}</p>
            <p className={Styles.address}>{address}</p>
            {categories?.map((data, i) => {
              return <p key={i}>{data.title}</p>;
            })}
          </span>
        </div>
        {auth.identify && auth.data.response && (
          <span className={Styles.button_editor} onClick={toggle}>
            <Editor />
          </span>
        )}
      </li>
      {/*Модалка для редактирования наши объекты*/}
      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={contentModal}
        headerText={"Редактирование"}
        bgModal={"white"}
        theme={"full_modal"}
      />
    </>
  );
};

export { OwnObjectItem };
