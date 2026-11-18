import { useState } from "react";
import { perfumes } from "../data/perfumes";
import PerfumeCard from "../components/PerfumeCard";

function Collection({ gender }) {

    const [search, setSearch] = useState("");
    const [brand, setBrand] = useState("all");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    // Get brands automatically from the perfumes
    const brands = [
        ...new Set(
            perfumes
                .filter((p) => p.gender === gender)
                .map((p) => p.brand)
                .filter(Boolean)
        )
    ].sort();

    // Filter perfumes
    const filteredPerfumes = perfumes.filter((perfume) => {

        const matchesGender = perfume.gender === gender;

        const matchesSearch =
            perfume.name.toLowerCase().includes(
                search.toLowerCase()
            ) ||
            perfume.notes.some((note) =>
                note.toLowerCase().includes(
                    search.toLowerCase()
                )
            );

        const matchesBrand =
            brand === "all" || perfume.brand === brand;

        const matchesMinPrice =
            minPrice === "" || perfume.price >= Number(minPrice);

        const matchesMaxPrice =
            maxPrice === "" || perfume.price <= Number(maxPrice);

        return (
            matchesGender &&
            matchesSearch &&
            matchesBrand &&
            matchesMinPrice &&
            matchesMaxPrice
        );
    });

    // Reset filters
    function clearFilters() {
        setSearch("");
        setBrand("all");
        setMinPrice("");
        setMaxPrice("");
    }

    return (
        <main className="collection-page">

            <h1>
                {gender === "women"
                    ? "Women's Perfumes"
                    : "Men's Perfumes"}
            </h1>

            <p>
                Discover your favorite fragrance.
            </p>

            {/* FILTER SECTION */}

            <div className="filter-section">

                <h2>Find Your Perfume</h2>

                <div className="filter-container">

                    {/* Search by name or notes */}

                    <div className="filter-group">
                        <label>Search</label>

                        <input
                            type="text"
                            placeholder="Perfume name or note"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* Filter by brand */}

                    <div className="filter-group">
                        <label>Brand</label>

                        <select
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        >
                            <option value="all">All Brands</option>

                            {brands.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}

                        </select>
                    </div>

                    {/* Minimum price */}

                    <div className="filter-group">
                        <label>Min Price ($)</label>

                        <input
                            type="number"
                            min="0"
                            placeholder="Min"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                    </div>

                    {/* Maximum price */}

                    <div className="filter-group">
                        <label>Max Price ($)</label>

                        <input
                            type="number"
                            min="0"
                            placeholder="Max"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                    </div>

                </div>

                <button
                    className="clear-btn"
                    onClick={clearFilters}
                >
                    Clear Filters
                </button>

            </div>

            {/* RESULTS */}

            <p className="results-count">
                {filteredPerfumes.length} perfumes found
            </p>

            <div className="perfume-container">

                {filteredPerfumes.map((perfume) => (
                    <PerfumeCard
                        key={perfume.id}
                        perfume={perfume}
                    />
                ))}

            </div>

            {filteredPerfumes.length === 0 && (
                <p>No perfumes match your filters.</p>
            )}

        </main>
    );
}

export default Collection;
