import React, { useEffect, useState } from "react";
import { FC } from "react";
import Styles from "../../features/equipment/equipmentPage/utp/UtpModalAction.module.scss";
import { Button } from "components/button";
import { useGetAddition } from "service/admin/list/getAddition";
import { SelectedContainer } from "components/TreeSelect/SelectedContainer";
import { NodeContainer } from "components/TreeSelect/NodeContainer";

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
    eachRecursive(listAdditionTree);
  }, [listAdditionTree]);

  const handleOnClick = (e: IAddition) => {
    if (!e.product) {
      listOpenNode.includes(e.id)
        ? setListOpenNode(listOpenNode.filter((d) => d !== e.id))
        : setListOpenNode((prevState) => [...prevState, e.id]);
    } else {
      setListTreeProduct((prevState) => [...prevState, e]);
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
  return (
    <div className={Styles.action_container}>
      <div className={Styles.box_context}>
        <div className={Styles.block_tree}>
          <NodeContainer
            data={listAdditionTree}
            actionClick={handleOnClick}
            listChecked={listTreeProduct}
            listOpenNodes={listOpenNode}
          />
        </div>

        <div className={Styles.block_action_button}>
          <Button theme={"banner"} size={"max"} color={"green"}>
            {" "}
            {`>`}{" "}
          </Button>
          <Button
            theme={"banner"}
            size={"max"}
            color={"green"}
            onClick={() => handleOnClickSelectedMinus()}
          >
            {" "}
            {`<`}{" "}
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
        <Button className={Styles.button_send} onClick={() => {}}>
          Сохранить
        </Button>
        <Button className={Styles.button_send} onClick={toggle}>
          Отменить
        </Button>
      </div>
    </div>
  );
};
export { TreeContainer };
