import { ISliderProps } from "components/slider/Slider.d";

const sliderFactoryData: ISliderProps = {
  items: [
    {
      id: 1,
      typeSlider: "text",
      title: "1995-2000",
      activePageDefault: true,
      code: "2000",
      link_slider: false,
    },
    {
      id: 2,
      typeSlider: "text",
      title: "2000-2005",
      code: "2005",
      link_slider: false,
    },
    {
      id: 3,
      typeSlider: "text",
      title: "2005-2008",
      code: "2008",
      link_slider: false,
    },
    {
      id: 4,
      typeSlider: "text",
      title: "2008-2015",
      code: "2015",
      link_slider: false,
    },
    {
      id: 5,
      typeSlider: "text",
      title: "2015-2022",
      code: "2022",
      link_slider: false,
    },
  ],
};

export { sliderFactoryData };
