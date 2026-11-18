import { useState } from "react";

function PerfumeCard({ perfume }) {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="perfume-card">

            <div className="perfume-photo-box">
                {!imageError ? (
                    <img
                        src={perfume.image}
                        alt={perfume.name}
                        className="perfume-photo"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <span className="photo-placeholder">🧴</span>
                )}
            </div>

            <h3>{perfume.name}</h3>

            <p className="perfume-notes">
                {perfume.notes.join(" • ")}
            </p>

            <h4>${perfume.price}</h4>

            {perfume.available ? (
                <span className="available">Available</span>
            ) : (
                <span className="sold-out">Out of Stock</span>
            )}

        </div>
    );
}

export default PerfumeCard;
