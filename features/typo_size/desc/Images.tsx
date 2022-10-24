import Styles from "./Description.module.scss";

const Description_Images = () => {
  return (
    <div className={Styles.Description_container}>
      <div className={Styles.Description_container_models}>
        <div className={Styles.Description_container_models_img}>
          <div className={Styles.card}>
            <div className={Styles.photo}>
              <img src="/images/fan.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Description_Images };
