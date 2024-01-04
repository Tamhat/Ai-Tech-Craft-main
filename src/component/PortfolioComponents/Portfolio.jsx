import { useState } from 'react'
import { portfolioData} from '../../data/data'
import { IoMdClose } from "react-icons/io";
import "../../helper/LCard/LCard.css";

const Portfoliosec = () => {
    const [buttonActive, setButtonActive] = useState(false);
    // const { name, profile, title, description, linkedIn, twitter } = props;
    const [readBio, setReadBio] = useState(false);

    const handleBio = () => {
        setReadBio(true);
    };


    return (
        <section>
            <div className="container leadershipteam__container">
                <h1 className="heading">OUR PORTFOLIO</h1>

                <div className="LST__button">
                    <button
                        className={`LST__btn ${buttonActive ? "" : "active"}`}
                        onClick={() => setButtonActive(false)}
                    >
                        Top Projects
                    </button>
                </div>

                <div className="tCard__data">
                    {/* <div className="leadership"> */}
                    {portfolioData?.map(curElem => (
                        <div className="lcard__container" key={curElem.id}>
                            <div className="profile">
                                <img src={curElem.profile} alt="profile" />
                            </div>
                            <h1 className="heading">{curElem.name}</h1>
                            <p className="card__des">{curElem.title}</p>
                            <a href={curElem.link} className="link">
                                <button className="read_bio">
                                    Visit Project
                                </button>
                            </a>

                            {readBio && (
                                <div className="read__bio">
                                    <div className="read__bio-bg">
                                        <div className="left__bio">
                                            <div className="profile">
                                                <img src={curElem.profile} alt="profile" />
                                            </div>
                                        </div>
                                        <div className="right__bio">
                                            <h1 className="heading">{curElem.name}</h1>
                                            <p className="card__des">{curElem.title}</p>
                                            <p className="card__des">{curElem.description}</p>
                                        </div>
                                        <div className="close__btn" onClick={() => setReadBio(false)}>
                                            <IoMdClose />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    {/* </div> */}
                </div>
            </div>

        </section>
    )
}

export default Portfoliosec