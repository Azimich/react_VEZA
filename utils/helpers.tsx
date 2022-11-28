import { ICatalogEquipmentData } from "features/equipment";

const eachRecursive = (obj: ICatalogEquipmentData[]) => {
  const resData = [];
  for (const k in obj) {
    resData.push({ params: { slug: obj[k].alias } });
    if (obj[k].childrenData && obj[k].childrenData.length > 0) {
      eachRecursive(obj[k].childrenData);
    }
  }

  return resData;
};

function getParents(
  obj: ICatalogEquipmentData[],
  id: number,
  parents: ICatalogEquipmentData[] = [],
) {
  if (id !== 0) {
    const parent = getData(obj, "", id).shift();
    if (parent?.parent_id != 0) {
      parents.push(parent);
      getParents(obj, parent.parent_id, parents);
    } else {
      parents.push(parent);
    }
  }
  return parents;
}

const getData = (
  obj: ICatalogEquipmentData[],
  url: string,
  id?: number,
  resData: ICatalogEquipmentData[] = [],
) => {
  for (const k in obj) {
    if (obj[k].alias === url || obj[k].id === id) {
      resData.push(obj[k]);
    }
    if (obj[k].childrenData && obj[k].childrenData.length > 0) {
      getData(obj[k].childrenData, url, id, resData);
    }
  }

  return resData;
};
export { eachRecursive, getData, getParents };
