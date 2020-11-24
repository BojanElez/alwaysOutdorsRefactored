import Header from './components/Header.js';
import Adventure from './components/Adventure.js';
import Info from './components/Info.js';
import MostPopular from './components/MostPopular.js';
import Footer from './components/Footer.js';

const HeaderClass = new Header();
const InfoClass = new Info();
const AdventureClass = new Adventure();
const MostPopularClass = new MostPopular();
const FooterClass = new Footer();

const root = document.getElementById("root");
root.innerHTML  += HeaderClass.render();
const main = document.createElement("main");
main.setAttribute('id',"main");
main.setAttribute('class',"main");
root.appendChild(main);
main.innerHTML += InfoClass.render();
main.innerHTML += AdventureClass.render();
main.innerHTML += MostPopularClass.render();
root.innerHTML += FooterClass.render();

