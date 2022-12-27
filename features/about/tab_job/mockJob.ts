import { IObject } from "components/map/Map";
import { ISliderProps } from "components/slider/Slider.d";

const jobObject: IObject[] = [
  {
    count: 65,
    type_object: "factory",
    connection: "moskovskaya_obl",
  },
  {
    id: 2,
    count: 23,
    connection: "belgorodskaya_obl",
    type_object: "office_sales",
  },
  {
    id: 3,
    count: 88,
    type_object: "factory",
    connection: "Chelyabinskaya_obl",
  },
];

const jobGalleryData: ISliderProps = {
  items: [
    {
      typeSlider: "img",
      link_slider: false,
      images: {
        pc: "/images/ofice.jpg",
        ipad: "/images/ofice.jpg",
        mobile: "/images/ofice.jpg",
      },
    },
    {
      typeSlider: "img",
      link_slider: false,
      images: {
        pc: "/images/inside.jpg",
        ipad: "/images/inside.jpg",
        mobile: "/images/inside.jpg",
      },
    },
    {
      typeSlider: "img",
      link_slider: false,
      images: {
        pc: "/images/workplace.jpg",
        ipad: "/images/workplace.jpg",
        mobile: "/images/workplace.jpg",
      },
    },
    {
      typeSlider: "img",
      link_slider: false,
      images: {
        pc: "/images/bridge.jpg",
        ipad: "/images/bridge.jpg",
        mobile: "/images/bridge.jpg",
      },
    },
  ],
};
export { jobObject, jobGalleryData };
