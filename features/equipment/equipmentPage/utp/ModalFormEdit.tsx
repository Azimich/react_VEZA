import React, { useEffect, useState } from "react";
import { FC } from "react";
import Styles from "./UtpModalAction.module.scss";

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
        return { id: i, order: i, text: e, disabled: true };
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
    console.log("dragLeaveHandler");
    const style = e.target as HTMLStyleElement;
    style.style.background = "white";
  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    console.log("dragEndHandler");
  }

  function dragOverHandle(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const style = e.target as HTMLStyleElement;
    style.style.background = "gray";
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>, card: IListItem) {
    e.preventDefault();
    setFieldList(
      fieldList.map((c) => {
        if (c.id === card.id) {
          return { ...c, order: currentField.order };
        }
        if (c.id === currentField.id) {
          return { ...c, order: card.order };
        }
        return c;
      }),
    );
    const style = e.target as HTMLStyleElement;
    style.style.background = "white";
  }

  const sortCards = (a: { order: number }, b: { order: number }) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <div className={Styles.action_container}>
      <div className={Styles.panel}>add</div>
      <div>
        {fieldList?.sort(sortCards).map((data, i) => {
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
              {data?.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { ModalFormEdit };
