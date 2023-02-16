import Styles from "features/typo_size/desc/Description.module.scss";

const DescriptionTableItem = ({ data = "" }) => {
  const s = data.split(";");
  return (
    <tr>
      {s.map((e, i) => {
        return (
          <td
            className={
              i % 2
                ? Styles.item_row
                : `${Styles.item_row} ${Styles.second_item}`
            }
          >
            {e}
          </td>
        );
      })}
    </tr>
  );
};
export { DescriptionTableItem };
