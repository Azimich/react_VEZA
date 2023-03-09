import Styles from "./Utp.module.scss";
import { Button } from "components/button";
import { Modal, useModal } from "components/modal";
import { ModalForm } from "./ModalForm";
import { FC, useEffect, useState } from "react";
import { IEquipmentItem } from "features/equipment/equipmentPage/Equipment";
import { useAppSelector } from "store/hooks";
import { getAuth } from "features/auth/AuthSlice";
import { ModalFormAdvertiseEdit } from "features/equipment/equipmentPage/utp/ModalFormAdversiseEdit";
import { PencilIcon } from "components/icons";
import { useGetAdvertise } from "service/admin/list/getAdvertise";

const UtpContainer: FC<IEquipmentItem> = (props) => {
  const { details, blocks } = props;

  const auth = useAppSelector(getAuth);
  const { isShow, toggle } = useModal();
  const { isShow: isShowEditAdvertise, toggle: toggleEditAdvertise } =
    useModal();
  const data = details[0].description;
  const content = <ModalForm props={blocks} />;
  const [advantages, setAdvantages] = useState<string[]>([]);
  const { getAdvertise } = useGetAdvertise();
  useEffect(() => {
    !isShowEditAdvertise &&
      getAdvertise(props.alias).then((data) => {
        setAdvantages(data.response);
      });
  }, [isShowEditAdvertise]);

  const contentEdit = (
    <ModalFormAdvertiseEdit
      advantages={advantages}
      toggle={toggleEditAdvertise}
      alias={props.alias}
    />
  );

  return (
    <div className={Styles.utp__container}>
      <div className={Styles.utp__container__top}>
        <div className={Styles.utp__container__top__list}>
          {auth.identify && auth.data.response.role === 1 && (
            <div onClick={toggleEditAdvertise} className={Styles.top_list_edit}>
              <PencilIcon />
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
      <div className={Styles.lh} dangerouslySetInnerHTML={{ __html: data }} />
      <Modal
        isShow={isShowEditAdvertise}
        hide={toggleEditAdvertise}
        modalContent={contentEdit}
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
