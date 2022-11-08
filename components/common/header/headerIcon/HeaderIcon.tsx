import Styles from "./HeaderIcon.module.scss";
import { SearchIcon, UserIcon, TelefoneIcon } from "components/icons";
import { IconItem } from "../../../icons/IconItem";
import { Modal, useModal } from "../../../../components/modal";
import { SearchModal } from "../search/SearchModal";

const HeaderIcon = () => {
  const { isShow, toggle } = useModal();
  console.log(isShow);

  return (
    <>
      <div className={Styles.header__icon__box}>
        {/* Поиск */}
        <IconItem url={""} className={"header__icon"}>
          <span onClick={toggle}>
            <SearchIcon />
          </span>
        </IconItem>
        {/* Авторизация */}
        <IconItem url={"/auth"} className={"header__icon"}>
          <UserIcon />
        </IconItem>
        {/* Телефон */}
        <IconItem
          url={"tel:" + process.env.NEXT_PUBLIC_PHONE}
          className={"header__icon"}
        >
          <TelefoneIcon />
        </IconItem>
      </div>

      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={<SearchModal />}
        theme={"full_modal"}
        headerText={"Поиск по сайту"}
        bgModal={"white"}
      />
    </>
  );
};

export { HeaderIcon };
