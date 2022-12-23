import { IObject } from "components/map/Map";
import { ISliderProps } from "components/slider/Slider.d";

const jobObject: IObject[] = [
  {
    id: 1,
    count: 65,
    type_object: "factory",
    connection: "moskovskaya_obl",
    object: {
      name: "miass",
      xpx: 0,
      ypx: 0,
      items: [
        {
          id: 1,
          block_description: false,
          typeSlider: "img",
          link_slider: true,
          images: {
            pc: "/images/inside.jpg",
            ipad: "/images/inside.jpg",
            mobile: "/images/inside.jpg",
          },
        },
        {
          id: 2,
          block_description: false,
          typeSlider: "img",
          link_slider: true,
          images: {
            pc: "/images/bridge.jpg",
            ipad: "/images/bridge.jpg",
            mobile: "/images/bridge.jpg",
          },
        },
      ],
    },
  },
  {
    id: 2,
    count: 23,
    connection: "belgorodskaya_obl",
    type_object: "office_sales",
    object: {
      xpx: 0,
      ypx: 0,
      name: "Название объекта",
      address: "Адрес объекта",
      items: [
        {
          id: 1,
          block_description: false,
          typeSlider: "img",
          link_slider: true,
          images: {
            pc: "/images/inside.jpg",
            ipad: "/images/inside.jpg",
            mobile: "/images/inside.jpg",
          },
        },
        {
          id: 2,
          block_description: false,
          typeSlider: "img",
          link_slider: true,
          images: {
            pc: "/images/inside.jpg",

            ipad: "/images/inside.jpg",
            mobile: "/images/inside.jpg",
          },
        },
      ],
    },
  },
  {
    id: 3,
    count: 88,
    type_object: "factory",
    connection: "Chelyabinskaya_obl",
    object: {
      name: "Название объекта",
      address: "Адрес объекта",
      xpx: 0,
      ypx: 0,
      items: [
        {
          id: 1,
          block_description: false,
          typeSlider: "img",
          link_slider: true,
          images: {
            pc: "/images/inside.jpg",
            ipad: "/images/inside.jpg",
            mobile: "/images/inside.jpg",
          },
        },
        {
          id: 2,
          block_description: false,
          typeSlider: "img",
          link_slider: true,
          images: {
            pc: "/images/inside.jpg",
            ipad: "/images/inside.jpg",
            mobile: "/images/inside.jpg",
          },
        },
      ],
    },
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
