import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "sm";
  variant?: "primary" | "secondary";
};

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type ButtonProps = LinkProps | NativeButtonProps;

/** Project-owned adaptation of SmoothUI's Smooth Button. */
export default function Button({
  children,
  className = "",
  size = "default",
  variant = "secondary",
  ...props
}: ButtonProps) {
  const classes = [
    "button",
    "smooth-button",
    variant === "primary" ? "primary" : "",
    size === "sm" ? "sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a className={classes} {...anchorProps}>
        <span className="smooth-button-label">{children}</span>
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      <span className="smooth-button-label">{children}</span>
    </button>
  );
}
