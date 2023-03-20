import React, { FC, useEffect } from "react";

import { DecisionItem } from "./DecisionItem";
import Styles from "./Decision.module.scss";
import { Container } from "components/common/container";
import { BreadCrumbs } from "components/breadcrumbs";
import { dataBreadDecision } from "components/breadcrumbs/mockData";
import { ISSRDecisionArray } from "features/decision/Decision";
import { ConnectError } from "components/connect_error";
import { Button } from "components/button";
import { Modal, useModal } from "components/modal";
import { AdminAddModal } from "features/decision/modal/AdminAddModal";
import { useAppSelector } from "store/hooks";
import { getAuth } from "features/auth/AuthSlice";

const DecisionContainer: FC<ISSRDecisionArray> = ({ decision }) => {
  const { isShow, toggle } = useModal();
  const auth = useAppSelector(getAuth);

  useEffect(() => {
    document.getElementById("main") &&
      document.getElementById("main").animate({ scrollTop: 0 });
  }, []);

  return (
    <Container className="wrapper">
      <BreadCrumbs data={dataBreadDecision} />
      {auth.identify && auth.data.response && (
        <div className={Styles.button}>
          <Button children={"Добавить отрасль"} onClick={toggle} />
        </div>
      )}

      <div className={`${Styles.decision__container} ${Styles.angry_grid}`}>
        {!decision?.hasError ? (
          decision?.response?.map((e) => {
            return <DecisionItem {...e} key={e.industryId} />;
          })
        ) : (
          <ConnectError type={"text"} />
        )}
      </div>

      <Modal
        modalContent={<AdminAddModal />}
        isShow={isShow}
        hide={toggle}
        headerText={"Редактирование"}
        theme={"full_modal"}
        bgModal={"white"}
      />
    </Container>
  );
};

export { DecisionContainer };
