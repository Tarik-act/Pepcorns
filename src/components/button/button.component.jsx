import { BaseButton, OutlineButton, SecondaryButton } from './button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  secondary: 'secondary',
  outline: 'outline',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.secondary]: SecondaryButton,
    [BUTTON_TYPE_CLASSES.outline]: OutlineButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
