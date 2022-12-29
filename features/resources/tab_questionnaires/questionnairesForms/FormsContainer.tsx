import React from "react";
import { FirstForm } from "./FirstForm";
import { SecondForm } from "./SecondForm";
import { ThirdForm } from "./ThirdForm";
// import {useRouter} from "next/router";

const FormContainer = () => {
  // const [forms, setForms] = useState<ReactNode>();
  // const router = useRouter();
  // console.log(router.query, "12345")
  //
  // useEffect(() => {
  //   setForms()
  //
  //   switch (router.query) {
  //     case 3:
  //       alert( 'Маловато' );
  //       break;
  //     case 4:
  //       alert( 'В точку!' );
  //       break;
  //     case 5:
  //       alert( 'Перебор' );
  //       break;
  //     default:
  //       alert( "Нет таких значений" );
  //   }
  // }, [])

  return (
    <div>
      <ThirdForm />
      <SecondForm />
      <FirstForm />
    </div>
  );
};

export { FormContainer };
