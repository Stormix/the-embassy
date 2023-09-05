import { cn } from "../../lib/utils";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  asLink?: boolean;
  href?: string;
  icon?: string
}

const Button = (props: ButtonProps) => {
  if (!props.asLink)
    return (
      <button className={cn("rounded-[100px] px-3 py-2 border border-secondary", props.className)} onClick={props.onClick}>
        {props.children}
      </button>
    );
  else
    return (
      <a href={props.href} className={cn("rounded-[100px] px-3 py-2 border border-secondary", props.className)}>
        {props.children}
      </a>
    );
}

export default Button;