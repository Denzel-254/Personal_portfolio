// src/components/common/Button.jsx
function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const baseClasses =
    "font-semibold rounded-lg transition-colors duration-200 focus:outline-none";

  const variants = {
    primary: "bg-green-500 hover:bg-green-700 text-white hover:bg-green-700",
    secondary:
      "bg-gray-500 text-white border border-primary-blue hover:bg-gray-700 ",
    outline:
      "border-2 border-white text-white backdrop-blur-sm hover:bg-white hover:text-blue-950",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
