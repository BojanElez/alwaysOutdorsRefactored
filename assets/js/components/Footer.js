class Footer {
    render() {
        return `
        <footer class="footer">
            <div class="footer__container">
                <div class="footer__container__top">
                    <nav class="nav-bottom">
                        <nav class=nav-bottom">
                            <ul class="nav-bottom__menu">
                                <li class="nav-bottom__menu item"><a href="#">Destinations</a></li>
                                <li class="nav-bottom__menu item"><a href="#">Travel Styles</a></li>
                                <li class="nav-bottom__menu item"><a href="#">Trave Deals</a></li>
                                <li class="nav-bottom__menu item"><a href="#">Gear</a></li>
                            </ul>
                        </nav>
                    </nav>
                    <div class="icons">
                        <div class="icons__item">
                            <img src="./assets/icons/icon-twitter.svg" />
                        </div>
                        <div class="icons__item center">
                            <img src="./assets/icons/icon-instagram.svg" />
                        </div>
                        <div class="icons__item">
                            <img src="./assets/icons/icon-facebook.svg" />
                        </div>
                    </div>
                 </div>
                 <div class="footer__container__bottom">
                     <div class="conteiner">
                        <div class="items">
                            <div class="items__logo">
                                <a href="" class="logo">
                                    <img src="./assets/icons/icon-sun.svg" />
                                </a>
                                <p class="logo__text" >Always Outdors</p>
                            </div>
                            <div class="items__copyright">
                                © 2019, Always Outside
                            </div>
                        </div>
                     </div>
                 </div>
            </div>
        </footer> 
    `}
}
export default Footer;