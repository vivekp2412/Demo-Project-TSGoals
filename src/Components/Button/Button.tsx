import React from "react";
import styles from "./button.module.css";
import { ComponentPropsWithoutRef } from "react";
/**
 * Button component that displays a button with a title and click handler.
 *
 * @param {ButtonProps} props - The props for the Button component.
 * @returns {JSX.Element} The Button component.
 */
const Button = (props: ComponentPropsWithoutRef<"button">) => {
  const { children, ...rest } = props;
  return (
    <div>
      <button className={styles.button} {...rest}>
        {children}
      </button>
    </div>
  );
};

// Memoize the Button component to optimize rendering
export default React.memo(Button);
