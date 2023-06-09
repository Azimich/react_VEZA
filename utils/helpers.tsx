import { ICatalogEquipmentData } from "features/equipment";
import { ICategoriesItem } from "features/equipment/Equipment";
import { ICategory } from "features/equipment/equipmentPage/utp/ModalFormCategory";

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
  level?: number,
  parents: ICategoriesItem[] = [],
) {
  if (level !== 1) {
    const parent = getData(obj, parentAlias).shift();
    if (parent?.level != 1) {
      parents.push(parent);
      getParents(obj, parent?.parentAlias, parent?.level, parents);
    } else {
      parents.push(parent);
    }
  }
  return parents;
}

function getParentsItems(
  obj: ICategory[],
  parentAlias: string,
  level?: number,
  parents: ICategory[] = [],
) {
  if (level !== 1) {
    const parent = getDataItems(obj, parentAlias).shift();
    if (parent?.level != 1) {
      parents.push(parent);
      getParentsItems(obj, parent?.parentAlias, parent?.level, parents);
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

const getDataItems = (
  obj: ICategory[],
  url: string,
  resData: ICategory[] = [],
) => {
  for (const k in obj) {
    console.log("obj[k]", obj[k].alias, url);
    if (obj[k].alias === url) {
      resData.push(obj[k]);
    }
    if (obj[k].items && obj[k].items.length > 0) {
      getDataItems(obj[k].items, url, resData);
    }
  }
  return resData;
};

const checkEmptyObject = (obj: {}) => {
  return obj !== undefined ? Object.keys(obj).length === 0 : true;
};

const checkedAccessMenu = (role: number, onlyAdmin: boolean) => {
  return !((role === 0 || role === undefined) && onlyAdmin);
};

const onButtonClick = (url: string | URL, title: string, ext = ".pdf") => {
  return fetch(url).then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      const alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = title + ext;
      alink.click();
    });
  });
};

export {
  eachRecursive,
  getParentsItems,
  getData,
  getDataItems,
  getParents,
  checkEmptyObject,
  checkedAccessMenu,
  onButtonClick,
};
