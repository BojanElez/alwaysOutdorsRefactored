class Header{
    render() {
        return `
        <header class="header">
            <div class="header__container">
                <div class="header__container__logo">
                    <a href="" class="logo">
                        <img src="./assets/icons/icon-sun.svg" />
                        <p class="logo__text" >Always Outdors</p>
                    </a>
                </div>
                <div class="header__container__navigation">
                    <nav class="nav">
                        <ul class="nav__menu">
                            <li class="nav__menu item"><a href="#">Destinations</a></li>
                            <li class="nav__menu item"><a href="#">Travel Styles</a></li>
                            <li class="nav__menu item"><a href="#">Trave Deals</a></li>
                            <li class="nav__menu item"><a href="#">Gear</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="header__container__search">
                    <div class="icon"><img src="./assets/icons/icon-search.svg" class="img-search-icon"></div>
                    <input class="search-text" type="text" placeholder="search" id="input" />
                </div>
                </div>
        </header> 
        `
    } 
}

export default  Header;