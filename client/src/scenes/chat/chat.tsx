import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
export const Chat = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("chaat");
    return () => {
      navigate("/", { replace: true });
    };
  }, [location, navigate]);

  return (
    <div>
      <div>cdc</div>
      shashdbsdj chaaaat
    </div>
  );
};
