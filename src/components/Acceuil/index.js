import React, { Component } from "react";
import Caravanes from "../Caravanes";
import Myicons from "../Myicons";
import { Link } from "react-router-dom";

import "../Css/acceuil.css";
class Acceuil extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <section id="main-images">
        <div className="wrapper">
          <h2>
            Organiser Votre <strong> VOYAGES SUR MESURE </strong>
            <Link to="/Destinations" className="buttons-1">
              Par ici
            </Link>
          </h2>
        </div>
        <Myicons />
        <Caravanes />

        {this.state.show ? (
          <p className="cookies">
            {" "}
            En poursuivant votre navigation sur ce site, vous acceptez
            l’utilisation des cookies destinés à améliorer votre expérience de
            navigation, à mesurer l’audience <br />  <br />
            et optimiser la performance du site, à vous offrir des
            fonctionnalités relatives aux médias sociaux et à vous proposer des
            offres personnalisées.
            <span
              id="X"
              onClick={() => {
                this.setState({ show: false });
              }}
            >
              <button className="Jaccepte"> J'accepte </button>
            </span>{" "}
          </p>
        ) : null}
      </section>
    );
  }
}
export default Acceuil;
