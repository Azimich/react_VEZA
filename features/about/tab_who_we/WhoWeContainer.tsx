import { ITab } from "components/tabs/Tabs";
import { Container } from "../../../components/common/container";
import { Tabs } from "../../../components/tabs";
import { tabsAboutData } from "../../../components/tabs/mockdata";
import { useRouter } from "next/router";
import { aboutPath } from "../../../utils/bootstrap";
import Styles from "./Whowe.module.scss";
import { Achievements, WhoWeAbout } from "../index";
import { HistoryIcon } from "../../../components/icons";
import { Separator } from "../../../components/separator";

const WhoWeContainer = () => {
  const router = useRouter();

  const handleOnClickTabs = (e: ITab) => {
    router.push(aboutPath + e.url);
  };
  return (
    <Container className={"wrapper"}>
      <div className={Styles.whowe_container}>
        <Tabs
          props={tabsAboutData}
          onClick={(e) => {
            handleOnClickTabs(e);
          }}
          activeTab={1}
          size={"max"}
        />
      </div>
      <WhoWeAbout />
      <div className={Styles.whowe_container_history_svg}>
        <HistoryIcon />
      </div>
      <div className={Styles.whowe_container_video}>
        <iframe
          src="https://www.youtube-nocookie.com/embed/Fc1rEkIzOS4?autoplay=0&mute=1"
          frameBorder={0}
          allow={"allowfullscreen"}
        ></iframe>
      </div>
      <Separator title={"наши достижения"} />
      <Achievements />
    </Container>
  );
};

export { WhoWeContainer };
