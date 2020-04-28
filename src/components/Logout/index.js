import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../Firebase";
import ReactToolTip from "react-tooltip";
import "../Css/deconnexions.css";
const Logout = () => {
  const firebase = useContext(FirebaseContext);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      //console.log("Déconnexion");
      firebase.signoutUser();
    }
  }, [checked, firebase]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="logoutContainer">
      <label className="switch">
        {" "}
        Déconnexion
        <input
          onChange={handleChange}
          type="checkbox"
          checked={checked}
          className="check"
        />
        <span className="slider round" data-tip="Déconnexion"></span>
      </label>
      <ReactToolTip place="left" effect="solid" />
    </div>
  );
};

export default Logout;
