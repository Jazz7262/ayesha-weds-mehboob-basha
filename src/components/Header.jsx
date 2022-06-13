import React from "react";
import "../styles/Header.css";

function Header() {
    return (
        <section id="header">
            <img
                src="../assets/images/bismillah.png"
                alt="bismillah"
                className="poster"
            />

            <h3>
                Begin With The Name Of Allah, The Most Benificient And The Most
                Merciful
            </h3>

            <h4 className="ayat">
                And among his signs is that, He created for you males from among
                yourselves, that you may dwell tranquality with them, and He has
                put love and mercy between your (herts), verily in that are
                signs for those who reflect. (Ar-Room, 30-21)
            </h4>

            <h4>
                Under the spirutual patronage of:
                <br />
                Hazrath Sayyid Khwaja Gareeb Nawaz Moinuddin Chishti
                Rahamatullaahi Alaih.
            </h4>
        </section>
    );
}

export default Header;
