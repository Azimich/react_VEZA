import { ICatalogEquipmentData } from "features/equipment";
import { ICategoriesItem } from "features/equipment/Equipment";

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

/*function getParents(
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
}*/

const getData = (
  obj: ICategoriesItem[],
  url: string,
  id?: number,
  resData: ICategoriesItem[] = [],
) => {
  for (const k in obj) {
    if (obj[k].alias === url) {
      resData.push(obj[k]);
    }
    if (obj[k].subCategories && obj[k].subCategories.length > 0) {
      getData(obj[k].subCategories, url, id, resData);
    }
  }

  return resData;
};
const checkEmptyObject = (obj: {}) => {
  return Object.keys(obj).length === 0;
};

const checkedAccessMenu = (role: number, onlyAdmin: boolean) => {
  return !((role === 0 || role === undefined) && onlyAdmin);
};

export {
  eachRecursive,
  getData,
  /*  getParents,*/
  checkEmptyObject,
  checkedAccessMenu,
};
