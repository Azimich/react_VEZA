import Styles from "./Hamburger.module.scss";
const Bar = () => {
  return (
    <>
      <div>
        <span className={Styles.bar}></span>
      </div>
      <div>
        <span className={Styles.bar_small}></span>
      </div>
      <div>
        <span className={Styles.bar}></span>
      </div>
    </>
  );
};

export { Bar };
