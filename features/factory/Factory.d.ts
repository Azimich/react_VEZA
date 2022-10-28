interface IFactory {
  firstTitle?: string;
  text?: string;
  img?: string;
  items?: IFactoryItems[];
}

interface IFactoryItems {
  subText?: string;
  secondTitle?: string;
}

export { IFactory, IFactoryItems };
