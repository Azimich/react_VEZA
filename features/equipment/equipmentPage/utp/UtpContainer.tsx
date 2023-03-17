import Styles from "./Utp.module.scss";
import { Button } from "components/button";
import { Modal, useModal } from "components/modal";
import { ModalForm } from "./ModalForm";
import React, { FC, useEffect, useState } from "react";
import { IEquipmentItem } from "features/equipment/equipmentPage/Equipment";
import { useAppSelector } from "store/hooks";
import { getAuth } from "features/auth/AuthSlice";
import { ModalFormAdvertiseEdit } from "features/equipment/equipmentPage/utp/ModalFormAdversiseEdit";
import { useGetAdvertise } from "service/admin/list/getAdvertise";
import { Editor } from "components/editor_pen";
import { ModalFormDescriptionEdit } from "features/equipment/equipmentPage/utp/ModalFormDescriptionEdit";
import { useGetDescription } from "service/admin/list/getDescription";

const UtpContainer: FC<IEquipmentItem> = (props) => {
  const { blocks } = props;
  const auth = useAppSelector(getAuth);
  const { isShow, toggle } = useModal();
  const { isShow: isShowEditAdvertise, toggle: toggleEditAdvertise } =
    useModal();
  const { isShow: isShowDescription, toggle: toggleEditDescription } =
    useModal();
  const content = <ModalForm props={blocks} />;
  const [advantages, setAdvantages] = useState<string[]>([]);
  const [description, setDescription] = useState<string>(null);
  const { getAdvertise } = useGetAdvertise();

  const { getDescription } = useGetDescription();

  useEffect(() => {
    !isShowEditAdvertise &&
      getAdvertise(props.alias).then((data) => {
        setAdvantages(data.response);
      });
  }, [isShowEditAdvertise]);

  useEffect(() => {
    !isShowDescription &&
      getDescription(props.alias).then((data) => {
        setDescription(data.response.description);
      });
  }, [isShowDescription]);

  const contentEdit = (
    <ModalFormAdvertiseEdit
      advantages={advantages}
      toggle={toggleEditAdvertise}
      alias={props.alias}
    />
  );

  const contentEditDescription = (
    <ModalFormDescriptionEdit
      description={description}
      toggle={toggleEditDescription}
      alias={props.alias}
    />
  );

  return (
    <div className={Styles.utp__container}>
      <div className={Styles.utp__container__top}>
        <div className={Styles.utp__container__top__list}>
          {auth.identify && auth.data.response.role === 1 && (
            <div className={Styles.editor} onClick={toggleEditAdvertise}>
              <Editor />
            </div>
          )}
          {advantages &&
            advantages.map((d, i) => {
              return <p key={i}>{d}</p>;
            })}
        </div>
        <div className={Styles.utp__container__top__buttons}>
          <div>
            <div className={Styles.utp__container__top__calculation}>
              <p>Выполнить подбор необходимого оборудования</p>
              <Button children={"Расчёт"} link={"/develop"} />
            </div>
            <div className={Styles.utp__container__top__download}>
              <p>Скачать BIM-модель</p>
              <Button children={"Документация"} onClick={toggle} />
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.block_description}>
        {auth.identify && auth.data.response.role === 1 && (
          <div className={Styles.editor} onClick={toggleEditDescription}>
            <Editor />
          </div>
        )}
        <div
          className={Styles.lh}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <Modal
        isShow={isShowEditAdvertise}
        hide={toggleEditAdvertise}
        modalContent={contentEdit}
        headerText={"Редактирование"}
        theme={"modal_edit_text"}
        bgModal={"white"}
      />
      <Modal
        isShow={isShowDescription}
        hide={toggleEditDescription}
        modalContent={contentEditDescription}
        headerText={"Редактирование"}
        theme={"modal_edit_text"}
        bgModal={"white"}
      />
      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={content}
        theme={"full_modal"}
        bgModal={"white"}
      />
    </div>
  );
};

export { UtpContainer };
