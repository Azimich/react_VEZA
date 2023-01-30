import React, { FC, useEffect, useState } from "react";

import Styles from "./FormNews.module.scss";
import { Container } from "components/common/container";
import { SelectContainer } from "components/select/SelectContainer";
import { Input } from "components/input";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadNews } from "components/breadcrumbs/mockData";

const FormNews: FC = () => {
  const [breadCrumbs, setBreadCrumbs] = useState<IBreadCrumbs[]>(dataBreadNews);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Добавить новость" }]);
  }, [dataBreadNews]);
  return (
    <Container className={"wrapper_clear"}>
      <BreadCrumbs data={breadCrumbs} />
      <div className={Styles.added_news}>
        <SelectContainer
          instanceId={"Select_search"}
          onChange={() => {}}
          optionsData={[]}
          defaultValue={{}}
        />
        <div className={Styles.added_news_banner}>
          <Input type={"file"} id={"added"} name={"added"} />
        </div>
      </div>
    </Container>
  );
};

export { FormNews };
