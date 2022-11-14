import { SliderContainer } from "components/slider";
import { jobGalleryData } from "features/about/tab_job/mockJob";
import { FC } from "react";
import { ISliderProps } from "components/slider/Slider.d";

const ModalFormGallery: FC<ISliderProps> = () => {
  return (
    <SliderContainer
      items={jobGalleryData.items}
      dots={true}
      autoplay={false}
      theme={"industries"}
      themeButton={"industries"}
      size={"medium"}
      navigations={true}
      effectSlide={"cards"}
      color={"link"}
    />
  );
};

export { ModalFormGallery };
