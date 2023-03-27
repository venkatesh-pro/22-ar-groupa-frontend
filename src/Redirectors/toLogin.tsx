import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RedirectToLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, [navigate]);

  return <h1>You Shouldn't Be Here!</h1>;
};
