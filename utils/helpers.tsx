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

function getParents(
  obj: ICategoriesItem[],
  parentAlias: string,
  level: number,
  parents: ICategoriesItem[] = [],
) {
  if (level !== 1) {
    const parent = getData(obj, parentAlias).shift();
    if (parent?.level != 1) {
      parents.push(parent);
      getParents(obj, parent.parentAlias, parent.level, parents);
    } else {
      parents.push(parent);
    }
  }
  return parents;
}

const getData = (
  obj: ICategoriesItem[],
  url: string,
  parentAlias?: string,
  resData: ICategoriesItem[] = [],
) => {
  for (const k in obj) {
    if (obj[k].alias === url) {
      resData.push(obj[k]);
    }
    if (obj[k].subCategories && obj[k].subCategories.length > 0) {
      getData(obj[k].subCategories, url, parentAlias, resData);
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

const onButtonClick = (url: string | URL, title: string) => {
  return fetch(url).then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      const alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = title + ".pdf";
      alink.click();
    });
  });
};

export {
  eachRecursive,
  getData,
  getParents,
  checkEmptyObject,
  checkedAccessMenu,
  onButtonClick,
};
