import { IBim, ICatalog } from "./tab_bim/Bim";

const bimData: IBim[] = [
  {
    id: 1,
    title: "Противопожарные клапаны",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae",
    img: "/images/BIM-1.png",
  },
  {
    id: 2,
    title: "AEROSTART",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae",
    img: "/images/BIM-2.svg",
  },
  {
    id: 3,
    title: "Воздушные каналы",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae",
    img: "/images/BIM-3.png",
  },
  {
    id: 4,
    title: "ЭКСПОРТ",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae",
    img: "/images/BIM-4.png",
  },
  {
    id: 5,
    title: "Вероса",
    desc: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae",
    img: "/images/BIM-5.png",
  },
];
const catalogData: ICatalog[] = [
  {
    id: 1,
    title: "Центральные кондиционеры ВЕРОСА",
    image: "/images/vran-1.jpg",
    download_url: "/download/res.pdf",
    alias: "vran1",
  },
  {
    id: 2,
    title: "Шкаф систем автоматического управления ШСАУ ВЕРСА 100",
    image: "/images/vran-1.jpg",
    download_url: "/download/res.pdf",
    alias: "vran2",
  },
  {
    id: 3,
    title: "Кондиционеры компактные панельные Airmate®",
    image: "/images/vran-1.jpg",
    download_url: "/download/res.pdf",
    alias: "vran3",
  },
  {
    id: 4,
    title: "Прецизионные кондиционеры АКП",
    image: "/images/vran-1.jpg",
    download_url: "/download/res.pdf",
    alias: "vran4",
  },
  {
    id: 5,
    title: "Приточно-вытяжные установки для бассейнов АКВАРИС®",
    image: "/images/vran-1.jpg",
    download_url: "/download/res.pdf",
    alias: "vran5",
  },
];

export { bimData, catalogData };
