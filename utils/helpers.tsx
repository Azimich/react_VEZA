interface IgetNested {
  [key: string]: any;

  id?: number;
  parent_id?: 0;
}

function getLevel(obj: IgetNested = {}, id = 0) {
  for (let key in obj) {
    console.log("---", key);
    if (obj.filter(() => id === obj[key].parent_id).length > 0) {
      // console.log("+++", obj.filter(() => id === obj[key].parent_id));
    }
  }
}

export { getLevel };
