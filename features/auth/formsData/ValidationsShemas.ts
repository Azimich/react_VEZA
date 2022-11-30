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

const ValidationRegitr = () => {
  return Yup.object({
    firstName: Yup.string()
      .min(2, "Минимум 2 символа!")
      .max(50, "Максимум 50 символов!")
      .required("Обязательно для заполнения!"),
    lastName: Yup.string()
      .min(2, "Минимум 2 символов!")
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
    company_inn: Yup.string()
      .max(10, "Максимум 10 символов!")
      .required("Обязательно для заполнения!"),
    birthdate: Yup.string()
      .min(6, "Минимум 6 символов!")
      .max(50, "Максимум 50 символов!")
      .required("Обязательно для заполнения!"),
    post: Yup.string()
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

export { ValidationAuth, ValidationRegitr, ValidationJob };
