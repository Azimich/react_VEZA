import React from "react";
import { sallesOfficeData } from "./mockData";
import Styles from "../Contacts.module.scss";
import { ISalles } from "./SalesOffice";

const DirectorContainer = () => {
  const [directory, setDirectory] = React.useState(
    sallesOfficeData.filter((e: ISalles) => e.code === "director")
  );

  React.useEffect(() => {});

  const director = sallesOfficeData.filter(
    (e: ISalles) => e.code === "director"
  );
  console.log("2thnt45", director);

  const { image, title, type_code } =
    director.length > 0 && director?.[0]?.items?.[0];
  console.log("21345", title, image, type_code);

  return (
    <div className={Styles.director}>
      {sallesOfficeData.map((item) => {
        return <div>{item.items?.[0]?.title}</div>;
      })}
    </div>
  );
};

export { DirectorContainer };
