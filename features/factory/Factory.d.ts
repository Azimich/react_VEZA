interface IFactory {
  id?: number;
  firstTitle?: string;
  descroptionTop?: string;
  items?: IFactoryItems;
}

interface IFactoryItems {
  code?: string; //опредлеяем что за год выбран
  secondTitle?: string;
  subText?: string;
  img?: string;
}

export { IFactory, IFactoryItems };
