import React, { Component } from "react";
import { Link } from "react-router-dom";

class Moninfos extends Component {
  render() {
    return (
      <div>
        <section id="possibilities">
          <div className="wrapper">
            <article className="caravanes1">
              <div id="overlay">
                <h4> Partez en famille </h4>
                <p className="text-1">
                  Offrez le meilleur à ceux que vous aimez et partagez des
                  moments fabuleux !{" "}
                </p>
                <Link to="/Destinations" class="buttons-2">
                  Plus d'infos{" "}
                </Link>{" "}
              </div>
            </article>

            <article className="caravanes2">
              <div id="overlay">
                <h4> Envie de s'EVader</h4>
                <p className="text2">
                  {" "}
                  Parfois un peu d'évasion serait le bienvenue et ferait le plus
                  grand bien !
                </p>
                <Link to="/Destinations" class="buttons22">
                  Plus d'infos{" "}
                </Link>{" "}
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

export default Moninfos;
