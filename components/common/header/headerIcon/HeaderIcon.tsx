import Styles from "./HeaderIcon.module.scss";
import { SearchIcon, UserIcon, TelefoneIcon } from "components/icons";
import { IconItem } from "../../../icons/IconItem";
import { Modal, useModal } from "../../../../components/modal";
import { SearchModal } from "../search/SearchModal";
import { useRouter } from "next/router";

const HeaderIcon = () => {
  const router = useRouter();
  const { isShow, toggle } = useModal();
  const handleOnClickMore = (inputValue: string) => {
    router.push("/search/" + inputValue).then(() => toggle());
  };
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
        modalContent={
          <SearchModal
            onClick={(inputValue) => handleOnClickMore(inputValue)}
          />
        }
        theme={"full_modal"}
        headerText={""}
        bgModal={"white"}
      />
    </>
  );
};

export { HeaderIcon };
