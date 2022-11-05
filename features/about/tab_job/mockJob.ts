import { IMockJob } from "./Job";
import { IObject } from "../../../components/map/Map";

const MockJob: IMockJob[] = [
  {
    id: 1,
    url_hh: "/hh.ru",
    address: "Саратов, Россия",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
    title: "Веб-разработчик",
  },
  {
    id: 2,
    url_hh: "/hh.ru",
    address: "Саратов, Россия",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
    title: "Веб-разработчик",
  },
  {
    id: 3,
    url_hh: "/hh.ru",
    address: "Москва, Россия",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
    title: "Менеджер",
  },
  {
    id: 4,
    url_hh: "/hh.ru",
    address: "Саратов, Россия",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
    title: "Веб-разработчик",
  },
  {
    id: 5,
    url_hh: "/hh.ru",
    address: "Саратов, Россия",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
    title: "Веб-разработчик",
  },
];
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
          images: {
            pc: "/images/inside.jpg",
            ipad: "/images/inside.jpg",
            mobile: "/images/inside.jpg",
          },
        },
        {
          id: 1,
          block_description: false,
          typeSlider: "img",
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
          images: {
            pc: "/images/inside.jpg",
            ipad: "/images/inside.jpg",
            mobile: "/images/inside.jpg",
          },
        },
        {
          id: 1,
          block_description: false,
          typeSlider: "img",
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
          images: {
            pc: "/images/inside.jpg",
            ipad: "/images/inside.jpg",
            mobile: "/images/inside.jpg",
          },
        },
        {
          id: 1,
          block_description: false,
          typeSlider: "img",
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
export { MockJob, jobObject };
