import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {PATH} from "../../config";

function Signup() {
  
  useEffect(() => {
    document.title = "Sign Up || Lotus Yodha"
  }, [])
  
  return (
    <div className="container-fluid page-height main-login-body p-5">
      <div className="login-body-inner shadow">
      <Link to={PATH.SIGNUP}>
        Sign Up
      </Link>
      </div>
    </div>
  );
}
export default Signup;

