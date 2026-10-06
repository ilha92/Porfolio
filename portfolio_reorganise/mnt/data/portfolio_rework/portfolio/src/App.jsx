import { useEffect, useRef, useState } from "react";
import React from "react";
// ---------- Données (tirées du CV) ----------

const EMAIL = "iliashamel041@gmail.com";

const NAV = 62; // hauteur de la barre de navigation

// Colle ici le lien GitHub de chaque projet (laisse "" pour cacher le bouton)
const LIENS_GIT = {
  optique: "",
  ecodeli: "",
  drivncook: "",
  vitafit: "",
};

// ---------- Données (d'après la section projets du portfolio actuel) ----------
// liens.demo / liens.code : colle ici les liens de chaque projet,
// les boutons apparaissent automatiquement quand le lien est rempli.

const projets = [
  {
    id: "optique",
    nom: "Première Optique",
    type: "Mission client · 2 mois",
    faits: ["E-commerce", "Mai – juil. 2026"],
    couleur: "#c4a8f5",
    role: "Mon rôle : développeur web et commercial",
    accroche:
      "Refonte complète du site d'une boutique de lunettes à Paris, pour moderniser son image et améliorer l'expérience des visiteurs.",
    points: [
      [
        "Nouvelle interface",
        "Moderne, responsive (ordinateur, tablette, mobile) et fidèle à l'identité visuelle de la boutique.",
      ],
      [
        "Contenu et visibilité",
        "Services, collections, marques partenaires et avis Google, avec une navigation et un SEO optimisés.",
      ],
      [
        "Suivi du client",
        "Analyse des besoins, maquette, retours du client, développement et intégration des contenus.",
      ],
    ],
    resultat: [
      "Objectif",
      "Moderniser l'image de la boutique et améliorer l'expérience utilisateur.",
    ],
    techs: [
      "React.js",
      "Vercel",
      "Optimisation SEO",
      "Intelligence artificielle",
      "Cold calling",
    ],
  },
  {
    id: "ecodeli",
    nom: "EcoDeli",
    type: "Projet personnel",
    faits: ["3 applications"],
    couleur: "#5fd08a",
    accroche:
      "Le système d'information complet d'une entreprise de crowdshipping : un site web, une application mobile et un outil de gestion des données.",
    points: [
      [
        "Site web",
        "Inscription, authentification et rôles, suivi des livraisons et des services de crowdshipping.",
      ],
      [
        "Application mobile",
        "Développée en Kotlin pour accéder aux services d'EcoDeli en mobilité.",
      ],
      [
        "Gestion des données",
        "Application Java qui centralise les données internes de l'entreprise.",
      ],
    ],
    resultat: [
      "Résultat",
      "Une infrastructure fiable, sécurisée et évolutive, adaptée à la croissance d'EcoDeli.",
    ],
    techs: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Java",
      "Kotlin",
      "JavaScript",
      "HTML / CSS",
    ],
  },
  {
    id: "drivncook",
    nom: "Driv'n Cook",
    type: "Projet annuel · 2e année",
    faits: ["Rôles admin et franchisé"],
    couleur: "#f0a53a",
    accroche:
      "Une application web pour piloter un réseau de franchises : franchisés, camions, stocks et ventes au même endroit.",
    points: [
      [
        "Franchisés",
        "Suivi des informations et des activités de chaque franchisé.",
      ],
      ["Camions", "Maintenance, entretien et disponibilité de la flotte."],
      ["Ventes et approvisionnement", "Suivi des stocks et des transactions."],
      [
        "Accès sécurisés",
        "Rôles administrateur et franchisé pour protéger les données.",
      ],
    ],
    resultat: [
      "Objectif",
      "Centraliser les opérations et améliorer le suivi et la performance du réseau.",
    ],
    techs: [
      "PHP natif",
      "MySQL",
      "phpMyAdmin",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
    ],
  },
  {
    id: "vitafit",
    nom: "Vitafit",
    type: "Projet annuel · 1re année",
    faits: ["Équipe de 3"],
    couleur: "#8fb8e8",
    role: "Mon rôle : la partie administrateur du site",
    accroche:
      "Une plateforme web dédiée au bien-être et à la santé, développée avec deux développeurs backend et un développeur frontend.",
    points: [
      [
        "Gestion des utilisateurs",
        "Consultation, modification et suppression des comptes.",
      ],
      [
        "Gestion des abonnements",
        "Suivi des abonnés et rôles pour accéder aux pages réservées.",
      ],
      ["Inscription et connexion", "Authentification et création de compte."],
    ],
    resultat: [
      "Objectif",
      "Gérer efficacement utilisateurs et abonnements, avec une expérience fluide pour les utilisateurs finaux.",
    ],
    techs: [
      "PHP",
      "PHPMailer",
      "MySQL",
      "MySQL Workbench",
      "phpMyAdmin",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
    ],
  },
];

const listeProjets = projets;

// ---------- Scènes animées (une par projet) ----------

// EcoDeli : le site, le mobile et l'app Java échangent avec la base de données
function SceneEcoDeli() {
  const liens = [
    ["M160,118 L214,168", "M214,168 L160,118"],
    ["M332,112 L268,166", "M268,166 L332,112"],
    ["M240,300 L240,228", "M240,228 L240,300"],
  ];
  const particules = [
    [60, 232],
    [424, 252],
    [128, 346],
    [402, 362],
    [304, 36],
    [38, 152],
  ];
  return (
    <svg
      viewBox="0 0 480 400"
      className="scene"
      role="img"
      aria-label="Schéma : un site web, une application mobile et une application Java reliés à une base de données MongoDB"
    >
      <g className="plan plan-fond">
        <circle cx="240" cy="190" r="96" className="s-orbite" />
        <circle cx="240" cy="190" r="150" className="s-orbite s-orbite-2" />
        {particules.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="2.5"
            className="s-particule"
            style={{ animationDelay: i * 0.6 + "s" }}
          />
        ))}
      </g>

      <g className="plan plan-a">
        {liens.map(([aller], i) => (
          <path key={i} d={aller} className="s-lien" />
        ))}

        <g transform="translate(30,60)">
          <g className="s-entre" style={{ animationDelay: "0.1s" }}>
            <rect width="130" height="100" rx="8" className="s-panneau" />
            <circle cx="14" cy="14" r="3" fill="#ff6b6b" />
            <circle cx="26" cy="14" r="3" fill="#f0a53a" />
            <circle cx="38" cy="14" r="3" fill="#5fd08a" />
            <rect x="12" y="34" width="70" height="8" rx="4" className="s-ui" />
            <rect
              x="12"
              y="50"
              width="106"
              height="6"
              rx="3"
              className="s-ui"
            />
            <rect x="12" y="62" width="90" height="6" rx="3" className="s-ui" />
            <rect
              x="12"
              y="76"
              width="42"
              height="12"
              rx="4"
              className="s-accent"
            />
          </g>
        </g>
        <text x="95" y="184" textAnchor="middle" className="s-texte">
          Site web · React.js
        </text>

        <g transform="translate(330,48)">
          <g className="s-entre" style={{ animationDelay: "0.25s" }}>
            <rect width="76" height="128" rx="14" className="s-panneau" />
            <rect x="26" y="8" width="24" height="4" rx="2" className="s-ui" />
            <rect x="12" y="30" width="52" height="8" rx="4" className="s-ui" />
            <rect x="12" y="46" width="40" height="6" rx="3" className="s-ui" />
            <rect
              x="12"
              y="58"
              width="52"
              height="30"
              rx="6"
              className="s-accent"
              opacity="0.85"
            />
            <rect
              x="12"
              y="98"
              width="52"
              height="14"
              rx="7"
              className="s-ui"
            />
          </g>
        </g>
        <text x="368" y="202" textAnchor="middle" className="s-texte">
          Mobile · Kotlin
        </text>

        <g transform="translate(185,300)">
          <g className="s-entre" style={{ animationDelay: "0.4s" }}>
            <rect width="110" height="56" rx="8" className="s-panneau" />
            <rect x="12" y="12" width="50" height="6" rx="3" className="s-ui" />
            <rect
              x="12"
              y="24"
              width="86"
              height="5"
              rx="2.5"
              className="s-ui"
            />
            <rect
              x="12"
              y="35"
              width="70"
              height="5"
              rx="2.5"
              className="s-ui"
            />
          </g>
        </g>
        <text x="240" y="384" textAnchor="middle" className="s-texte">
          Gestion des données · Java
        </text>

        <g transform="translate(240,190)">
          <circle r="34" className="s-onde" />
          <circle
            r="34"
            className="s-onde"
            style={{ animationDelay: "1.2s" }}
          />
          <g className="s-entre">
            <circle r="34" className="s-db" />
            <text y="4" textAnchor="middle" className="s-titre">
              MongoDB
            </text>
          </g>
        </g>

        {liens.map(([aller, retour], i) => (
          <g key={i}>
            <circle r="5" className="s-pouls">
              <animateMotion
                dur="2.6s"
                begin={i * 0.5 + "s"}
                repeatCount="indefinite"
                path={aller}
              />
            </circle>
            <circle r="5" className="s-pouls" opacity="0.6">
              <animateMotion
                dur="2.6s"
                begin={i * 0.5 + 1.3 + "s"}
                repeatCount="indefinite"
                path={retour}
              />
            </circle>
          </g>
        ))}
      </g>
    </svg>
  );
}

// Première Optique : site e-commerce responsive, collections, avis Google, SEO
function SceneOptique() {
  const cartes = [0, 1, 2];
  const etoiles = [0, 1, 2, 3, 4];
  return (
    <svg
      viewBox="0 0 480 400"
      className="scene"
      role="img"
      aria-label="Site e-commerce de lunettes sur ordinateur et sur mobile, avec des collections, des avis et une barre de performance qui progresse"
    >
      <g className="plan plan-a">
        <g className="s-entre">
          <rect
            x="24"
            y="36"
            width="340"
            height="270"
            rx="12"
            className="s-panneau"
          />
        </g>
        <circle cx="42" cy="54" r="3.5" fill="#ff6b6b" />
        <circle cx="55" cy="54" r="3.5" fill="#f0a53a" />
        <circle cx="68" cy="54" r="3.5" fill="#5fd08a" />
        <rect x="90" y="46" width="150" height="16" rx="8" className="s-ui" />

        <rect
          x="44"
          y="78"
          width="46"
          height="7"
          rx="3.5"
          className="s-accent"
        />
        <rect x="230" y="79" width="30" height="5" rx="2.5" className="s-ui" />
        <rect x="270" y="79" width="30" height="5" rx="2.5" className="s-ui" />
        <rect x="310" y="79" width="34" height="5" rx="2.5" className="s-ui" />

        <rect x="44" y="98" width="300" height="52" rx="8" fill="#16263a" />
        <rect x="58" y="110" width="130" height="9" rx="4.5" className="s-ui" />
        <rect
          x="58"
          y="126"
          width="62"
          height="14"
          rx="7"
          className="s-accent"
        />
        <rect
          x="44"
          y="98"
          width="300"
          height="52"
          rx="8"
          className="s-balayage"
        />

        {cartes.map((i) => (
          <g key={i} transform={`translate(${44 + i * 104},164)`}>
            <g className="s-flotte" style={{ animationDelay: i * 0.8 + "s" }}>
              <g
                className="s-entre"
                style={{ animationDelay: 0.3 + i * 0.18 + "s" }}
              >
                <rect
                  width="92"
                  height="72"
                  rx="8"
                  fill="#16263a"
                  stroke="#2a3b50"
                />
                <g
                  className="s-verre-groupe"
                  style={{ animationDelay: 0.5 + i * 0.25 + "s" }}
                >
                  <circle cx="27" cy="30" r="12" className="s-verre" />
                  <circle cx="65" cy="30" r="12" className="s-verre" />
                  <path d="M39,29 q7,-5 14,0" className="s-verre" />
                  <path d="M15,27 l-6,-4 M77,27 l6,-4" className="s-verre" />
                </g>
                <path
                  className="s-eclat"
                  style={{ animationDelay: 1.4 + i * 1.1 + "s" }}
                  transform="translate(73,20)"
                  d="M0,-7 L1.6,-1.6 L7,0 L1.6,1.6 L0,7 L-1.6,1.6 L-7,0 L-1.6,-1.6 Z"
                />
                <rect
                  x="16"
                  y="54"
                  width="44"
                  height="5"
                  rx="2.5"
                  className="s-ui"
                />
              </g>
            </g>
          </g>
        ))}

        <text x="44" y="276" className="s-texte">
          Avis Google
        </text>
        {etoiles.map((i) => (
          <g key={i} transform={`translate(${142 + i * 24},272)`}>
            <path
              className="s-etoile"
              style={{ animationDelay: i * 0.22 + "s" }}
              d="M0,-9 L2.6,-3 L9,-2.8 L4,1.5 L5.6,8 L0,4.5 L-5.6,8 L-4,1.5 L-9,-2.8 L-2.6,-3 Z"
            />
          </g>
        ))}
      </g>

      <g className="plan plan-b">
        <g transform="translate(384,96)">
          <g className="s-entre" style={{ animationDelay: "0.6s" }}>
            <rect width="84" height="182" rx="16" className="s-panneau" />
            <rect x="30" y="8" width="24" height="4" rx="2" className="s-ui" />
            <rect x="10" y="26" width="64" height="40" rx="8" fill="#16263a" />
            <rect
              x="18"
              y="36"
              width="40"
              height="7"
              rx="3.5"
              className="s-ui"
            />
            <rect
              x="18"
              y="50"
              width="24"
              height="8"
              rx="4"
              className="s-accent"
            />
            <rect
              x="10"
              y="76"
              width="64"
              height="48"
              rx="8"
              fill="#16263a"
              stroke="#2a3b50"
            />
            <g className="s-verre-groupe" style={{ animationDelay: "1.1s" }}>
              <circle cx="28" cy="98" r="9" className="s-verre" />
              <circle cx="56" cy="98" r="9" className="s-verre" />
              <path d="M37,97 q5,-4 10,0" className="s-verre" />
            </g>
            <rect
              x="10"
              y="134"
              width="64"
              height="12"
              rx="6"
              className="s-ui"
            />
            <rect
              x="10"
              y="154"
              width="64"
              height="14"
              rx="7"
              className="s-accent"
              opacity="0.9"
            />
          </g>
        </g>
      </g>

      <text x="24" y="346" className="s-texte">
        SEO et performances
      </text>
      <rect x="24" y="356" width="440" height="10" rx="5" fill="#1d2d41" />
      <rect x="24" y="356" width="440" height="10" rx="5" className="s-perf" />
    </svg>
  );
}

// Driv'n Cook : tableau de bord du réseau, ville qui défile, camion qui roule
function SceneDrivnCook() {
  const barres = [60, 95, 75, 120, 90, 140];
  const lignes = ["Franchisés", "Camions", "Stocks"];
  const immeubles = [
    [0, 34],
    [30, 52],
    [62, 40],
    [96, 60],
    [134, 36],
    [166, 48],
    [200, 58],
    [236, 38],
    [268, 54],
    [304, 42],
    [338, 62],
    [374, 36],
    [408, 50],
    [444, 44],
  ];
  return (
    <svg
      viewBox="0 0 480 400"
      className="scene"
      role="img"
      aria-label="Tableau de bord d'un réseau de franchises avec des statistiques et un camion qui roule dans une ville"
    >
      <defs>
        <linearGradient id="faisceau-dc" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0.4" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g className="plan plan-fond">
        <g className="s-defile">
          {[0, 480].map((dx) => (
            <g key={dx} transform={`translate(${dx},0)`}>
              {immeubles.map(([x, h], i) => (
                <rect
                  key={i}
                  x={x}
                  y={318 - h}
                  width="26"
                  height={h}
                  rx="2"
                  className="s-immeuble"
                />
              ))}
            </g>
          ))}
        </g>
      </g>

      <g className="plan plan-a">
        <g className="s-entre">
          <rect
            x="30"
            y="36"
            width="420"
            height="214"
            rx="14"
            className="s-panneau"
          />
        </g>
        <text x="52" y="68" className="s-titre">
          Réseau de franchises
        </text>

        <rect
          x="300"
          y="50"
          width="66"
          height="24"
          rx="12"
          className="s-chip"
        />
        <text x="333" y="66" textAnchor="middle" className="s-chip-t">
          Admin
        </text>
        <rect
          x="374"
          y="50"
          width="66"
          height="24"
          rx="12"
          className="s-chip"
          style={{ animationDelay: "-3s" }}
        />
        <text
          x="407"
          y="66"
          textAnchor="middle"
          className="s-chip-t"
          style={{ animationDelay: "-3s" }}
        >
          Franchisé
        </text>

        {lignes.map((l, i) => (
          <g key={l}>
            <circle
              cx="58"
              cy={118 + i * 40}
              r="5"
              className="s-point s-accent"
              style={{ animationDelay: i * 0.5 + "s" }}
            />
            <text x="74" y={122 + i * 40} className="s-texte">
              {l}
            </text>
            <rect
              x="74"
              y={130 + i * 40}
              width={90 - i * 14}
              height="5"
              rx="2.5"
              className="s-ui"
            />
          </g>
        ))}

        <line x1="236" y1="96" x2="236" y2="232" stroke="#26384d" />
        {barres.map((h, i) => (
          <rect
            key={i}
            x={256 + i * 30}
            y={232 - h}
            width="20"
            height={h}
            rx="4"
            className="s-barre"
            style={{ animationDelay: 0.12 * i + "s" }}
          />
        ))}
        <line x1="248" y1="232" x2="440" y2="232" stroke="#34465b" />
      </g>

      <g className="plan plan-b">
        <rect x="-20" y="318" width="520" height="46" className="s-route" />
        <line
          x1="-20"
          y1="341"
          x2="500"
          y2="341"
          className="s-route-pointille"
        />

        <g className="s-camion">
          <g className="s-rebond">
            {[0, 0.6, 1.2].map((d) => (
              <circle
                key={d}
                cx="-4"
                cy="304"
                r="5"
                className="s-fumee"
                style={{ animationDelay: d + "s" }}
              />
            ))}
            <polygon
              points="110,303 200,290 200,324 110,319"
              fill="url(#faisceau-dc)"
              className="s-phare"
            />
            <rect
              x="0"
              y="276"
              width="80"
              height="42"
              rx="6"
              className="s-accent"
            />
            <rect
              x="8"
              y="284"
              width="46"
              height="16"
              rx="3"
              fill="#0e1b2b"
              opacity="0.85"
            />
            <rect
              x="80"
              y="292"
              width="30"
              height="26"
              rx="5"
              fill="#fff"
              opacity="0.92"
            />
            <rect
              x="86"
              y="297"
              width="18"
              height="10"
              rx="2"
              fill="#0e1b2b"
              opacity="0.8"
            />
            <path d="M0,276 h80 v-6 h-80 z" fill="#fff" opacity="0.9" />
          </g>
          {[22, 92].map((cx) => (
            <g key={cx}>
              <circle
                cx={cx}
                cy="320"
                r="9"
                fill="#0e1b2b"
                stroke="#fff"
                strokeWidth="2.5"
              />
              <g className="s-roue">
                <circle cx={cx} cy="320" r="6" fill="none" />
                <line
                  x1={cx - 6}
                  y1="320"
                  x2={cx + 6}
                  y2="320"
                  stroke="#fff"
                  strokeWidth="1.5"
                />
                <line
                  x1={cx}
                  y1="314"
                  x2={cx}
                  y2="326"
                  stroke="#fff"
                  strokeWidth="1.5"
                />
              </g>
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
}

// Vitafit : panneau d'administration, un curseur active les abonnements un par un
function SceneVitafit() {
  const lignes = [0, 1, 2, 3];
  return (
    <svg
      viewBox="0 0 480 400"
      className="scene"
      role="img"
      aria-label="Panneau d'administration avec une liste d'utilisateurs : un curseur active leurs accès abonnés"
    >
      <g className="plan plan-fond">
        <circle cx="70" cy="360" r="46" className="s-orbite" />
        <circle cx="440" cy="40" r="60" className="s-orbite s-orbite-2" />
      </g>

      <g className="plan plan-a">
        <g className="s-entre">
          <rect
            x="40"
            y="40"
            width="400"
            height="320"
            rx="14"
            className="s-panneau"
          />
        </g>
        <text x="64" y="76" className="s-titre">
          Administration
        </text>
        <rect
          x="338"
          y="58"
          width="78"
          height="26"
          rx="13"
          className="s-accent"
          opacity="0.9"
        />
        <text x="377" y="75" textAnchor="middle" className="s-chip-fixe">
          Utilisateurs
        </text>
        <line x1="64" y1="98" x2="416" y2="98" stroke="#26384d" />

        {lignes.map((i) => {
          const y = 116 + i * 58;
          const clic = i * 1.2 + 0.9 + "s";
          return (
            <g key={i}>
              <circle cx="78" cy={y + 18} r="14" className="s-ui" />
              <rect
                x="102"
                y={y + 8}
                width={110 - i * 10}
                height="9"
                rx="4.5"
                className="s-ui"
              />
              <rect
                x="102"
                y={y + 24}
                width="64"
                height="6"
                rx="3"
                fill="#1d2d41"
              />
              <text x="266" y={y + 23} className="s-texte">
                Accès abonné
              </text>
              <rect
                x="358"
                y={y + 5}
                width="48"
                height="26"
                rx="13"
                className="s-piste-t"
                style={{ animationDelay: i * 1.2 + "s" }}
              />
              <circle
                cx="371"
                cy={y + 18}
                r="10"
                className="s-bouton"
                style={{ animationDelay: i * 1.2 + "s" }}
              />
              <circle
                cx="382"
                cy={y + 18}
                r="16"
                className="s-clic"
                style={{ animationDelay: clic }}
              />
              <line x1="64" y1={y + 44} x2="416" y2={y + 44} stroke="#1d2d41" />
            </g>
          );
        })}

        <g className="s-curseur">
          <path
            d="M0,0 L0,16 L4.5,12 L8,20 L11,18.5 L7.5,11 L13,11 Z"
            fill="#fff"
            stroke="#0e1b2b"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}

const scenes = {
  optique: SceneOptique,
  ecodeli: SceneEcoDeli,
  drivncook: SceneDrivnCook,
  vitafit: SceneVitafit,
};

// ---------- Détail d'un projet ----------

// Le nom du projet monte lettre par lettre
function Titre({ texte }) {
  const mots = texte.split(" ");
  let n = 0;
  return (
    <h3 className="detail-nom" aria-label={texte}>
      {mots.map((mot, m) => (
        <span className="mot" key={m} aria-hidden="true">
          {[...mot].map((l) => (
            <span className="lettre" key={n} style={{ "--i": n++ }}>
              {l}
            </span>
          ))}
          {m < mots.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </h3>
  );
}

function Detail({ p }) {
  const git = LIENS_GIT[p.id];
  return (
    <div className="detail">
      <div className="detail-puces">
        <span className="puce">{p.type}</span>
        {p.faits.map((f) => (
          <span className="puce puce-clair" key={f}>
            {f}
          </span>
        ))}
      </div>
      <Titre texte={p.nom} />
      <p className="detail-accroche">{p.accroche}</p>
      {p.role && <p className="detail-role">{p.role}</p>}

      <ul className="detail-points">
        {p.points.map(([titre, texte], i) => (
          <li key={titre} style={{ animationDelay: 0.25 + i * 0.09 + "s" }}>
            <strong>{titre}</strong>
            <span>{texte}</span>
          </li>
        ))}
      </ul>

      <p className="detail-resultat">
        <strong>{p.resultat[0]}.</strong> {p.resultat[1]}
      </p>

      <ul className="detail-techs">
        {p.techs.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      {git && (
        <div className="detail-actions">
          <a
            className="btn btn-clair"
            href={git}
            target="_blank"
            rel="noreferrer"
          >
            Voir mon projet
          </a>
        </div>
      )}
    </div>
  );
}

function Scene({ id, auScroll }) {
  const ref = useRef(null);
  const [vu, setVu] = useState(!auScroll);
  const S = scenes[id];

  // Sur mobile, l'animation démarre quand la scène arrive à l'écran
  useEffect(() => {
    if (!auScroll) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVu(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [auScroll]);

  // La scène s'incline légèrement vers le pointeur
  const bouge = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", (x - 0.5) * 2);
    el.style.setProperty("--ry", (y - 0.5) * 2);
    el.style.setProperty("--sx", x * 100 + "%");
    el.style.setProperty("--sy", y * 100 + "%");
  };
  const quitte = () => {
    ref.current.style.setProperty("--rx", 0);
    ref.current.style.setProperty("--ry", 0);
  };

  return (
    <div
      ref={ref}
      className={
        "scene-cadre" + (auScroll ? " attend" : "") + (vu ? " vu" : "")
      }
      onPointerMove={bouge}
      onPointerLeave={quitte}
    >
      <S />
    </div>
  );
}

// ---------- Aller à un projet (utilisé aussi par le hero) ----------

function allerAuProjet(i) {
  const piste = document.getElementById("projets-piste");
  if (!piste) {
    document.getElementById("projets")?.scrollIntoView();
    return;
  }
  const stage = piste.querySelector(".stage");
  const debut = piste.getBoundingClientRect().top + window.scrollY - NAV;
  const distance = piste.offsetHeight - stage.offsetHeight;
  window.scrollTo({
    top: debut + ((i + 0.5) / projets.length) * distance,
    behavior: "smooth",
  });
}

function useMediaQuery(requete) {
  const [ok, setOk] = useState(() => window.matchMedia(requete).matches);
  useEffect(() => {
    const m = window.matchMedia(requete);
    const maj = () => setOk(m.matches);
    m.addEventListener("change", maj);
    return () => m.removeEventListener("change", maj);
  }, [requete]);
  return ok;
}

// ---------- Section ----------

function Projets() {
  const piste = useRef(null);
  const [index, setIndex] = useState(0);
  const petit = useMediaQuery("(max-width: 860px)");

  // Le projet affiché dépend du scroll : la scène reste épinglée à l'écran
  useEffect(() => {
    if (petit) return;
    let attente = false;

    const maj = () => {
      attente = false;
      const el = piste.current;
      if (!el) return;
      const stage = el.querySelector(".stage");
      const distance = el.offsetHeight - stage.offsetHeight;
      const p = Math.min(
        1,
        Math.max(0, (NAV - el.getBoundingClientRect().top) / distance),
      );
      const x = Math.min(projets.length - 0.001, p * projets.length);
      el.style.setProperty("--local", x - Math.floor(x));
      setIndex(Math.floor(x));
    };
    const onScroll = () => {
      if (!attente) {
        attente = true;
        requestAnimationFrame(maj);
      }
    };

    maj();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [petit]);

  const projet = projets[index];

  return (
    <section id="projets" className="projets-section">
      <div className="projets-entete">
        <h2>Projets</h2>
        <p>Quatre projets concrets : faites défiler pour les parcourir.</p>
      </div>

      {petit ? (
        <div className="empiles">
          {projets.map((p) => (
            <article key={p.id} className="carte" style={{ "--c": p.couleur }}>
              <Scene id={p.id} auScroll />
              <Detail p={p} />
            </article>
          ))}
        </div>
      ) : (
        <div
          className="piste"
          id="projets-piste"
          ref={piste}
          style={{ "--n": projets.length, "--c": projet.couleur }}
        >
          <div className="aurore" aria-hidden="true">
            <i className="b1" />
            <i className="b2" />
          </div>
          <div className="stage">
            <span
              className="gros-num"
              key={"num-" + projet.id}
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div
              className="onglets"
              role="tablist"
              aria-label="Choisir un projet"
            >
              {projets.map((p, i) => (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={i === index}
                  className={
                    "onglet" +
                    (i === index ? " actif" : i < index ? " passe" : "")
                  }
                  onClick={() => allerAuProjet(i)}
                  style={{ "--c": p.couleur }}
                >
                  <span className="onglet-barre">
                    <i />
                  </span>
                  <span className="onglet-nom">{p.nom}</span>
                  <span className="onglet-type">{p.type}</span>
                </button>
              ))}
            </div>

            <div className="stage-corps" key={projet.id}>
              <Detail p={projet} />
              <Scene id={projet.id} />
            </div>
          </div>
        </div>
      )}

      <div className="projets-cta">
        <p>Un projet à discuter, une alternance à pourvoir ?</p>
        <a className="btn btn-clair" href="#contact">
          Me contacter
        </a>
        <a
          className="btn btn-contour"
          href="https://github.com/ilha92"
          target="_blank"
          rel="noreferrer"
        >
          Tout mon code sur GitHub
        </a>
      </div>
    </section>
  );
}

// Full Stack

const couches = [
  {
    id: "front",
    nom: "Frontend",
    texte: "Des interfaces claires, accessibles et responsives.",
    techs: [
      "React.js",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML / CSS",
      "SCSS",
    ],
  },
  {
    id: "back",
    nom: "Backend",
    texte: "Les API, l'authentification et la logique métier.",
    techs: ["Node.js", "Laravel", "PHP", "Python", "API REST"],
  },
  {
    id: "data",
    nom: "Données et déploiement",
    texte: "Le stockage, les conteneurs et la mise en production.",
    techs: ["PostgreSQL", "MongoDB", "SQL", "Docker", "Linux", "AWS"],
  },
];

const parcours = [
  {
    titre: "Développeur web freelance",
    lieu: "Sites pour des professionnels",
    date: "Mai 2026 – aujourd'hui",
    points: [
      "Création et refonte de sites responsives, de la maquette à la mise en production.",
      "Maquettes et démonstrations personnalisées pour chaque client.",
      "Accompagnement sur le SEO et la visibilité en ligne.",
      "Prospection (téléphone, e-mail, rendez-vous) et développement d'un portefeuille clients.",
    ],
  },
  {
    titre: "Développeur Full Stack, EcoDeli",
    lieu: "Plateforme de livraison collaborative · projet personnel",
    date: "Juil. – Déc. 2025",
    points: [
      "Refonte et développement du frontend et du backend avec React.js, Node.js et MongoDB.",
      "Authentification et gestion des profils utilisateurs.",
      "Travail sur l'ergonomie, l'accessibilité et l'évolutivité de l'application.",
    ],
  },
  {
    titre: "Développeur Full Stack, DNPJ / D@TA-I",
    lieu: "Ministère de l'Intérieur · Beauvau",
    date: "Mars – Juil. 2025",
    points: [
      "Tableaux de bord développés et personnalisés sous Apache Superset.",
      "Interfaces adaptées en Python, HTML et CSS selon les besoins métier.",
      "Préparation et mise en forme de données pour leur exploitation et leur visualisation.",
      "Travail en équipe, solutions ajustées aux retours des utilisateurs.",
    ],
  },
];

const veille = [
  {
    nom: "Laravel",
    texte: "Formation en cours et projets backend pour maîtriser le framework.",
  },
  {
    nom: "React.js",
    texte: "Approfondissement continu pour construire des interfaces modernes.",
  },
];

const competences = [
  [
    "Frontend",
    "React.js, Vue.js, JavaScript, TypeScript, HTML, CSS / SCSS, responsive design",
  ],
  ["Backend", "Node.js, Laravel, PHP, Python, API REST, authentification"],
  ["Bases de données", "SQL, PostgreSQL, MongoDB"],
  ["DevOps et outils", "Docker, Linux, AWS, Git / GitHub"],
  ["Data", "Apache Superset, préparation et visualisation de données"],
  ["UX / UI", "Figma, Photoshop"],
  ["Autres", "Kotlin (mobile), travail en équipe, prospection commerciale"],
];

const formation = [
  [
    "Master 1 Informatique",
    "ESGI · spécialité Ingénierie Web et Big data",
    "Janv. 2027",
  ],
  [
    "Bachelor Informatique",
    "ESGI · spécialité Ingénierie Web, fin de 3e année",
    "Depuis 2024",
  ],
  ["Développeur Web et Web Mobile Full Stack", "Doranco", "2022 – 2023"],
];

const liens = [
  ["projets", "Projets"],
  ["parcours", "Parcours"],
  ["competences", "Compétences"],
  ["contact", "Contact"],
];

// ---------- Hero : la pile full stack ----------

// Une couche = une dalle isométrique dessinée en SVG (dessus + 2 côtés)
function Dalle({ y, couleurs, actif, delai, onClick }) {
  const haut = `210,${y} 360,${y + 75} 210,${y + 150} 60,${y + 75}`;
  const gauche = `60,${y + 75} 210,${y + 150} 210,${y + 178} 60,${y + 103}`;
  const droite = `210,${y + 150} 360,${y + 75} 360,${y + 103} 210,${y + 178}`;
  return (
    <g className="dalle-pos" style={{ animationDelay: delai + "s" }}>
      <g className={"dalle" + (actif ? " actif" : "")} onClick={onClick}>
        <polygon points={gauche} fill={couleurs[1]} />
        <polygon points={droite} fill={couleurs[2]} />
        <polygon points={haut} fill={couleurs[0]} className="dalle-haut" />
      </g>
    </g>
  );
}

function Pile() {
  const [actif, setActif] = useState("front");
  const couche = couches.find((c) => c.id === actif);

  const style = {
    front: ["#8fb8e8", "#6f9ad0", "#7da7dc"],
    back: ["#1f4e79", "#163b5c", "#1a4468"],
    data: ["#0e1b2b", "#07101a", "#0a1623"],
  };
  // ordre de dessin : du bas vers le haut
  const positions = { data: 262, back: 152, front: 42 };

  return (
    <div className="pile">
      <svg viewBox="0 0 420 470" className="pile-svg" aria-hidden="true">
        {["data", "back", "front"].map((id, i) => (
          <Dalle
            key={id}
            y={positions[id]}
            couleurs={style[id]}
            actif={actif === id}
            delai={0.3 + i * 0.35}
            onClick={() => setActif(id)}
          />
        ))}
      </svg>

      <div className="pile-legende">
        {couches.map((c) => (
          <button
            key={c.id}
            className={"legende-btn" + (actif === c.id ? " actif" : "")}
            onClick={() => setActif(c.id)}
            onMouseEnter={() => setActif(c.id)}
            aria-pressed={actif === c.id}
          >
            {c.nom}
          </button>
        ))}
      </div>

      <div className="pile-detail" key={actif} aria-live="polite">
        <p>{couche.texte}</p>
        <ul>
          {couche.techs.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ---------- Parcours : timeline qui se dessine au scroll ----------

function Parcours() {
  const [ouvert, setOuvert] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const maj = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = (window.innerHeight * 0.65 - r.top) / r.height;
      el.style.setProperty("--p", Math.min(1, Math.max(0, p)));
    };
    maj();
    window.addEventListener("scroll", maj, { passive: true });
    window.addEventListener("resize", maj);
    return () => {
      window.removeEventListener("scroll", maj);
      window.removeEventListener("resize", maj);
    };
  }, []);

  return (
    <ol className="timeline" ref={ref}>
      {parcours.map((p, i) => (
        <li key={p.titre} className={"etape" + (ouvert === i ? " ouvert" : "")}>
          <button
            className="etape-tete"
            onClick={() => setOuvert(ouvert === i ? -1 : i)}
            aria-expanded={ouvert === i}
          >
            <span className="etape-date">{p.date}</span>
            <span className="etape-titre">{p.titre}</span>
            <span className="etape-lieu">{p.lieu}</span>
            <span className="etape-signe" aria-hidden="true" />
          </button>
          <div className="etape-corps">
            <ul>
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

// ---------- Contact ----------

function Contact() {
  const [copie, setCopie] = useState(false);

  const copier = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch (e) {
      const t = document.createElement("textarea");
      t.value = EMAIL;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
    }
    setCopie(true);
    setTimeout(() => setCopie(false), 2200);
  };

  return (
    <div className="contact-actions">
      <a className="btn btn-plein" href={"mailto:" + EMAIL}>
        Envoyer un mail
      </a>
      <button className="btn btn-trait" onClick={copier}>
        {copie ? "Adresse copiée" : "Copier l'adresse"}
      </button>
      <a
        className="btn btn-trait"
        href="https://github.com/ilha92"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      <span className="sr-only" aria-live="polite">
        {copie ? "Adresse e-mail copiée" : ""}
      </span>
    </div>
  );
}

// ---------- Page ----------

export default function App() {
  const [section, setSection] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    liens.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <header className="nav">
        <a href="#haut" className="nav-nom">
          Ilias Hamel
        </a>
        <nav aria-label="Navigation principale">
          {liens.map(([id, label]) => (
            <a
              key={id}
              href={"#" + id}
              className={section === id ? "actif" : ""}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="haut">
        <section className="hero">
          <div className="hero-texte">
            <h1>
              Ilias
              <br />
              Hamel
            </h1>
            <p className="hero-phrase">
              Je construis des applications web, du frontend jusqu'à la base de
              données.
            </p>
            <p className="hero-sous">
              Développeur full stack avec React.js, Node.js et Laravel. Mon
              objectif : devenir un développeur full stack complet, capable de
              concevoir, développer et mettre en production une application de
              bout en bout. En ce moment, je creuse Laravel et React.js.
            </p>
            <div className="hero-actions">
              <a className="btn btn-plein" href="#projets">
                Voir mes projets
              </a>
              <a className="btn btn-trait" href="CV_Ilias_Hamel.pdf" download>
                Télécharger le CV
              </a>
            </div>
            <p className="hero-projets">
              Mes projets :
              {listeProjets.map((p) => (
                <button
                  key={p.id}
                  onClick={() => allerAuProjet(listeProjets.indexOf(p))}
                >
                  {p.nom}
                </button>
              ))}
            </p>
          </div>
          <Pile />
        </section>

        <Projets />

        <section id="parcours" className="bloc">
          <h2>Parcours</h2>
          <Parcours />
        </section>

        <section id="competences" className="bloc">
          <h2>Compétences</h2>
          <div className="veille-bande">
            <h3>Ma veille en ce moment</h3>
            {veille.map((v) => (
              <div key={v.nom} className="veille-item">
                <strong>{v.nom}</strong>
                <p>{v.texte}</p>
              </div>
            ))}
          </div>
          <dl className="skills">
            {competences.map(([nom, liste]) => (
              <div key={nom} className="skills-ligne">
                <dt>{nom}</dt>
                <dd>{liste}</dd>
              </div>
            ))}
          </dl>

          <h3 className="sous-titre">Formation</h3>
          <ul className="formation">
            {formation.map(([nom, ecole, date]) => (
              <li key={nom}>
                <div>
                  <strong>{nom}</strong>
                  <span>{ecole}</span>
                </div>
                <span className="date">{date}</span>
              </li>
            ))}
          </ul>
          <p className="langues">
            Français : natif · Anglais : intermédiaire (objectif B2) · Espagnol
            : débutant
          </p>
        </section>

        <section id="contact" className="bloc contact">
          <h2>Contact</h2>
          <p className="contact-texte">
            Un projet, une offre d'alternance, une question ? Écrivez-moi, je
            réponds vite.
          </p>
          <Contact />
          <p className="contact-infos">
            Paris, Île-de-France · 07 68 37 75 22 · {EMAIL}
          </p>
        </section>
      </main>

      <footer className="pied">© 2026 Ilias Hamel</footer>
    </>
  );
}
