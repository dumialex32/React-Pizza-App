import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();

  const buttonClasses =
    "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  if (to === "-1")
    return (
      <button className={buttonClasses} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link className={buttonClasses} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
