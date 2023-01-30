import { Container } from "components/common/container";
import { FormikValues, useFormik } from "formik";
import { ValidationAuth } from "features/auth/formsData/ValidationsShemas";
import Styles from "features/auth/SignContainer.module.scss";
import { fieldsDataProfile } from "features/auth/formsData/FieledsData";
import { Input } from "components/input";

const ProfileContainer = () => {
  const formik: FormikValues = useFormik({
    initialValues: {
      login: "",
      password: "",
      forgot: false,
      private_police: false,
    },
    validationSchema: ValidationAuth(),

    onSubmit: (values) => {
      console.log("12323", values);
    },
  });

  return (
    <Container className={"wrapper"}>
      <form
        onSubmit={formik.handleSubmit}
        className={Styles.authorization__form__item}
      >
        <div className={Styles.authorization__form__item__title}>
          <h1>Основная информация</h1>
        </div>
        <div className={Styles.box_field}>
          {fieldsDataProfile.length > 0 &&
            fieldsDataProfile.map((item) => {
              return (
                <div
                  key={item.name}
                  className={`${
                    formik.errors[item.name] && formik.touched[item.name]
                      ? Styles.authorization__form__item__input_error
                      : Styles.authorization__form__item__input
                  }`}
                >
                  <Input
                    name={item.name}
                    id={item.name + "_id"}
                    title={item.title}
                    type={item.type}
                    className={Styles.input__item}
                    onChange={(e) => console.log("1213", e)}
                    onBlur={formik.handleBlur}
                    value={formik.values[item.name]}
                  />
                  <div
                    className={`${
                      formik.errors[item.name] && formik.touched[item.name]
                        ? Styles.overflow__auto
                        : Styles.overflow
                    }`}
                  >
                    <span>{formik.errors[item.name]}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </form>
    </Container>
  );
};

export { ProfileContainer };
