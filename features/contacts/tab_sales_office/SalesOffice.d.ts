interface ISallesOffice {
  id: number;
  title: string;
  image: string;
  type_code?: "director" | "logistician" | "secretary";
  onClick?: (e) => void;
}

interface ISalles {
  code?: string;
  items?: ISallesOffice[];
}

export { ISallesOffice, ISalles };
