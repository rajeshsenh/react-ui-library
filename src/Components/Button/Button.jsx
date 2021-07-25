import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";

function Button(props) {
  const { children, onClick, disabled, className, variant, color, href, size } =
    props;

  console.log({ children, onClick, disabled, className, variant });

  const handleClick = () => {
    if (disabled || !onClick) {
      return;
    }
    onClick();
  };

  const baseClasses = cx("buttonBase", "button-root", className, {
    "button-contained": variant === "contained",
    "button-containedPrimary": color === "primary" && variant === "contained",
    "button-containedSecondary":
      color === "secondary" && variant === "contained",
    "button-text": variant === "text",
    "button-textPrimary": variant === "text" && color === "primary",
    "button-textSecondary": variant === "text" && color === "secondary",
    "button-outlined": variant === "outlined",
    "button-outlinedPrimary": variant === "outlined" && color === "primary",
    "button-outlinedSecondary": variant === "outlined" && color === "secondary",
    "button-outlinedSizeSmall": variant === "outlined" && size === "small",
    "button-outlinedSizeLarge": variant === "outlined" && size === "large",
    "button-containedSizeLarge": variant === "contained" && size === "large",
    "button-containedSizeSmall": variant === "contained" && size === "small",
    "button-textSizeLarge": variant === "text" && size === "large",
    "button-textSizeSmall": variant === "text" && size === "small",
    disabled
  });

  if (href) {
    return (
      <a
        onClick={handleClick}
        className={baseClasses}
        href={href}
        disabled={disabled}
      >
        {children}
      </a>
    );
  }

  console.log(variant === "contained");
  return (
    <button onClick={handleClick} className={baseClasses} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
  disabled: PropTypes.bool,
  // fullWidth: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(["large", "large", "small"]),
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string
};

Button.defaultProps = {
  variant: "text",
  size: "medium",
  disabled: false
};

export default Button;
