// import { CheckboxWithLabel } from "components/checkbox"
import { Input } from "components/input/InputContainer";

const handleInput = () => {
  console.log(23242);
};

const SingIn = () => {
  return <Input onChange={handleInput} placeholder={"Логин *"} />;
};

export { SingIn };
