import "./button.styles.scss";

const Button_Type_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

export const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${Button_Type_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
