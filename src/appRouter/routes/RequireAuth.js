import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  // const state = useSelector((state) => state);
  let location = useLocation();
  let auth = false;
  const { sign_in } = auth ? auth : null;
  if (!sign_in) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.

    return (
      <>
        <Navigate to="/" state={{ from: location }} replace />
        {/* {toast("You must be logged in to Access your Dashboad", {
          position: "top-center",
        })} */}
      </>
    );
  }

  return children;
};

export { RequireAuth };
