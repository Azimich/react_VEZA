import * as Yup from "yup";

const ValidationJob = () => {
  return Yup.object({
    rstName: Yup.string()
      .min(2, "Минимум 2 символа!")
      .max(50, "Максимум 50 символов!")
      .required("Обязательно для заполнения!"),
    email: Yup.string()
      .min(6, "Минимум 6 символов!")
      .max(50, "Максимум 50 символов!")
      .email("Неверный email!")
      .required("Обязательно для заполнения!"),
    phone: Yup.string()
      .min(6, "Минимум 6 символов!")
      .max(50, "Максимум 50 символов!")
      .required("Обязательно для заполнения!"),
    private_police: Yup.boolean().oneOf(
      [true],
      "Примите согласие на обработку персональных данных с условиями",
    ),
  });
};

const ValidationAuth = () => {
  return Yup.object({
    login: Yup.string()
      .min(3, "Минимум 3 символа!")
      .max(50, "Максимум 50 символов!")
      .required("Обязательно для заполнения!")
      .email("Неверный email!"),
    password: Yup.string()
      .min(6, "Минимум 6 символов!")
      .max(50, "Максимум 50 символов!")
      .required("Обязательно для заполнения!"),
  });
};

const ValidationRegister = () => {
  return Yup.object({
    name: Yup.string()
      .min(2, "Минимум 2 символа!")
      .max(50, "Максимум 50 символов!")
      .required("Обязательно для заполнения!"),
    surname: Yup.string()
      .min(2, "Минимум 2 символов!")
      .max(50, "Максимум 50 символов!")
      .required("Обязательно для заполнения!"),
    email: Yup.string()
      .min(6, "Минимум 6 символов!")
      .max(50, "Максимум 50 символов!")
      .email("Неверный email!")
      .required("Обязательно для заполнения!"),
    phones: Yup.string()
      .min(6, "Минимум 6 символов!")
      .max(50, "Максимум 50 символов!")
      .required("Обязательно для заполнения!"),
    organizationINN: Yup.string().required("Обязательно для заполнения!"),
    dateOfBirth: Yup.string()
      .min(6, "Минимум 6 символов!")
      .max(50, "Максимум 50 символов!")
      .required("Обязательно для заполнения!"),
    position: Yup.string()
      .min(6, "Минимум 6 символов!")
      .max(50, "Максимум 50 символов!")
      .required("Обязательно для заполнения!"),
    password: Yup.string()
      .min(6, "Минимум 6 символов!")
      .max(50, "Максимум 50 символов!")
      .required("Обязательно для заполнения!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Пароли должны совпадать")
      .min(6, "Минимум 6 символов!")
      .max(50, "Максимум 50 символов!")
      .required("Обязательно для заполнения!"),
    private_police: Yup.boolean().oneOf(
      [true],
      "Примите согласие на обработку персональных данных с условиями",
    ),
  });
};

export { ValidationAuth, ValidationRegister, ValidationJob };
