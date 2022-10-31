interface IFactory {
  id?: number;
  firstTitle?: string;
  descroptionTop?: string;
  items?: IFactoryItems;
}

interface IFactoryItems {
  secondTitle?: string;
  subText?: string;
  img?: string;
}

export { IFactory, IFactoryItems };
