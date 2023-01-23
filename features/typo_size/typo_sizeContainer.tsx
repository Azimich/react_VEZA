import { Container } from "components/common/container";
import {
  ICategoriesItem,
  ICategoriesResponseArray,
} from "features/equipment/Equipment";
import React, { FC, useState } from "react";
import Styles from "./typo_size.module.scss";
/*
import { Menu } from "../equipment/menu/Menu";
*/
import { Tabs } from "components/tabs";
import { IComponents, ITab } from "components/tabs/Tabs";
import { tabsTypoSizeData } from "../contacts/mockData";
import {
  TypeSizeSertificates,
  TypoSizeSpecification,
  TypoSizeDescription,
  TypoSizeCalculates,
} from "./index";
/*import {Menu} from "features/equipment/menu/Menu";*/

interface IType_sizeProps {
  dataCat: ICategoriesItem[];
  categories: ICategoriesResponseArray;
  alias: string;
}

const typo_sizeContainer: FC = () => {
  const [activeTab, setActiveTabs] = useState(1);
  const handleOnClick = (e: ITab) => {
    setActiveTabs(e.id);
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
        {/*<Menu categories={categories?.response} data={dataCat} alias={alias}/>*/}
        <div className={Styles.typo_size_container_right}>
          <Tabs
            props={tabsTypoSizeData}
            onClick={(e: ITab) => handleOnClick(e)}
            activeTab={activeTab}
          >
            {React.createElement(components[`tab_${activeTab}`])}
          </Tabs>
        </div>
      </div>
    </Container>
  );
};

export { typo_sizeContainer };
export type { IType_sizeProps };
