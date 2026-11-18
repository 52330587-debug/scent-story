import { useState, useEffect } from "react";
import { NavLink } from "react-router";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "Escape") {
                closeMenu();
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <>
            {/* Three Dashes Button */}
            <button
                type="button"
                className="hamburger-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="side-menu"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            {/* Dark background when menu is open */}
            {menuOpen && (
                <button
                    type="button"
                    className="sidebar-overlay"
                    onClick={closeMenu}
                    aria-label="Close navigation menu"
                />
            )}

            {/* Sidebar */}
            <aside
                id="side-menu"
                className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}
                aria-hidden={!menuOpen}
                inert={!menuOpen}
            >
                <h2 className="sidebar-logo">
                    SCENT <span>STORY</span>
                </h2>

                <p className="sidebar-subtitle">
                    Find Your Signature Scent
                </p>

                <nav className="sidebar-links">

                    <NavLink to="/" end onClick={closeMenu}>
                        Home
                    </NavLink>

                    <NavLink to="/women" onClick={closeMenu}>
                        Women's Perfumes
                    </NavLink>

                    <NavLink to="/men" onClick={closeMenu}>
                        Men's Perfumes
                    </NavLink>

                    <NavLink to="/suggest" onClick={closeMenu}>
                        Suggest a Perfume
                    </NavLink>

                    <NavLink to="/about" onClick={closeMenu}>
                        About Us
                    </NavLink>

                    <NavLink to="/contact" onClick={closeMenu}>
                        Contact
                    </NavLink>

                </nav>

                <p className="sidebar-footer">
                    Every Scent Tells a Story ♡
                </p>

            </aside>
        </>
    );
}

export default Navbar;
