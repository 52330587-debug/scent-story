
import { useState } from "react";
import { perfumes } from "../data/perfumes";
import PerfumeCard from "../components/PerfumeCard";

function Suggest() {
    const notes = [
        "Vanilla",
        "Rose",
        "Musk",
        "Amber",
        "Oud",
        "Woody",
        "Jasmine",
        "Citrus",
        "Fruity",
        "Caramel",
        "Spicy"
    ];

    const [selectedNotes, setSelectedNotes] = useState([]);
    const [gender, setGender] = useState("all");
    const [showResults, setShowResults] = useState(false);

    function selectNote(note) {
        if (selectedNotes.includes(note)) {
            setSelectedNotes(
                selectedNotes.filter((item) => item !== note)
            );
        } else {
            setSelectedNotes([...selectedNotes, note]);
        }

        setShowResults(false);
    }

    const recommendedPerfumes = perfumes
        .filter((perfume) => {
            return (
                perfume.available &&
                (gender === "all" || perfume.gender === gender)
            );
        })
        .map((perfume) => {
            const score = selectedNotes.filter((note) =>
                perfume.notes.includes(note)
            ).length;

            return {
                ...perfume,
                score: score
            };
        })
        .filter((perfume) => perfume.score > 0)
        .sort((a, b) => b.score - a.score);

    return (
        <main className="suggest-page">

            <h1>Find Your Signature Scent </h1>

            <p>
                Tell us your favorite fragrance notes,
                and we'll suggest perfumes from our collection.
            </p>

            <h3>Who is the perfume for?</h3>

            <select
                value={gender}
                onChange={(e) => {
                    setGender(e.target.value);
                    setShowResults(false);
                }}
            >
                <option value="all">All Perfumes</option>
                <option value="women">Women</option>
                <option value="men">Men</option>
            </select>

            <h3>Select Your Favorite Notes</h3>

            <div className="notes-container">

                {notes.map((note) => (
                    <button
                        type="button"
                        key={note}
                        aria-pressed={selectedNotes.includes(note)}
                        className={
                            selectedNotes.includes(note)
                                ? "note-btn selected"
                                : "note-btn"
                        }
                        onClick={() => selectNote(note)}
                    >
                        {note}
                    </button>
                ))}

            </div>

            <button
                className="main-btn suggest-btn"
                disabled={selectedNotes.length === 0}
                onClick={() => setShowResults(true)}
            >
                Find My Perfume
            </button>

            {showResults && (
                <section className="results">

                    <h2>Your Recommended Perfumes</h2>

                    {recommendedPerfumes.length > 0 ? (
                        <div className="perfume-container">

                            {recommendedPerfumes.map((perfume) => (
                                <div key={perfume.id}>

                                    <PerfumeCard perfume={perfume} />

                                    <p className="match-text">
                                        Matches {perfume.score} of{" "}
                                        {selectedNotes.length} selected notes
                                    </p>

                                </div>
                            ))}

                        </div>
                    ) : (
                        <p>
                            Sorry, no available perfumes match
                            your selected notes.
                        </p>
                    )}

                </section>
            )}

        </main>
    );
}

export default Suggest;
