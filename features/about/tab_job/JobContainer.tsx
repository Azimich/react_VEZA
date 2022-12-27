import React, { FC, ReactNode, useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { ITab } from "components/tabs/Tabs";
import { aboutPath } from "utils/bootstrap";
import { Container } from "components/common/container";
import Styles from "./Job.module.scss";
import { Tabs } from "components/tabs";
import { tabsAboutData, tabsJobData } from "../../contacts/mockData";
/*import { jobObject } from "./mockJob";*/
import { Separator } from "components/separator";
import { SelectContainer } from "components/select/SelectContainer";
import { Button } from "components/button";
import { Map } from "components/map";
import { IObject } from "components/map/Map";
import { ObjectItem } from "../ObjectItem";
import { SideBar } from "components/map/SideBar";
import { Modal, useModal } from "components/modal";
import { ModalFormJob } from "features/about";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadAbout } from "components/breadcrumbs/mockData";
import { useGetListCities, useGetVacancies } from "service/list";
import { IOptionItem } from "components/select/Select";
import { useGetJobCity } from "service/item/getJob";
import {
  IJob,
  IJobsResponseArray,
  IVacancies,
  IVacanciesResponseArray,
} from "features/about/tab_job/Job";
import { ConnectError } from "components/connect_error";
import { MessageItem } from "components/massage/MessageItem";
import { JobItem } from "features/about/tab_job/JobItem";
import { useGetDaData } from "service/getDaData";

const JobContainer: FC = () => {
  const [sideBarData] = useState(tabsJobData);
  const [selectedCheckBox, setSelectedCheckBox] = useState<ITab[]>([]);
  const [vacanciesData, setVacanciesData] = useState<IVacanciesResponseArray>();
  const [selectedReferenceData, setSelectedReferenceData] = useState<IObject[]>(
    [],
  );
  const selectRef = useRef(null);
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadAbout);
  const [cities, setCities] = useState<IJob[]>();
  const [selectedCities, setSelectedCities] = useState<IOptionItem>(undefined);
  const { isShow, toggle } = useModal();
  const [jobs, setJobs] = useState<IJobsResponseArray>();
  const { getListCities } = useGetListCities();
  const { getVacancies } = useGetVacancies();
  const { getJobCity } = useGetJobCity();
  const { getGeoCode } = useGetDaData();

  useEffect(() => {
    /**
     * Получаем данные о городах и добавляем в стеайт
     * который потом выводим в options
     **/
    getListCities().then((data) => {
      !data.hasError && setCities(data.response);
    });

    getVacancies().then((data) => {
      setVacanciesData(data);
    });
  }, []);

  useEffect(() => {
    const res = cities
      ?.filter((e) => {
        return e.isDefaultCity;
      })
      .map((data) => {
        return { value: data.alias, label: data.city };
      })
      ?.shift();

    setSelectedCities(res);

    handleSelectChange(res);
  }, [cities]);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Вакансии" }]);
  }, [dataBreadAbout]);

  const router = useRouter();
  const handleOnClickMap = (ref: { offsetTop: number }, e: IVacancies) => {
    const loc_selected = cities.filter((data) => data.alias === e.city).shift();
    const loc_selected_item = {
      value: loc_selected?.alias,
      label: loc_selected?.city,
    };
    setSelectedCities(loc_selected_item);
    handleSelectChange(loc_selected_item);
    //        window.scrollTo({top: ref.offsetTop - 100, left: 0});
  };

  useEffect(() => {
    setSelectedReferenceData(
      vacanciesData &&
        vacanciesData?.response.filter((item) => {
          return (
            selectedCheckBox
              ?.map((e) => e.url)
              .flat()
              .indexOf(item.type) !== -1
          );
        }),
    );
    /*        console.log("selectedCheckBox", selectedCheckBox)*/
  }, [selectedCheckBox, vacanciesData]);
  const FormOutPut: ReactNode[] = selectedReferenceData?.map((e) => {
    return (
      <ObjectItem
        {...e}
        onClick={(e: IVacancies) => handleOnClickMap(selectRef.current, e)}
        key={"job" + e.connect + e.count}
        icon={<div className={Styles.job_count}>{e.count}</div>}
      />
    );
  });

  const handleSideBarClick = (e: ITab) => {
    setSelectedCheckBox(
      selectedCheckBox.filter((item) => item.id === e.id).length > 0
        ? selectedCheckBox.filter((item) => item.id !== e.id)
        : [...selectedCheckBox, e],
    );
  };

  const handleOnClickTabs = (e: ITab) => {
    router.push(aboutPath + e.url).then();
  };

  useEffect(() => {
    getGeoCode({ lat: 54.91722, lon: 37.420347, count: 1 }).then((data) => {
      console.log("data", data);
    });
  }, []);
  const handleSelectChange = (selected: IOptionItem) => {
    /**
     * Получаем данные относительно выбранного города
     * **/
    if (selected?.value) {
      getJobCity(selected.value).then((data) => {
        setSelectedCities(selected);
        setJobs(data);
      });
    }
  };

  ///TODO: Геолокацию доделать когда в вакансиях будут города

  return (
    <Container className={"wrapper_clear"}>
      <BreadCrumbs data={breadCrumbs} />
      <div className={Styles.job_container}>
        <Tabs
          props={tabsAboutData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          activeTab={3}
          size={"small300"}
        />
      </div>
      <Map
        formOutPut={FormOutPut}
        sideBar={
          <SideBar
            onChange={(e: ITab) => handleSideBarClick(e)}
            tabsSocialData={sideBarData}
          />
        }
      />

      <div className={Styles.vacancies__search_box} ref={selectRef}>
        {selectedCities?.value && (
          <SelectContainer
            optionsData={cities?.map((e) => {
              return { value: e.alias, label: e.city };
            })}
            defaultValue={selectedCities}
            instanceId={"Select_Job"}
            onChange={(e) => handleSelectChange(e)}
            value={selectedCities}
          />
        )}
        <Button
          type={"button"}
          children={"Поиск"}
          onClick={() => handleSelectChange(selectedCities)}
        />
      </div>
      <Separator title={"Наши вакансии"} />
      <ul className={Styles.job_container_item}>
        {!jobs?.hasError ? (
          jobs?.response.length > 0 ? (
            jobs?.response.map((e, i) => {
              return <JobItem {...e} key={i} />;
            })
          ) : (
            <MessageItem type={"attention"} className={Styles.no_vacancies}>
              Вакансии в Вашем регионе отсутствуют
            </MessageItem>
          )
        ) : jobs.customErrorCode === 4404 ? (
          <MessageItem type={"attention"} className={Styles.no_vacancies}>
            Вакансии в Вашем регионе отсутствуют
          </MessageItem>
        ) : (
          <ConnectError type={"text"} />
        )}
      </ul>
      <div className={Styles.vacancies__bottom_info}>
        <Separator
          title={"НЕ НАШЛИ ПОДХОДЯЩУЮ ВАКАНСИЮ?"}
          classNameProps={Styles.bottom__separator}
        />
        <p>
          Присылайте нам свое резюме, и мы свяжемся с Вами, как только появится
          подходящая позиция для Вас!
        </p>
        <Button onClick={toggle} size={"max"} children={"Отправить запрос"} />
      </div>
      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={<ModalFormJob />}
        theme={"modal"}
        bgModal={"black"}
      />
    </Container>
  );
};
export { JobContainer };
