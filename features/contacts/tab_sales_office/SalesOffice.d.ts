interface ISallesOffice {
  id: number;
  title: string;
  desc?: string;
  image: string;
  type_code?: "director" | "logistic" | "secretary";
  onClick?: (e) => void;
}

interface ISalles {
  code?: string;
  items?: ISallesOffice[];
}

export { ISallesOffice, ISalles };
