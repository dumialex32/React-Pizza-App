import { Link } from "react-router-dom";

function Button({ children, type, to, disabled }) {
  const baseStyling =
    "inline-block text-sm bg-yellow-400 py-2 px-4 md:py-3 md:px-6 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:ring ring-yellow-500 ring-offset-2 ";
  const secondaryStyling =
    "inline-block font-semibold text-sm py-1.5 px-4 md:py-2.5 md:px-6 focus:outline-none focus:ring ring-stone-400 hover:bg-stone-300 bg-stone-200 rounded-full transition-colors duration-300";
  const linkStyling = "hover:text-yellow-400 hover:underline text-sky-500";

  const styles = {
    primary: baseStyling,
    secondary: secondaryStyling,
    link: linkStyling,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
