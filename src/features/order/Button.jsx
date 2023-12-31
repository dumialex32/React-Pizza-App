import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const baseStyles =
    "bg-yellow-400 text-sm uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const secondaryStyles =
    "text-stone-400 text-sm uppercase inline-block tracking-wide border-2 border-stone-500 rounded-full px-4 py-2.5 md:px-6 md:py-3.5 focus:outline-none focus:ring focus:ring-stone-200 hover:bg-stone-300 disabled:cursor-not-allowed";

  const styles = {
    primary: `${baseStyles} px-4 py-3 md:px-6 md:py-4`,
    secondary: `${secondaryStyles}`,

    small: `${baseStyles} text-xm md:text-base px-3 py-2 md:px-5 md:py-2.5`,
    disabled: ` text-xm md:text-base px-3 py-2 md:px-5 md:py-2.5 "opacity-70 grayscale`,
    round: baseStyles + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button className={styles[type]} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
