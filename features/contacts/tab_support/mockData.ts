import { IOptionItem } from "components/select/Select";
import { ISupport } from "./Support";

const supportData: ISupport[] = [
  {
    id: 1,
    title: "ПУНКТЫ ТЕПЛОВЫЕ",
    subtitle: "Моска, Россия",
    description:
      "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.    ",
  },
  {
    id: 2,
    title: "ВЕНТИЛЯТОРЫ",
    subtitle: "Моска, Россия",
    description:
      "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.    ",
  },
  {
    id: 3,
    title: "УЗЛЫ РЕГУЛИРУЮЩИЕ",
    subtitle: "Моска, Россия",
    description:
      "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.    ",
  },
  {
    id: 4,
    title: "ПУНКТЫ ТЕПЛОВЫЕ",
    subtitle: "Моска, Россия",
    description:
      "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.    ",
  },
];

const dataSupportSubjectSelect: IOptionItem[] = [
  { value: "FAQ", label: "Vivamus elementum semper nisi" },
  { value: "ver", label: "Vivamus elementum semper nisiг" },
  { value: "evev", label: "Vivamus elementum semper nisi" },
  { value: "vev", label: "Vivamus elementum semper nisi" },
  { value: "vefv", label: "Vivamus elementum semper nisi" },
  { value: "evef", label: "Vivamus elementum semper nisi" },
];

export { supportData, dataSupportSubjectSelect };
