import { ICatalogEquipmentData } from "../features/equipment";

const eachRecursive = (obj: ICatalogEquipmentData[]) => {
  const resData = [];
  for (let k in obj) {
    resData.push({ params: { slug: obj[k].alias } });
    if (obj[k].childrenData && obj[k].childrenData.length > 0) {
      eachRecursive(obj[k].childrenData);
    }
  }

  return resData;
};
export { eachRecursive };
