import { Link } from "react-router";

function Home() {
    return (
        <main>

            <section className="hero">

                <p className="small-title">
                    WELCOME TO SCENT STORY
                </p>

                <h1>Every Scent Tells a Story</h1>

                <p className="hero-description">
                    Discover the perfect fragrance that
                    expresses your personality, your mood,
                    and your unique style.
                </p>

            </section>

            <section className="categories">

                <h2>Explore Our Collection</h2>

                <p>Choose your fragrance journey.</p>

                <div className="category-container">

                    <Link to="/women" className="category-card">

                        <h3>Women's Perfumes</h3>
                        <p>
                            Discover elegant and beautiful
                            fragrances for women.
                        </p>
                        <span>Shop Women →</span>
                    </Link>

                    <Link to="/men" className="category-card">

                        <h3>Men's Perfumes</h3>
                        <p>
                            Explore bold and sophisticated
                            fragrances for men.
                        </p>
                        <span>Shop Men →</span>
                    </Link>

                    <Link to="/suggest" className="category-card">

                        <h3>Suggest a Perfume</h3>
                        <p>
                            Select your favorite fragrance
                            notes and discover your match.
                        </p>
                        <span>Find My Perfume →</span>
                    </Link>

                </div>

            </section>

        </main>
    );
}

export default Home;
