interface IPeople {
  title: string;
  job: string;
  id: number;
  bigBoss?: boolean;
}

interface IStaticAboutData {
  title: string;
  data_circle: number;
  id: number;
}

const PeopleData: IPeople[] = [
  {
    title: "Андреев Е.П",
    id: 1,
    job: "Руководитель отдела продаж",
  },
  {
    id: 2,
    title: "Андреев Е.П",
    job: "Руководитель отдела продаж",
  },
  {
    id: 3,
    title: "Андреев Е.П",
    job: "Руководитель отдела продаж",
  },
  {
    id: 4,
    title: "Андреев Е.П",
    job: "Руководитель отдела продаж",
  },
  {
    id: 5,
    title: "Андреев Е.П",
    job: "Руководитель отдела продаж",
  },
  {
    id: 6,
    title: "Андреев Е.П",
    job: "Руководитель отдела продаж",
  },
  {
    id: 7,
    title: "Андреев Е.П",
    job: "Руководитель отдела продаж",
  },
  {
    id: 8,
    title: "Андреев Е.П",
    job: "Руководитель отдела продаж",
  },
  {
    id: 9,
    title: "Андреев Е.П",
    job: "Руководитель отдела продаж",
  },
  {
    id: 10,
    title: "Андреев Е.П",
    job: "Руководитель отдела продаж",
  },
  {
    id: 11,
    title: "Андреев Е.П",
    job: "Руководитель отдела продаж",
  },
  {
    id: 12,
    title: "Андреев Е.П",
    job: "Руководитель отдела продаж",
  },
  {
    id: 13,
    title: "Андреев Е.П",
    job: "Руководитель отдела продаж",
    bigBoss: true,
  },
  {
    id: 16,
    title: "Андреев Е.П",
    job: "Руководитель отдела продаж",
  },
];

const staticAboutData: IStaticAboutData[] = [
  {
    title: "IT СПЕЦИАЛИСТОВ",
    data_circle: 185,
    id: 1,
  },
  {
    title: "ИНЖИНЕРОВ",
    data_circle: 157,
    id: 2,
  },
  {
    title: "МЕНЕДЖЕРОВ",
    data_circle: 122,
    id: 3,
  },
  {
    title: "СОТРУДНИКОВ",
    data_circle: 185,
    id: 4,
  },
];
export { PeopleData, staticAboutData };
