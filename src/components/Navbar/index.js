import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import "../Css/navbar.css";

function Navbar() {
  const [Largeur, setLargeur] = useState(window.innerWidth);
  const [togglemenu, setToogleMenu] = useState(false);
  const toogleNavbar = () => {
    setToogleMenu(!togglemenu);
  };

  useEffect(() => {
    const changewidth = () => {
      setLargeur(window.innerWidth);
      if (window.innerWidth > 500) {
        setToogleMenu(false);
      }
    };
    window.addEventListener("resize", changewidth);
    return () => {
      window.removeEventListener("resize", changewidth);
    };
  }, []);
  return (
    <div className="nav">
      <header>
        <div className="wrapper">
          <Link to="/">
            {" "}
            <h1>
              Travel Agency <span className="oranges">. </span>
            </h1>{" "}
          </Link>

          <nav>
            {(Largeur > 500 || togglemenu) && (
              <div className="liste">
                <ul>
                  <li>
                    <Link to="/" className="items">
                      Accueil{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/destinations" className="items">
                      {" "}
                      Destinations{" "}
                    </Link>
                  </li>

                  <li>
                    <Link to="/login" className="items">
                      {" "}
                      Compte{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="items">
                      {" "}
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </nav>
          <div className="btn" onClick={toogleNavbar}>
            <i class="fas fa-sliders-h"></i>
          </div>
        </div>
      </header>
      <section></section>
      <Footer />
    </div>
  );
}

export default Navbar;
