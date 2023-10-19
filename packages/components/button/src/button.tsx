import {HTMLAttributes, forwardRef} from "react";

export interface ButtonProps extends  HTMLAttributes<HTMLDivElement> {}

const Button = forwardRef<HTMLDivElement, ButtonProps>((props, ref) => {
  const {className, children, ...otherProps} = props

const Comp = 'div'
  return (
    <Comp ref={ref} className={className} {...otherProps}>
      {children}
    </Comp>
  );
});

Button.displayName = "prettyUI.Button";

export default Button;