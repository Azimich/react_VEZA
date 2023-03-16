import React, { ChangeEvent, useEffect, useState } from "react";
import { FC } from "react";
import { IEquipmentResponse } from "features/equipment/equipmentPage/Equipment";
import Styles from "./gallery.module.scss";
import { Input } from "components/input";
import { AddIcon, CloseIcon } from "components/icons";
import { useFiles } from "service/admin/list/getFiles";
import { Button } from "components/button";
import { usePostGalleryProduct } from "service/admin/item/postGalleryProduct";

interface IData {
  product: IEquipmentResponse;
  toggle?: () => void;
}

const ModalFormGallery: FC<IData> = ({ toggle, product }) => {
  const { getFiles } = useFiles();
  const { postGalleryProduct } = usePostGalleryProduct();
  const [selectedFile, setSelectedFile] = useState([]);
  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    } else {
      for (let i = 0; i < e.target.files.length; i++) {
        setSelectedFile((prevState) => [...prevState, e.target.files[i]]);
      }
    }
  };
  useEffect(() => {
    setSelectedFile([]);
    product &&
      product.response.images.map((e) => {
        getFiles(e.pc)
          .then((response) => response.blob())
          .then((imageBlob) => {
            setSelectedFile((prevState) => [...prevState, imageBlob]);
          });
      });
  }, [product]);
  const handleOnClickDelete = (id: number) => {
    setSelectedFile(selectedFile.filter((e, i) => i !== id));
  };
  const handleOnClickSave = () => {
    postGalleryProduct(selectedFile, product.response.alias).then((data) => {
      console.log("data", data);
    });
  };
  return (
    <>
      <div className={Styles.box_gallery_container}>
        {selectedFile.map((file, i) => {
          return (
            <div className={Styles.cell_gallery} key={i}>
              <img src={URL.createObjectURL(file)} alt={file.name} />
              <span
                className={Styles.delete_icon}
                onClick={() => handleOnClickDelete(i)}
              >
                <CloseIcon />
              </span>
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
      <div className={Styles.block_button}>
        <Button
          className={Styles.button_send}
          onClick={() => handleOnClickSave()}
        >
          Сохранить
        </Button>
        <Button className={Styles.button_send} onClick={toggle}>
          Отменить
        </Button>
      </div>
    </>
  );
};

export { ModalFormGallery };
