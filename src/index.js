import "./index.html";
import "./index.scss";
import { func } from "./modules/calc";

import header from "./partials/header.html";
import main from "./partials/main.html";
import footer from "./partials/footer.html";
document.querySelector("header").innerHTML = header;
document.querySelector("main").innerHTML = main;
document.querySelector("footer").innerHTML = footer;

func();
