import React, { useState, useEffect } from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Activer le défilement automatique
    autoplaySpeed: 2000, // Intervalle de temps entre chaque transition en millisecondes
  };

  /******** LOADER ********/

  window.addEventListener("load", () => {
    const loader = document.querySelector(".loaderSpinner");
    setInterval(() => {
      loader.classList.add("loader_hidden");
    }, 3500);

    loader.addEventListener("transitionend", () => {
      setTimeout(() => {
        document.body.removeChild(loader);
      }, 2000);
    });
  });
  const menu = [
    { IM: "/assets/images/menu1.jpg", desc: "MENU DU JOUR OU MENU MAISON" },
    { IM: "/assets/images/menu2.jpg", desc: "MENU DE COMPLET" },
    { IM: "/assets/images/menu3.jpg", desc: "MENU GASTRONOMIQUE" },
    { IM: "/assets/images/menu4.jpg", desc: "MENU DE DEGUSTATION" },
    { IM: "/assets/images/menu5.jpg", desc: "MENU FIXE" },
  ];
  return (
    <div className="overflow-y-hidden">
      <div className="loaderSpinner fixed top-0 left-0 w-full flex items-center justify-center">
        <img src="./assets/icons/loader.gif" alt="loader" />
      </div>

      <div className="d">
        <header>
          <div className="bg-white fixed w-full z-10 top-0">
            <nav className="flex items-center justify-between container ">
              <div className="L flex gap-4 items-center pt-2 pb-2">
                <div className="logo">
                  <img
                    src={"/assets/icons/logo.png"}
                    alt="logo"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
              <div className="nav flex items-center gap-6">
                <a href="#">Accueil</a>
                <a href="#">Produits</a>
                <a href="#">À propos</a>
                <a href="#">Contact</a>
              </div>
              <div className="R">
                <button className="btn p-2">s'inscrire</button>
              </div>
            </nav>
          </div>
          <div className="accueil flex items-center justify-center flex-col gap-2 mt-16">
            <img
              src={"/assets/icons/logo.png"}
              className="mt-24"
              alt="logo"
              width={150}
              height={150}
            />
            <h1 className="font-bold text-3xl mt-14 backdrop-blur-sm p-2 text-[#0B3005]">
              Bienvenue sur <span className="text-[green-600]">E-Hoaniko,</span>{" "}
            </h1>
            <h4 className="text-xl w-[60%] text-center backdrop-blur-sm mt-5 text-[#0B3005] ">
              Votre destination pour des expériences culinaires inédites et
              pratiques. Nous sommes fiers de vous présenter une sélection
              soigneusement élaborée de kits alimentaires, conçus pour
              simplifier votre cuisine tout en ravivant votre passion pour la
              gastronomie.
            </h4>
            <button size={"lg"} className="btn mt-4 p-2">
              Passe votre commende
            </button>
          </div>
        </header>

        <div className="apropos container mt-20 flex flex-col items-center justify-center">
          <h1 className="font-bold text-2xl text-center">
            Bon pour vous. Bon pour la planète.
          </h1>
          <div className="grid grid-cols-3 gap-8 mt-11">
            <div className="flex items-center gap-4">
              <div className="left">
                <img
                  src={"/assets/icons/1.png"}
                  alt="1"
                  width={200}
                  height={200}
                />
              </div>
              <div className="right flex flex-col gap-4">
                <h1 className="title">Créez Votre Festin Personnalisé</h1>
                <p>
                  Choisissez votre expérience culinaire: Personnalisez votre
                  festin idéal!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="left">
                <img
                  src={"/assets/icons/2.png"}
                  alt="1"
                  width={200}
                  height={200}
                />
              </div>
              <div className="right flex flex-col gap-4">
                <h1 className="title">Produits Frais et de Qualité :</h1>
                <p>
                  Explorez nos produits frais et de qualité pour une expérience
                  culinaire exceptionnelle!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="left">
                <img
                  src={"/assets/icons/3.png"}
                  alt="1"
                  width={200}
                  height={200}
                />
              </div>
              <div className="right flex flex-col gap-4">
                <h1 className="title">Savoir-Faire Culinaire d'Exception</h1>
                <p>
                  Faites confiance à notre équipe de chefs professionnels pour
                  créer des plats exceptionnels.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="todaymenu mt-40 relative">
          <img
            src={"/assets/images/feille.png"}
            alt="feille"
            width={250}
            height={250}
            className="absolute top-4 -left-8"
          />
          <img
            src={"/assets/images/tomate.png"}
            alt="tomate"
            width={150}
            height={150}
            className="absolute right-32"
          />
          <h1 className="font-bold text-2xl text-center">
            Délices du Jour: Fraîcheur et Variété au Menu
          </h1>
          <p className="text-center m-auto mt-5 w-[50%]">
            Explorez notre menu quotidien, où la fraîcheur et la diversité des
            ingrédients sont à l'honneur. Préparés par nos chefs expérimentés,
            chaque plat offre une expérience culinaire unique. Découvrez les
            délices du jour avec nous.
          </p>

          <div className=" m-auto mt-8 p-4 rounded-lg flex items-center gap-8 w-fit border-2">
            <div className="left">
              <img
                className="rounded-lg"
                src={"/assets/images/todaymenu.png"}
                alt="today"
              />
            </div>

            <div className="flex flex-col gap-8 ">
              <h1 className="text-3xl font-bold">
                Palette Croquante du Jardin
              </h1>
              <div className="right flex gap-8">
                <div className="l">
                  <h1>Ingredients:</h1>
                  <span>
                    <p>-Œuf</p>
                    <p>-Carotte</p>
                    <p>-Poivron rouge</p>
                  </span>
                </div>
                <div className="r">
                  <h1>Benefits:</h1>
                  <span>
                    <p>-Richesse en Nutriments</p>
                    <p>-Équilibre Nutritionnel </p>
                    <p>-Digestion Saine</p>
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="l">
                  <span className="flex items-center gap-4">
                    <h1 className="font-bold text-3xl">50.000Ar</h1>
                    <s>
                      <center>60.000Ar</center>
                    </s>
                  </span>
                  <span className="flex items-center gap-4 mt-3 ">
                    <button className="rounded-full pl-8 pr-8 p-2 bg-red-500">
                      Acheter
                    </button>
                    <p>détail</p>
                  </span>
                </div>
                <div className="r flex flex-col gap-2">
                  <div className="p-1 bg-red-500 shadow-lg rounded-full">
                    <svg
                      className="w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16">
                      <path
                        d="M5.265625 4.03125L1.9375 7.492188L5.132813 10.964844L5.867188 10.285156L3.773438 8.007813L15 8L15 7L3.789063 7.007813L5.984375 4.71875Z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                  <div className="p-1 bg-gray-50-500 shadow-lg rounded-full">
                    <svg
                      className="w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16">
                      <path
                        d="M11.734375 4.03125L11.015625 4.71875L13.210938 7.007813L2 7.007813L2 8.007813L13.191406 8.007813L11.015625 10.28125L11.734375 10.96875L15.066406 7.5Z"
                        fill="#000"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="menu mt-40">
          <h1 className="font-bold text-3xl mt-6 text-center">
            Découvrez un Festival de Saveurs Fraîches: <br /> Parcourez nos
            Catégories de Produits!
          </h1>
          <div className="conaitainer2 flex items-center gap-16">
            <div className="left">
              <img
                className="image_menu"
                src={"/assets/icons/menu.png"}
                alt="menu"
                width={200}
                height={200}
              />
            </div>
            <div className="right flex flex-col gap-8">
              <span className="flex items-center gap-4">
                <img
                  src={"/assets/icons/yes.svg"}
                  alt="yes"
                  width={10}
                  height={10}
                />
                <p>FRUITS ET LÉGUMES FRAIS </p>
              </span>
              <span className="flex items-center gap-4">
                <img
                  src={"/assets/icons/yes.svg"}
                  alt="yes"
                  width={10}
                  height={10}
                />
                <p>PRODUITS DE BOULANGERIE</p>
              </span>
              <span className="flex items-center gap-4">
                <img
                  src={"/assets/icons/yes.svg"}
                  alt="yes"
                  width={10}
                  height={10}
                />
                <p>PRODUITS BIO ET NATURELS </p>
              </span>
              <span className="flex items-center gap-4">
                <img
                  src={"/assets/icons/yes.svg"}
                  alt="yes"
                  width={10}
                  height={10}
                />
                <p>PRODUITS DE LA MER </p>
              </span>
              <button className="pl-8 pr-8 p-2 rounded-full bg-red-500">
                VOIR EN DETAIL
              </button>
            </div>
          </div>
        </div>

        <div className=" overflow-hidden">
          {" "}
          <h1 className="font-bold text-2xl text-center">AUTRE MENU</h1>
          <p className="text-center mt-4 text-xl">
            Plongée dans nos Saveurs: Découvrez Tous Nos Menus!
          </p>
          <Slider {...settings} className="mt-10">
            {menu.map((v, i) => (
              <div key={i} className="md:basis-1/2 lg:basis-1/4 ">
                <div className="p-1 flex flex-col gap-4 items-center">
                  <img
                    src={v.IM}
                    alt="kaly"
                    width={300}
                    height={300}
                    className="rounded-lg cursor-pointer"
                  />
                  <span className="flex flex-col items-center">
                    <h1>{v.desc}</h1>
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <footer className="mt-44 ">
          <div className="fot-bg h-96 flex items-center justify-center relative">
            <img
              src={"/assets/images/fot1.png"}
              alt="foot"
              width={600}
              height={600}
              className="absolute left-0 top-0"
            />
            <div className="flex flex-col gap-4 items-center justify-center ">
              <h1 className="font-bold text-2xl text-center">
                Découvrez notre Univers Gourmand
              </h1>
              <p className="text-center w-5/12 m-auto">
                Plongez dans un festin de saveurs et découvrez une expérience
                culinaire inoubliable avec nous. Explorez nos délicieuses offres
                et laissez-vous séduire par notre passion pour la gastronomie !
              </p>
              <button className="rounded-full bg-red-500 pl-8 pr-8 p-2 w-fit">
                Passe votre commende
              </button>
            </div>
            <img
              src={"/assets/images/fot2.png"}
              alt="fot2"
              width={550}
              height={550}
              className="absolute -right-0"
            />
          </div>
          <div className="end container mt-4 flex justify-between items-center border-b-gray-250 pb-3 border-b-2">
            <div className="l">
              <button
                src={"/assets/icons/logo.png"}
                alt="logo"
                width={60}
                height={60}
              />
            </div>
            <div className="r flex gap-6">
              <a href="#">Accueil</a>
              <a href="#">Produits</a>
              <a href="#">À propos</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="endend container mt-2 flex justify-between items-center">
            <div className="l">
              <p>&copy; copyright reserved by jo-turner 2024</p>
            </div>
            <div className="r flex items-center gap-4">
              <div className="bg-gray-200 p-2 rounded-full shadow-xl">
                <svg
                  className="w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"
                    fill="#000"
                  />
                </svg>
              </div>
              <div className="bg-gray-200 p-2 rounded-full shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="w-4">
                  <path
                    d="M12 3C7.04 3 3 7.04 3 12L3 38C3 42.96 7.04 47 12 47L38 47C42.96 47 47 42.96 47 38L47 12C47 7.04 42.96 3 38 3L12 3 z M 38 8L41 8C41.55 8 42 8.45 42 9L42 12C42 12.55 41.55 13 41 13L38 13C37.45 13 37 12.55 37 12L37 9C37 8.45 37.45 8 38 8 z M 25 10C30.33 10 35.019688 12.8 37.679688 17L42 17L42 37C42 39.76 39.76 42 37 42L13 42C10.24 42 8 39.76 8 37L8 17L12.320312 17C14.980313 12.8 19.67 10 25 10 z M 25 12C17.83 12 12 17.83 12 25C12 32.17 17.83 38 25 38C32.17 38 38 32.17 38 25C38 17.83 32.17 12 25 12 z M 25 16C29.96 16 34 20.04 34 25C34 29.96 29.96 34 25 34C20.04 34 16 29.96 16 25C16 20.04 20.04 16 25 16 z"
                    fill="#000"
                  />
                </svg>
              </div>
              <div className="bg-gray-200 p-2 rounded-full shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4">
                  <path
                    d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z M18,8.999c0,4.08-2.957,8.399-8.466,8.943C10.28,17.413,11,16.662,11,16.662 S8,14,7.775,10.522C8.81,10.838,9.888,10.999,11,10.999h2v-2.5c0-0.001,0-0.001,0-0.001C13.002,7.118,14.12,6,15.5,6 C16.881,6,18,7.119,18,8.5C18,8.5,18,8.92,18,8.999z"
                    fill="#000"
                  />
                </svg>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
