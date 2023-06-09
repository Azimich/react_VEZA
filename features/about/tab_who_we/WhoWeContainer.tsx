import { ITab } from "components/tabs/Tabs";
import { Container } from "components/common/container";
import { Tabs } from "components/tabs";
import { tabsAboutData } from "../../contacts/mockData";
import { useRouter } from "next/router";
import { aboutPath } from "utils/bootstrap";
import Styles from "./Whowe.module.scss";
import { WhoWeAbout } from "../index";
import { FactoryIcon } from "components/icons";
/*import { Separator } from "components/separator";*/
import React, { FC, ReactNode, useEffect, useState } from "react";
import { Modal, useModal } from "components/modal";
import { IObject, IResponsePlants } from "components/map/Map";
import { Map } from "components/map";
import { ModalFormFactory } from "./ModalFormFactory";
import { ObjectItem } from "../ObjectItem";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadAbout } from "components/breadcrumbs/mockData";
import { useGetListPlantsOffices } from "service/list/getPlantsOffices";
import { SpinnerLoading } from "components/spinners";

const WhoWeContainer: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentForm, setContentForm] = useState<IObject>();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadAbout);
  const { isShow, toggle } = useModal();
  const { getListPlantsOffices } = useGetListPlantsOffices();
  const [listPlants, setListPlants] = useState<IResponsePlants>({
    offices: {
      hasError: false,
      errorMessage: "",
      customErrorCode: 0,
      systemErrorMessage: "",
      response: [],
    },
    plants: [],
  });
  const router = useRouter();

  useEffect(() => {
    getListPlantsOffices().then((data) => {
      setListPlants(data.response);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Кто мы" }]);
  }, [dataBreadAbout]);

  const FormOutPut: ReactNode[] = listPlants
    ? listPlants.plants.map((e) => {
        return (
          <ObjectItem
            {...e}
            onClick={(e: IObject) => handleOnClickModal(e)}
            key={"fac" + e.id}
            icon={<FactoryIcon />}
          />
        );
      })
    : [];

  const handleOnClickTabs = (e: ITab) => {
    router.push(aboutPath + e.url).then();
  };

  const handleOnClickModal = (e: IObject) => {
    setContentForm(e);
    toggle();
  };

  return (
    <>
      {isLoading ? (
        <div className={Styles.loading_container}>
          <SpinnerLoading />
        </div>
      ) : (
        <>
          <Container className={"wrapper_clear"}>
            <BreadCrumbs data={breadCrumbs} />
            <div className={Styles.whowe_container}>
              <Tabs
                props={tabsAboutData}
                onClick={(e) => {
                  handleOnClickTabs(e);
                }}
                activeTab={1}
                size={"small300"}
              />
            </div>
            <Map formOutPut={FormOutPut} />
            <WhoWeAbout />
            <div className={Styles.whowe_container_history_svg}>
              <span className={Styles.whowe_container_history_svg_pc}>
                <img src="/images/timeline.webp" alt="История завода" />
              </span>
            </div>
            {/*            <div className={Styles.whowe_container_video}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Fc1rEkIzOS4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <Separator title={"Наши достижения"} />
            <Achievements />*/}
            <Modal
              isShow={isShow}
              hide={toggle}
              modalContent={<ModalFormFactory {...contentForm} />}
              headerText={contentForm?.object?.name}
              theme={"modal"}
              bgModal={"black"}
            ></Modal>
          </Container>
        </>
      )}
    </>
  );
};

export { WhoWeContainer };
