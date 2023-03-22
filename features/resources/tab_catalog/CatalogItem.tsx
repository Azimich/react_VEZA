import { FC, useState } from "react";
import { ICatalogsItem } from "../tab_bim/Bim";
import Styles from "./Catalog.module.scss";
import { Button } from "components/button";
import { onButtonClick } from "utils/helpers";
import { SpinnerButton } from "components/spinners";
import { ArchiveIcon, CalendarIcon, DownloadIcon } from "components/icons";
import { useDeleteCatalog } from "service/item/deleteCatalog";

const CatalogItem: FC<ICatalogsItem> = ({
  onChange,
  id,
  archived,
  auth,
  title,
  imageUrl,
  url,
  update,
}) => {
  const handleUpdate = new Date(update);
  const { deleteCatalog } = useDeleteCatalog();

  const [download, setDownload] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const handleDisabled = () => {
    setDownload(false);
    setIsLoading(true);
    onButtonClick(url, title).then(() => {
      setDownload(true);
      setIsLoading(false);
    });
  };
  const handleOnClickArchive = (e: number) => {
    deleteCatalog(e).then((data) => {
      data.response && onChange();
    });
  };
  return (
    <div className={`${Styles.box_item} ${archived ? Styles.archived : ""}`}>
      <div className={Styles.box_item__images}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={Styles.box_item__info}>
        <div className={Styles.box_item__info_title}>
          <p>{title}</p>
          {auth.identify && (
            <span
              onClick={() => {
                handleOnClickArchive(id);
              }}
            >
              <ArchiveIcon />
            </span>
          )}
        </div>
        <div className={Styles.box_item__item_button}>
          <div
            onClick={handleDisabled}
            className={
              download ? `${Styles.disabled_active}` : `${Styles.disabled}`
            }
          >
            <Button>
              Скачать
              <span>{isLoading ? <SpinnerButton /> : <DownloadIcon />}</span>
            </Button>
          </div>

          <p>.PDF</p>

          <Button
            type={"button"}
            theme={"banner"}
            children={"Web-Версия"}
            size={"small"}
            color={"green"}
            link={"/pdfviewer?document=" + url}
          />
        </div>
        <ul className={Styles.box_item__info_update}>
          <CalendarIcon />
          <li>
            {`${handleUpdate.getDate()}.${
              handleUpdate.getMonth() + 1 < 10
                ? "0" + (handleUpdate.getMonth() + 1)
                : handleUpdate.getMonth() + 1
            }.${handleUpdate.getFullYear()}`}
          </li>
        </ul>
      </div>
    </div>
  );
};

export { CatalogItem };
