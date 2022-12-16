import { FormikValues, useFormik } from "formik";
import Styles from "features/auth/SignContainer.module.scss";
import { Input } from "components/input";
import { CheckboxWithLabel } from "components/checkbox";
import { Button } from "components/button";
import Link from "next/link";
import { ValidationAuth } from "./formsData/ValidationsShemas";
import { fieldsDataAuth } from "./formsData/FieledsData";
import { ChangeEvent, useState, useEffect } from "react";
import { useAuth } from "service/auth/auth";
import { ISingResponseData } from "./Sing";
import { Message } from "components/massage";
import { ErrorIcon } from "components/icons";
import { useRouter } from "next/router";
import { SpinnerButton } from "components/spinners";
import { useToken } from "store/hooks/useToken";

const SingInForm = () => {
  const { getLogin, loading, error } = useAuth();
  const [authData, setAuthData] = useState<ISingResponseData>({});
  const router = useRouter();
  const { setAuthToken } = useToken();
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    !loading && setTimer(false);
    const timerLoad =
      loading &&
      setTimeout(() => {
        setTimer(true);
      }, 500);

    return () => clearTimeout(timerLoad);
  }, [loading]);

  const formik: FormikValues = useFormik({
    initialValues: {
      login: "",
      password: "",
      forgot: false,
      private_police: false,
    },
    validationSchema: ValidationAuth(),
    onSubmit: (values) => {
      getLogin(values.login, values.password).then(
        (data: ISingResponseData | undefined) => {
          if (data === undefined || data?.hasError) {
            setAuthData(data);
          } else {
            setAuthToken(
              data?.response.accessToken,
              data?.response.refreshToken,
            );
            router.push("/");
          }
        },
      );
    },
  });

  const handleFilterOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    filter: RegExp,
    field = "",
    size = 0,
  ) => {
    const target = e.target.value.replace(filter, "");
    formik.setFieldValue(
      field,
      size > 0
        ? target.length > size
          ? target.substring(0, size)
          : target
        : target,
    );
  };

  return (
    <div className={Styles.authorization__form}>
      <form
        onSubmit={formik.handleSubmit}
        className={Styles.authorization__form__item}
      >
        <div className={Styles.authorization__form__item__title}>
          <h1>Войти в личный кабинет</h1>
        </div>
        <div className={Styles.box_field}>
          {fieldsDataAuth.length > 0 &&
            fieldsDataAuth.map((item) => {
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
                    className={Styles.input__item}
                    onChange={(e) =>
                      handleFilterOnChange(e, item.filter, item.name)
                    }
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
        <div
          className={`${Styles.authorization__form__items__textarea} ${Styles.no_padding} ${Styles.checkbox__auth}`}
        >
          <ul
            className={`${
              formik.errors?.private_police && formik.touched?.private_police
                ? Styles.authorization__form__item__input_error
                : Styles.authorization__form__item__input
            }`}
          >
            <CheckboxWithLabel
              name={"private_police"}
              id={"private_police_id"}
              title={"Запомнить меня"}
              onChangeData={(e) => {
                formik.handleChange(e);
              }}
            />

            <div
              className={`${
                formik.errors?.private_police && formik.touched?.private_police
                  ? Styles.overflow__auto
                  : Styles.overflow
              }`}
            >
              <li>{formik.errors?.private_police}</li>
            </div>
          </ul>
          <Link href={"/auth/forgot"}>Забыл пароль?</Link>
        </div>
        <div className={Styles.authorization__form__item__answer}>
          <Button type={"submit"} disabled={loading}>
            <li>Войти</li>
            <div className={Styles.button__spinner}>
              {timer && <SpinnerButton />}
            </div>
          </Button>
          {error && (
            <Message type={"error"}>
              <span>Нет соединения с базой</span>
            </Message>
          )}
          {authData?.hasError && (
            <Message type={"error"}>
              <span>
                <ErrorIcon />
                Неверный логин или пароль
              </span>
            </Message>
          )}
        </div>
      </form>
    </div>
  );
};

export { SingInForm };
