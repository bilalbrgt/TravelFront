import React, { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../Firebase";
import Logout from "../Logout";
import Loader from "../Loader/";

import Informations from "../Compte";

const Welcome = (props) => {
  const firebase = useContext(FirebaseContext);

  const [userSession, setUserSession] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged((user) => {
      user ? setUserSession(user) : props.history.push("/");
    });

    if (!!userSession) {
      firebase
        .user(userSession.uid)
        .get()
        .then((doc) => {
          if (doc && doc.exists) {
            const myData = doc.data();
            setUserData(myData);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return () => {
      listener();
    };
  }, [userSession, firebase, props.history]);

  return userSession === null ? (
    <Loader />
  ) : (
    <div className="">
      <div className="container">
        <Logout />
        <Informations />
      </div>
    </div>
  );
};

export default Welcome;
