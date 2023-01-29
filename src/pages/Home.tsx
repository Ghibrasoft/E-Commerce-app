
export function Home() {

    return (
        <>
            <h1>Home</h1>
            <h5>Shop online</h5>

            <div id="carouselExampleIndicators" className="carousel slide">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/bagrationi-wine.jpg" className="d-block w-100" alt="wine" style={{ objectFit: 'cover', height: '550px' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/books.jpg" className="d-block w-100" alt="books" style={{ objectFit: 'cover', height: '550px' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/pizza.jpg" className="d-block w-100" alt="pizza" style={{ objectFit: 'cover', height: '550px' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/car.jpg" className="d-block w-100" alt="car" style={{ objectFit: 'cover', height: '550px' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/scooter.jpg" className="d-block w-100" alt="scooter" style={{ objectFit: 'cover', height: '550px' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/smartphones.jpg" className="d-block w-100" alt="smartphones" style={{ objectFit: 'cover', height: '550px' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/laptop.jpg" className="d-block w-100" alt="laptop" style={{ objectFit: 'cover', height: '550px' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/soprano-titanium.png" className="d-block w-100" alt="soprano-titanium" style={{ objectFit: 'cover', height: '550px' }} />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        </>
    )
}

