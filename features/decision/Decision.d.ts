interface IDecisionData {
  id: number;
  title: string;
  description_title?: string;
  description_full?: string;
  image: string;
  url: string;
}

interface IDeliveryProducts {
  name: string;
}

interface IOwnObjects {
  image: string;
  titleObject: string;
  titleDeliveryObject?: string;
  address: string;
  slide_position: number;
  deliveryProducts?: IDeliveryProducts[];
}

export { IDecisionData, IOwnObjects };
