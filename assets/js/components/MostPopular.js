class MostPopular {
    render() {
        return `
        <section class="most-popular">
                <div class="most-popular__container">
                    <header class="headline">
                        <h2>Most popular tours</h2>
                    </header>
                    <main class="card">
                        <div class="card__item">
                            <div class="headline">
                                <img src="./assets/images/img-sea.jpg" alt="airplane">
                            </div>
                            <div class="text-container">
                                <h3>The Sea explorer</h3>
                                <ul>
                                    <li>3 days tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Dificulty easy</li>
                                </ul>
                            </div>
                            <div class="text-container">
                                text
                                </div>
                        </div>
                        <div class="card__item color">
                            <div class="headline">
                                <img src="./assets/images/img-snow.jpg" alt="compass">
                            </div>
                            <div class="text-container">
                                <h3>The Snow adventurer</h3>
                                <ul>
                                    <li>5 days tours</li>
                                    <li>Up to 15 people</li>
                                    <li>3 tour guides</li>
                                    <li>Sleep in provided tents</li>
                                    <li>Dificulty: hard</li>
                                </ul>
                                </div>
                        </div>
                        <div class="card__item">
                            <div class="headline">
                                <img src="./assets/images/img-forest.jpg" alt="earth">
                            </div>
                            <div class="text-container">
                                <h3>The forest hiker</h3>
                                <ul>
                                    <li>7 days tours</li>
                                    <li>Up to 70 people</li>
                                    <li>6 tour guides</li>
                                    <li>Sleep in provided tents</li>
                                    <li>Dificulty medium</li>
                                </ul>
                                </div>
                        </div>
                    </main>
                    <footer class="btn-container">
                        <button class="btn btn-discover">Discover all tours</button>
                    </footer>
                </div>
            </section>
    `}
}
export default MostPopular;