interface IFactoryData {
  code?: string;
  itemsData?: IFactory[];
}
interface IFactory {
  id: number;
  firstTitle: string;
  code?: string;
  descriptionTop?: string;
  items?: IFactoryItems[];
}

interface IFactoryItems {
  code?: string;
  secondTitle?: string;
  subText?: string;
  img?: string;
}
interface IFactoryState {
  factoryState: IFactoryData[];
  currentFactoryState?: IFactoryData;
}

export { IFactory, IFactoryItems, IFactoryData, IFactoryState };
