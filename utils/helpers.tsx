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
const getData = (
  obj: ICatalogEquipmentData[],
  url: string,
  resData: ICatalogEquipmentData[] = []
) => {
  for (let k in obj) {
    if (obj[k].alias === url) {
      resData.push(obj[k]);
    }
    if (obj[k].childrenData && obj[k].childrenData.length > 0) {
      getData(obj[k].childrenData, url, resData);
    }
  }

  return resData;
};
export { eachRecursive, getData };
