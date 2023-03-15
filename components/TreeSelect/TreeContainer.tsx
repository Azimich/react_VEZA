import React, { useEffect, useState } from "react";
import { FC } from "react";
import Styles from "../../features/equipment/equipmentPage/utp/UtpModalAction.module.scss";
import { Button } from "components/button";
import { useGetAddition } from "service/admin/list/getAddition";
import { SelectedContainer } from "components/TreeSelect/SelectedContainer";
import { NodeContainer } from "components/TreeSelect/NodeContainer";
import { usePutAdditional } from "service/admin/item/putAdditional";

interface IData {
  alias: string;
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

const TreeContainer: FC<IData> = ({ toggle, alias }) => {
  const { getAddition } = useGetAddition();
  const { putAdditional } = usePutAdditional();
  const [listAdditionTree, setListAdditionTree] = useState<IAddition[]>([]);
  const [listAdditionSelected, setListAdditionSelected] = useState<IAddition[]>(
    [],
  );

  const [additionSelectedOptions, setAdditionSelectedOptions] = useState<
    string[]
  >([]);
  const [listOpenNode, setListOpenNode] = useState<number[]>([]);
  const [listTreeProduct, setListTreeProduct] = useState<IAddition[]>([]);

  useEffect(() => {
    getAddition(alias).then((data) => {
      setListAdditionTree(data.response);
    });
  }, []);
  const eachRecursive = (obj: IAddition[]) => {
    for (const k in obj) {
      if (obj[k]?.checked) {
        setListAdditionSelected((prevState) => [...prevState, obj[k]]);
      }
      if (obj[k].items && obj[k].items.length > 0) {
        eachRecursive(obj[k].items);
      }
    }
  };

  useEffect(() => {
    setListAdditionSelected([]);
    eachRecursive(listAdditionTree);
  }, [listAdditionTree]);

  const handleOnClick = (
    e: React.MouseEvent<HTMLSpanElement>,
    data: IAddition,
  ) => {
    e.stopPropagation();
    if (!data.product) {
      listOpenNode.includes(data.id)
        ? setListOpenNode(listOpenNode.filter((d) => d !== data.id))
        : setListOpenNode((prevState) => [...prevState, data.id]);
    } else if (e.ctrlKey) {
      setListTreeProduct((prevState) => [...prevState, data]);
    } else {
      setListTreeProduct([data]);
    }
  };

  const handleOnDoubleClickDropSelected = (d: IAddition[]) => {
    setListAdditionSelected(
      listAdditionSelected.filter((data) => !d.includes(data)),
    );
  };
  const handleOnChangeSelected = (d: React.ChangeEvent<HTMLSelectElement>) => {
    setAdditionSelectedOptions(
      [...d.target.options]
        .filter(({ selected }) => selected)
        .map(({ value }) => value),
    );
  };
  const handleOnClickSelectedMinus = () => {
    setListAdditionSelected(
      listAdditionSelected.filter(
        (data) => !additionSelectedOptions.includes(data.id.toString()),
      ),
    );
  };
  const handleOnClickSelectedPlus = () => {
    listTreeProduct.map((e) => {
      if (!listAdditionSelected.includes(e)) {
        setListAdditionSelected([...listAdditionSelected, ...listTreeProduct]);
      }
    });
  };

  const handleOnClickSave = () => {
    putAdditional(listAdditionSelected, alias).then(() => {
      toggle();
    });
  };
  return (
    <div className={Styles.action_container}>
      <div className={Styles.box_context}>
        <div className={Styles.block_tree}>
          <NodeContainer
            data={listAdditionTree}
            actionClick={handleOnClick}
            actionDoubleClick={handleOnClickSelectedPlus}
            listChecked={listTreeProduct}
            listOpenNodes={listOpenNode}
          />
        </div>

        <div className={Styles.block_action_button}>
          <Button
            theme={"banner"}
            size={"max"}
            color={"green"}
            onClick={() => handleOnClickSelectedPlus()}
          >
            {`>`}
          </Button>
          <Button
            theme={"banner"}
            size={"max"}
            color={"green"}
            onClick={() => handleOnClickSelectedMinus()}
          >
            {`<`}
          </Button>
        </div>

        <div className={Styles.block_selected}>
          <SelectedContainer
            listAdditionSelected={listAdditionSelected}
            handleOnChangeSelected={handleOnChangeSelected}
            handleOnDoubleClickDropSelected={handleOnDoubleClickDropSelected}
          />
        </div>
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
        <p>!!! Чтобы выделить несколько записей удерживайте CTRL</p>
      </div>
    </div>
  );
};
export { TreeContainer };
