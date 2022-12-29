import { Container } from "components/common/container";
import { FC } from "react";
import { Description_Images } from "./Images";
import { Button } from "components/button";
import Styles from "./Description.module.scss";
import { Accordeon } from "components/accordeon";
import { DescriptionTable } from "./DescriptionTable";
import { Separator } from "components/separator";
import { Modal, useModal } from "components/modal";
import { ModalForm } from "./descModal/ModalForm";

const DescriptionContainer: FC = () => {
  const { isShow, toggle } = useModal();

  return (
    <Container className={"wrapper"}>
      <Description_Images />
      <div className={Styles.button}>
        <Button children={"Документация"} size={"max"} onClick={toggle} />
        <Modal
          isShow={isShow}
          hide={toggle}
          modalContent={<ModalForm />}
          theme={"full_modal"}
          bgModal={"white"}
        />
      </div>
      <Accordeon title={"Название таблицы"} icon_show={false}>
        <DescriptionTable />
      </Accordeon>
      <Separator title={"Процесс монтажа"} />
      <div className={Styles.video}>
        <video
          src="/images/banner_2.mp4"
          autoPlay={true}
          controls={true}
        ></video>
      </div>
    </Container>
  );
};
export { DescriptionContainer };
