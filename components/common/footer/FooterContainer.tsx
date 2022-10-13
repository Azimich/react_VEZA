import Styles from "./Footer.module.scss";
import { Container } from "../container";
import Link from "next/link";
import React, { useState } from "react";
import { TelegaIcon, VkIcon, YouTubeIcon, PhoneFooterIcon } from "../../icons";
import { IconItem } from "../../icons/IconItem";
import { IMenuData } from "../header/headerNav/Header.d";
import { menuData } from "../header/mockdata";

const FooterContainer = () => {
  const [menu] = useState<IMenuData[]>(menuData);

  return (
    <>
      <div className={Styles.footer}></div>
      <div className={Styles.footer__container}>
        <Container className="wrapper">
          <div className={Styles.footer__content}>
            <a href="/pages" className={Styles.footer__logo}>
              <img src="/images/logo.svg" alt="logo" />
            </a>
            <ul className={Styles.footer__navigation}>
              {menu.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item.url}>
                      <a className={Styles.footer__menu_link}>{item.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className={Styles.footer__social}>
              <IconItem
                url={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                className={"footer__social_item"}
              >
                <TelegaIcon />
              </IconItem>

              <IconItem
                url={"https://vk.com/veza_official"}
                className={"footer__social_item"}
              >
                <VkIcon />
              </IconItem>
              <IconItem
                url={"https://www.youtube.com/channel/UCsNlnQ7uhAc_cOgHJPYMnRQ"}
                className={"footer__social_item"}
              >
                <YouTubeIcon />
              </IconItem>
              <IconItem
                url={process.env.NEXT_PUBLIC_PHONE}
                className={"footer__social_item"}
              >
                <PhoneFooterIcon />
              </IconItem>
            </div>
          </div>
          <ul className={Styles.footer__contacts}>
            <li className={Styles.footer__contacts_list}>
              <Link href={process.env.NEXT_PUBLIC_PHONE}>
                <a className={Styles.footer__contacts_phone}>
                  <PhoneFooterIcon />
                  {process.env.NEXT_PUBLIC_PHONE}
                </a>
              </Link>
            </li>
            <li className={Styles.footer__contacts_list}>
              <a
                href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL}
                className={Styles.footer__contacts_phone}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 7.373V14.5C18 15.163 17.7366 15.7989 17.2678 16.2678C16.7989 16.7366 16.163 17 15.5 17H4.5C3.83696 17 3.20107 16.7366 2.73223 16.2678C2.26339 15.7989 2 15.163 2 14.5V7.373L9.746 11.931C9.82295 11.9764 9.91066 12.0003 10 12.0003C10.0893 12.0003 10.177 11.9764 10.254 11.931L18 7.373ZM15.5 4C16.1151 3.9999 16.7087 4.22661 17.1672 4.63674C17.6257 5.04687 17.9168 5.61164 17.985 6.223L10 10.92L2.015 6.223C2.08316 5.61164 2.37432 5.04687 2.83279 4.63674C3.29127 4.22661 3.88485 3.9999 4.5 4H15.5Z"
                    fill="black"
                  ></path>
                </svg>
                {process.env.NEXT_PUBLIC_EMAIL}
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
};
export { FooterContainer };
