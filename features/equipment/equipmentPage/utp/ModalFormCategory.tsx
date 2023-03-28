import React, { useEffect, useState } from "react";
import { FC } from "react";
import Styles from "components/tree/Tree.module.scss";
import { useGetCategories } from "service/admin/list/getCategories";
import { TreeContainer } from "components/tree/TreeContainer";
import { Button } from "components/button";
import { checkEmptyObject } from "utils/helpers";
import { usePutCategories } from "service/item/putCategories";
import { SpinnerButtonContainer } from "components/spinners/SpinnerButtonContainer";

interface IData {
  alias: string;
  toggle?: () => void;
}

export interface ICategory {
  id: number;
  alias: string;
  title: string;
  level?: number;
  parentAlias?: string;
  checked?: boolean;
  items?: ICategory[];
}

const ModalFormCategory: FC<IData> = ({ toggle, alias }) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [categoriesSelected, setCategoriesSelected] =
    useState<ICategory>(undefined);
  const [listOpenNode, setListOpenNode] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { getCategories } = useGetCategories();
  const { putCategories } = usePutCategories();

  useEffect(() => {
    getCategories(alias).then((data) => {
      setCategories(data.response);
    });
  }, []);

  const handleOnClick = (
    e: React.MouseEvent<HTMLSpanElement>,
    data: ICategory,
  ) => {
    e.stopPropagation();
    if (data.items?.length > 0) {
      listOpenNode.includes(data.id)
        ? setListOpenNode(listOpenNode.filter((d) => d !== data.id))
        : setListOpenNode((prevState) => [...prevState, data.id]);
    } else {
      !checkEmptyObject(categoriesSelected) && data.id === categoriesSelected.id
        ? setCategoriesSelected(undefined)
        : setCategoriesSelected(data);
    }
  };
  const handleOnClickSave = () => {
    setLoading(true);
    putCategories({ alias: alias, type: categoriesSelected.id }).then(
      (data) => {
        !data.hasErro && window.location.reload();
      },
    );
  };

  return (
    <>
      <div className={Styles.block_tree}>
        <TreeContainer
          data={categories}
          actionClick={handleOnClick}
          listOpenNodes={listOpenNode}
          listChecked={categoriesSelected}
        />
      </div>
      <div className={Styles.block_button}>
        <Button
          className={Styles.button_send}
          onClick={() => handleOnClickSave()}
          disabled={loading}
        >
          {loading ? (
            <span className={Styles.loading}>
              Сохраняю <SpinnerButtonContainer />
            </span>
          ) : (
            "Сохранить"
          )}
        </Button>
        <Button className={Styles.button_send} onClick={toggle}>
          Отменить
        </Button>
      </div>
    </>
  );
};
export { ModalFormCategory };
