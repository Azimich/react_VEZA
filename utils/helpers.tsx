interface IgetNested {
  [key: string]: any;
}

function getNested(obj: IgetNested = {}) {
  for (let key in obj) {
    console.log("ley", obj[key]);
  }
}

export { getNested };
