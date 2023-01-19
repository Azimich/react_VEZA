import React, { FC, useEffect, useState } from "react";
import { Container } from "components/common/container";
import Styles from "./Header.module.scss";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { HeaderNav } from "./headerNav/HeaderNav";
import { HeaderIcon } from "./headerIcon/HeaderIcon";
import { useModal } from "components/modal";
import { useScrollStop } from "store/hooks/useScrollStop";
import { IAuthResponse } from "features/auth/Auth";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { useAuth } from "service/auth/auth";
import { useToken } from "store/hooks/useToken";
import { getAuth, setDataAuth } from "features/auth/AuthSlice";
import { SpinnerLoading } from "components/spinners";
import { dataMenu } from "components/common/header/headerIcon/mockData";

const HeaderContainer: FC = () => {
  const [scrollData, setScrollData] = useState<number>(0);
  const { isShow, toggle } = useModal();
  const { isShow: profileShow, toggle: setProfileToogle } = useModal();
  const dispatch = useAppDispatch();

  const auth = useAppSelector(getAuth);
  const { checkAuth } = useAuth();
  const { getToken, deleteAuthToken } = useToken();
  const [timer, setTimer] = useState(false);

  useScrollStop(isShow);

  const handleHamburgerOnClick = () => {
    toggle();
  };
  const handleProfileMenuClick = () => {
    setProfileToogle();
  };

  useEffect(() => {
    !auth.identify && setTimer(false);
    const timerLoad =
      auth.identify &&
      setTimeout(() => {
        setTimer(true);
      }, 500);

    return () => clearTimeout(timerLoad);
  }, [auth.identify]);

  useEffect(() => {
    getToken().tokens.token
      ? checkAuth(getToken().tokens.token).then(
          (data: IAuthResponse | undefined) => {
            if (data === undefined || data?.hasError) {
              deleteAuthToken();
            } else {
              dispatch(setDataAuth({ identify: true, data: data }));
            }
          },
        )
      : dispatch(setDataAuth({ identify: true }));
  }, [getToken().tokens.token]);

  const handleScroll = () => {
    window.scrollY > 0 ? setScrollData(1) : setScrollData(0);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container className="wrapper_clear">
      <div className={Styles.header__profile}>
        <nav
          className={
            scrollData > 0 ? Styles.header__nav_active : Styles.header__nav
          }
        >
          <HeaderLogo />
          {auth.identify ? (
            <HeaderNav isShowMenu={isShow} scroll={scrollData} />
          ) : (
            timer && <SpinnerLoading />
          )}

          <HeaderIcon
            isShowMenu={isShow}
            onClickProfile={() => handleProfileMenuClick()}
            onClick={() => handleHamburgerOnClick()}
          />
        </nav>
        <div
          className={`${Styles.header__profile_menu} ${
            profileShow ? Styles.active : ""
          }`}
        >
          <ul className={""}>
            {dataMenu.map((e, index) => {
              return (
                <li key={index}>
                  <span></span>
                  {e.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {profileShow && (
        <div
          className={Styles.header__profile_over}
          onClick={() => handleProfileMenuClick()}
        ></div>
      )}
    </Container>
  );
};

export { HeaderContainer };
