import React from "react";
import "../styles/Couple.css";

function Couple() {
    return (
        <section id="couple">
            <h1 className="title-quote">Happy Couple Going To Be Married</h1>

            <div className="row">
                <div className="col-lg-5" data-aos="fade-up">
                    <div className="img-wrapper">
                        <img
                            className="couple-img"
                            src="../assets/images/groom.png"
                            alt="Groom_img"
                        />
                    </div>
                    <div className="info">
                        <h3>
                            A. Mehboob Basha{"  "}
                            <sub>B.com., B.P.Ed.</sub>
                        </h3>
                        <p>
                            S/O Janab A. Abdul Raheem Sahab (Late), <br />
                            Adoni.
                        </p>
                    </div>
                </div>
                <div
                    className="col-lg-2"
                    data-aos="zoom-out "
                    data-aos-delay="300"
                >
                    <img
                        className=" heart-mid"
                        src="../assets/images/heart.png"
                        alt="heart_img"
                    />
                </div>
                <div className="col-lg-5" data-aos="fade-up">
                    <div className="img-wrapper">
                        <img
                            className="couple-img"
                            src="../assets/images/bride.png"
                            alt="Bride_img"
                        />
                    </div>

                    <div className="info">
                        <h3>
                            Y. Ayesha Siddiqa{"  "}
                            <sub>Aalima</sub>
                        </h3>
                        <p>
                            Paternal Grand D/O Janab Yadgiri Abdullah Sahab
                            (Late),
                            <br />
                            Maternal Grand D/O Janab Gadde Abdul Hakeem Sahab
                            (Late).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Couple;
