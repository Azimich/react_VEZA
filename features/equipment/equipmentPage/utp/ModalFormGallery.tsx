import React, { ChangeEvent, useState } from "react";
import { FC } from "react";
import { IEquipmentResponse } from "features/equipment/equipmentPage/Equipment";
import Styles from "./gallery.module.scss";
import { Input } from "components/input";
import { AddIcon } from "components/icons";

interface IData {
  product: IEquipmentResponse;
  toggle?: () => void;
}

export interface IAddition {
  id: number;
  alias: string;
  title: string;
  checked?: boolean;
  selected?: boolean;
  product?: boolean;
  items?: IAddition[];
}

const ModalFormGallery: FC<IData> = (/*{toggle, product}*/) => {
  const [selectedFile, setSelectedFile] = useState([]);

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    } else {
      setSelectedFile((prevState) => [...prevState, e.target.files[0]]);
    }
  };
  return (
    <div className={Styles.box_gallery_container}>
      {selectedFile.map((file) => {
        return (
          <div className={Styles.cell_gallery}>
            <img src={URL.createObjectURL(file)} alt={file.name} />
          </div>
        );
      })}
      <label className={Styles.add_info_banner} htmlFor={"added"}>
        <div className={Styles.added_input}>
          <div className={Styles.added_label}>
            <AddIcon />
            <span className={Styles.added_label_span}>
              <Input
                accept={"image/*"}
                type={"file"}
                id={"added"}
                name={"added"}
                onChange={onSelectFile}
                className={Styles.added_file}
              />
            </span>
          </div>
        </div>
      </label>
    </div>
  );
};

export { ModalFormGallery };
