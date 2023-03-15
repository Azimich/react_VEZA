import Styles from "./Tree.module.scss";
import React, { FC } from "react";
import { IAddition } from "components/TreeSelect/TreeContainer";

interface ISelected {
  listAdditionSelected: IAddition[];
  handleOnChangeSelected: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOnDoubleClickDropSelected: (e: IAddition[]) => void;
}

const SelectedContainer: FC<ISelected> = ({
  listAdditionSelected,
  handleOnChangeSelected,
  handleOnDoubleClickDropSelected,
}) => {
  return (
    <select
      multiple={true}
      className={Styles.selected_option}
      onChange={(e) => handleOnChangeSelected(e)}
    >
      {listAdditionSelected &&
        listAdditionSelected.map((d, i) => {
          return (
            <option
              value={d.id}
              defaultValue={"|"}
              key={d.id}
              onDoubleClick={() => handleOnDoubleClickDropSelected([d])}
            >
              {i + ". " + d.title}
            </option>
          );
        })}
    </select>
  );
};

export { SelectedContainer };
