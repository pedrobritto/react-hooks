import { useState } from "react";

/**
 * Manage toggle state.
 *
 * @param {Bool} initialValue Initial toggle value
 */
const useToggle = (initialValue: boolean = false) => {
  const [toggle, setToggle] = useState<boolean>(initialValue);

  return {
    value: toggle,
    switch: () => setToggle(prev => !prev)
  };
};

export default useToggle;
