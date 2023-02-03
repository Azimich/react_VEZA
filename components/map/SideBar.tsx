import Styles from "./Map.module.scss";
import { FC } from "react";
import { CheckboxWithLabel } from "../checkbox";
import { ITab } from "../tabs/Tabs";

interface ISideBarData {
  tabsSocialData: ITab[];
  onChange: (e: ITab) => void;
  selectedCheckBox: ITab[];
}

const SideBar: FC<ISideBarData> = ({
  tabsSocialData,
  onChange,
  selectedCheckBox,
}) => {
  console.log("12321", tabsSocialData);
  return (
    <div className={Styles.side_bar}>
      <div className={Styles.side_bar_title}>Наши референсы</div>
      {tabsSocialData.map((e) => {
        return (
          <CheckboxWithLabel
            name={e.url}
            title={e.title}
            id={String(e.id)}
            key={e.id}
            selectedCheckBox={selectedCheckBox}
            onChangeData={() => onChange(e)}
            classCheck={Styles.side_bar_checkbox}
          />
        );
      })}
    </div>
  );
};
export { SideBar };
