//a schotcut using es7+, write racfc to have hte base of the componenet written for u
import { ReactNode } from "react";

//to define the shape of props
interface Props {
  children: ReactNode;
}

//if we want to pass html content, we pass the children type ans ReactNode

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};
export default Alert;
