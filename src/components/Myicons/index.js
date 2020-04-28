import React from "react";

function Myicons() {
  return (
    <div className="">
      <section id="steps">
        <div className="wrapper"></div>
        <ul>
          <li id="steps-1">
            <h4> Planifier</h4>
            <p>
              {" "}
              Confiez-nous vos rêves d'évasion : en famille ou entre amis, nous
              trouverons la formule qui comblera vos attentes.
            </p>
          </li>
          <li id="steps-2">
            <h4> Organiser</h4>
            <p>
              Bénéficiez de l'expertise de nos spécialistes de chaque
              destination, ils vous accompagnent dans la réalisation de votre
              voyage.
            </p>
          </li>
          <li id="steps-3">
            <h4> Voyager</h4>
            <p>
              Nous nous chargeons d'assurer votre sécurité et de veiller à votre
              pleine sérénité tout au long de votre voyage.
            </p>
          </li>
          <div className="clear"></div>
        </ul>
      </section>
      <div className="clear"></div>
    </div>
  );
}

export default Myicons;
