import Styles from "features/typo_size/desc/Description.module.scss";

const DescriptionTableHeader = ({ title = "" }) => {
  const resArr = title.split(";");
  return (
    <tr>
      {resArr.map((e, i) => {
        const s = `typesizes__table_container_title_` + [i + 1];
        return (
          <th
            key={i}
            className={`${Styles.typesizes__table_container_title} ${Styles[s]}`}
          >
            {e}
          </th>
        );
      })}
    </tr>
  );
};
export { DescriptionTableHeader };
