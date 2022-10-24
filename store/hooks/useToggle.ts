import { useCallback, useState } from "react";
// Hook
// Parameter is the boolean, with default "false" value
const useToggle = (initialState = false) => {
  // Initialize the state
  const [stateToggle, setState] = useState(initialState);
  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), []);
  return [stateToggle, toggle];
};

export { useToggle };
