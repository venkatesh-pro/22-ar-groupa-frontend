import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RedirectToApp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/App");
  }, [navigate]);

  return <h1>You Shouldn't Be Here!</h1>;
};
