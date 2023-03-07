import React, { useEffect, useState } from "react";
import { FC } from "react";
import Styles from "./UtpModalAction.module.scss";
import { Input } from "components/input";
import { Button } from "components/button";

interface IData {
  props: string[];
}

interface IListItem {
  id: number;
  order: number;
  text: string;
  disabled: boolean;
}

const ModalFormEdit: FC<IData> = ({ props }) => {
  const [fieldList, setFieldList] = useState<IListItem[]>();
  const [currentField, setCurrentField] = useState(null);
  useEffect(() => {
    setFieldList(
      props.map((e, i) => {
        return { id: i, order: i, text: e, disabled: false };
      }),
    );
  }, []);

  function dragStartHandler(
    e: React.DragEvent<HTMLDivElement>,
    card: IListItem,
  ) {
    setCurrentField(card);
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    console.log("dragEndHandler");
  }

  function dragOverHandle(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>, card: IListItem) {
    e.preventDefault();
    const currentIndex = fieldList.indexOf(card);
    const deleteIndex = fieldList.indexOf(currentField);
    fieldList.splice(currentIndex, 0, currentField);
    fieldList.splice(
      deleteIndex < currentIndex ? deleteIndex : deleteIndex + 1,
      1,
    );
    setFieldList(
      fieldList.map((c, i) => {
        return { ...c, order: i };
      }),
    );
    const style = e.target as HTMLStyleElement;
    style.style.background = "white";
  }

  const handleInputOnChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const data = [...fieldList];
    data[index]["text"] = event.target.value;
    setFieldList(data);
  };
  return (
    <div className={Styles.action_container}>
      <div className={Styles.panel}>add</div>
      <div className={Styles.div_box}>
        {fieldList?.map((data, i) => {
          return (
            <div
              draggable={true}
              key={i}
              onDragStart={(e) => dragStartHandler(e, data)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDragOver={(e) => dragOverHandle(e)}
              onDrop={(e) => dropHandler(e, data)}
            >
              <Input
                draggable={false}
                onChange={(event) => handleInputOnChange(i, event)}
                value={data?.text}
                id={"adv"}
              />
            </div>
          );
        })}
      </div>
      <div className={Styles.block_button}>
        <Button className={Styles.button_send}>Сохранить</Button>
        <Button className={Styles.button_send}>Отменить</Button>
      </div>
    </div>
  );
};
export { ModalFormEdit };
