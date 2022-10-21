import { Container } from "components/common/container";
import { ICatalogData } from "features/equipment/Equipment";
import React, { FC, useState } from "react";
import Styles from "./typo_size.module.scss";
import { Menu } from "../equipment/menu/Menu";
import { Tabs } from "../../components/tabs";
import { IComponents } from "../../components/tabs/Tabs";
import { tabsTypoSizeData } from "../../components/tabs/mockdata";
import {
  TypeSizeSertificates,
  TypoSizeSpecification,
  TypoSizeDescription,
  TypoSizeCalculates,
} from "./index";

const typo_sizeContainer: FC<{ data: ICatalogData[] }> = () => {
  const [activeTab, setActiveTabs] = useState(1);
  const handleOnClick = (id: number) => {
    setActiveTabs(id);
  };

  const components: IComponents = {
    tab_1: TypoSizeDescription,
    tab_2: TypoSizeSpecification,
    tab_3: TypeSizeSertificates,
    tab_4: TypoSizeCalculates,
  };

  return (
    <Container className={"wrapper"}>
      <div className={Styles.typo_size_container}>
        <Menu />
        <div className={Styles.typo_size_container_right}>
          <Tabs
            props={tabsTypoSizeData}
            onClick={(id) => handleOnClick(id)}
            activeTab={activeTab}
            size={"max"}
          >
            {React.createElement(components[`tab_${activeTab}`])}
          </Tabs>
        </div>
      </div>
    </Container>
  );
};

export { typo_sizeContainer };
