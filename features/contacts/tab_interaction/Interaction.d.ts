interface Interaction {
  id: number;
  title: string;
  service_tel: string;
  logistic_tel: string;
  address: string;
  email: string;
  type: "sales" | "factory";
}
export { Interaction };
