import Styles from "./Slider.module.scss";
import { ISlideItem } from "./Slider.d";
import React, { FC, useEffect, useState } from "react";
import { isMobile, isTablet, isDesktop } from "react-device-detect";
import { Button } from "../button";
import { ArrowRightIcon } from "../icons";
import { Link } from "components/link";
import { decisionPath, equipmentPath } from "utils/bootstrap";
import { Modal, useModal } from "components/modal";
import { Editor } from "components/editor_pen";
import { ModalBannerAdded } from "features/home/bannerModal/ModalBannerAdded";
import { ModalBannerEdit } from "features/home/bannerModal/ModalBannerEdit";

const SlideItem: FC<ISlideItem> = ({
  images,
  typeSlider = "img",
  theme = "home",
  themeButton = "banner",
  alt = "",
  activePage,
  color = "white",
  block_description = false,
  title = "",
  description = "",
  pathDecision = false,
  code,
  url = "",
  size = "medium",
  OnClick,
  isEdit = true,
}) => {
  const [hasWindow, setHasWindow] = useState(false);
  const isWindow = typeof window !== "undefined";
  const { isShow, toggle } = useModal();
  const { isShow: isShowAdd, toggle: toggleAdd } = useModal();

  console.log("images", images);

  const Img = () => {
    return (
      <>
        <div
          className={`${Styles[`${theme}_banner__slider_slide`]}`}
          key={Math.random() * 10}
        >
          <div className={Styles[`${theme}_banner__slider_img`]}>
            {hasWindow && isDesktop && (
              <img
                src={typeof images === "object" ? images.pc : images}
                alt={alt}
              />
            )}
            {hasWindow && isTablet && (
              <img
                src={typeof images === "object" ? images.ipad : images}
                alt={alt}
              />
            )}
            {hasWindow && isMobile && (
              <img
                src={typeof images === "object" ? images.mobile : images}
                alt={alt}
              />
            )}
          </div>
          {block_description && (
            <div className={Styles[`${theme}_banner__right_element`]}>
              <h1 className={Styles[`${theme}_banner__right_element_title`]}>
                {title}
              </h1>
              <p className={Styles[`${theme}_banner__right_element_text`]}>
                {description && description}
              </p>
              <div className={Styles[`${theme}_banner__right_element_allign`]}>
                <Button
                  theme={themeButton}
                  size={size}
                  link={url}
                  color={color}
                >
                  <span>
                    <p>Подробнее</p>
                    {color === "link" && <ArrowRightIcon />}
                  </span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </>
    );
  };
  const Video = () => {
    return (
      <div
        className={`${Styles[`${theme}_banner__slider_slide`]} ${
          Styles[`${theme}_banner__slide_video`]
        }`}
      >
        <video
          src={typeof images === "string" ? images : ""}
          className={Styles[`${theme}_banner__slide_video_video`]}
          autoPlay
          muted
          loop
        ></video>
        <div className={Styles[`${theme}_banner__slide_video_info_box`]}>
          <div className={Styles[`${theme}_banner__slide_video_info`]}>
            <h1 className={Styles[`${theme}_banner__slide_video_title_video`]}>
              Veza
            </h1>
            <p className={Styles[`${theme}_banner__slide_video_text_video`]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const Text = () => {
    return (
      <div
        className={Styles[`${theme}__history`]}
        onClick={() => OnClick(code)}
      >
        <div className={Styles[`${theme}__history__items`]}>
          <div
            className={`${Styles[`${theme}__history__slide`]} ${
              code === activePage ? Styles.activePage : "ку"
            }`}
          >
            {title}
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    isWindow && setHasWindow(true);
  }, [isWindow]);

  switch (typeSlider) {
    case "img":
      return url ? (
        <div>
          <Link url={(pathDecision ? decisionPath : equipmentPath) + url}>
            <Img />
          </Link>
          {isEdit && (
            <>
              <div className={Styles.banner_editor} onClick={toggle}>
                <Editor />
              </div>
              <Modal
                isShow={isShow}
                hide={toggle}
                modalContent={<ModalBannerEdit />}
                theme={"full_modal"}
                bgModal={"white"}
              />
            </>
          )}
          {/*Иконка для добавления баннера*/}
          {isEdit && (
            <>
              <div className={Styles.banner_added} onClick={toggleAdd}>
                <Button children={"Добавить баннер"} />
              </div>
              <Modal
                isShow={isShowAdd}
                hide={toggleAdd}
                modalContent={<ModalBannerAdded />}
                theme={"full_modal"}
                bgModal={"white"}
              />
            </>
          )}
        </div>
      ) : (
        <Img />
      );
    case "video":
      return <Video />;
    case "text":
      return <Text />;
    default:
      return <Img />;
  }
};

export { SlideItem };
