import Styles from "./Utp.module.scss";
import { Button } from "components/button";
import { Modal, useModal } from "components/modal";
import { ModalForm } from "./ModalForm";

const content = <ModalForm />;

const UtpContainer = () => {
  const { isShow, toggle } = useModal();
  // const toggleModal = () => {
  //   console.log("122", toggle);

  // }

  return (
    <div className={Styles.utp__container}>
      <div className={Styles.utp__container__top}>
        <div className={Styles.utp__container__top__list}>
          <h3>Преимущества</h3>
          <p>Обширная линейка исполнений;</p>
          <p>Широкая область применения;</p>
          <p>Использование в системах с высоким КПД;</p>
          <p>Низкий уровень шума</p>
        </div>
        <div className={Styles.utp__container__top__buttons}>
          <div className={Styles.utp__container__top__calculation}>
            <p>Выполнить подбор необходимого оборудования</p>
            <Button children={"Расчёт"} />
          </div>
          <div className={Styles.utp__container__top__download}>
            <p>Скачать BIM-модель</p>
            <Button children={"Скачать"} onClick={toggle} />
          </div>
        </div>
      </div>
      <div className={Styles.utp__container__bottom}>
        <p className={Styles.utp__container__botto__text}>
          По своим техническим параметрам эти вентиля­торы соответствуют лучшим
          европейским образ­цам, полностью заменяют устаревшие серии «Советских»
          вентиляторов В Ц 4-70, В Р 80-75, В Р 86-77 и имеют по сравнению с
          ними целый ряд преимуществ:Вентиляторы выпускают с двумя
          модификация­ми рабочих колес ВРАН6 и ВРАН9, отличающи­мися числом
          лопаток, и выполнены с густым ти­поразмерным рядом R20 диаметров
          колес: 020-025-031-035-040-050-056-063-071-080-090-100-112-125. Это
          позволяет выбирать оптимальный вентилятор практически на любой
          заданный ре­жим с минимальными запасами до 5%. Производится несколько
          вариантов исполнения колес в зависимости от величины окружной
          ско­рости, которые обеспечивают надежную работу вентиляторов в течение
          всего времени их экс­плуатации. Проведенные прочностные расчеты
          рабочих колес с использованием метода конеч­ных элементов полностью
          подтверждены соответствующими экспериментами. Оптимизированы запасы
          мощности при выборе двигателей, что позволяет применять двигатели с
          меньшей установочной мощностью, особенно для вентиляторов малых
          номеров. Предусмотрено исполнение вентиляторов всех номеров по 1-ой
          конструктивной схеме с исполь­зованием преобразователей частоты, что
          дает возможность корректировать режим работы вен­тилятора при
          пуско-наладочных испытаниях и в процессе эксплуатации. Выбор
          оптимального вен­тилятора и расчет мощности мотора, работающе­го с
          преобразователем частоты, производится в программе VEZAFAN. В 2009
          году Центральная Испытательная Лабо­ратория - ЦИЛ-ВЕЗА, получила
          свидетельство государственной аккредитации. Характеристики ВРАН® и
          ВРАВ подтверждены на аэродинамиче­ском стенде ЦИЛ-ВЕЗА для всех
          модификаций. Высокую надежность и стабильность характери­стик
          обеспечивает , в том числе конструктивная схема рабочего колеса и узла
          уплотнения между колесом и входным. Измененная форма спирального
          корпуса увеличен размер фланца выходного отверстия, что обеспечивает
          снижение средней скорости выходном сечении вентилятора и потерь
          давле­ния в присоединенной вентиляционной сети. Уменьшение скорости на
          выходе из вентилятора также увеличивает статическое давление
          венти­лятора. ВРАН® - Вентиляторы Радиальные с загнутыми Назад
          лопатками колеса, с высоким КПД (до 85%) и низким уровнем шума. ВРАН
          изготавливают 16 ти­поразмеров и обеспечивают широкую область режимов
          по производительности от 300 до 120000 мч и по давлению до 2600 Па.
          Индустриальный Вентилятор ВИР-480® применяют в системах, где требуется
          вы­сокий КПДнизкий уровень шума и в системах с параллельной работой
          нескольких вентиляторов.
        </p>
      </div>
      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={content}
        theme={"modal"}
        headerText={"Выбрать модель"}
      ></Modal>
    </div>
  );
};

export { UtpContainer };
