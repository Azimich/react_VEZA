interface IFactoryData {
  code?: string;
  itemsData?: IFactory[];
}
interface IFactory {
  id?: number;
  firstTitle?: string;
  code?: string;
  descroptionTop?: string;
  items?: IFactoryItems[];
}

interface IFactoryItems {
  code?: string;
  secondTitle?: string;
  subText?: string;
  img?: string;
}

export { IFactory, IFactoryItems, IFactoryData };
