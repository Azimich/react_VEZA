import * as Yup from "yup";

const ValidationShema = () => {
  return Yup.object({
    firstName: Yup.string()
      .min(2, "Минимум 2 символа!")
      .max(50, "Максимум 50 символов!")
      .required("Заполните Ваше Имя!"),
    lastName: Yup.string()
      .min(2, "Минимум 2 символов!")
      .max(50, "Максимум 50 символов!")
      .required("Заполните Вашу фамилию!"),
    email: Yup.string()
      .min(6, "Минимум 6 символов!")
      .max(50, "Максимум 50 символов!")
      .email("Неверный email!")
      .required("Заполните Email!"),
    phone: Yup.string()
      .min(6, "Минимум 6 символов!")
      .max(50, "Максимум 50 символов!")
      .required("Заполните телефон!"),
    company_inn: Yup.string()
      .max(10, "Максимум 10 символов!")
      .required("Укажите ИНН компании!"),
    order: Yup.string().max(10, "Максимум 10 символов!"),
    /*.required("Укажите номер заказа!"),*/
    post: Yup.string()
      .min(6, "Минимум 6 символов!")
      .max(50, "Максимум 50 символов!")
      .required("Обязательно для заполнения!"),
    service: Yup.string().required("Обязательно для заполнения!"),
  });
};

export { ValidationShema };
