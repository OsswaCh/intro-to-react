interface Props {
  children: string;
  onClick: () => void;
  //this needs ro be children not any string name
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  //to avoid inputting any string, we use union type
}

const Button = ({
  children,
  onClick,
  color = "danger" /* default value*/,
}: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-outline-" + color}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
