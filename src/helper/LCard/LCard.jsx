import { IoMdClose } from "react-icons/io";

import { useState } from "react";
import "./LCard.css";

const LCard = (props) => {
  const { name, profile, title, description, linkedIn, twitter } = props;
  const [readBio, setReadBio] = useState(false);

  const handleBio = () => {
    setReadBio(true);
  };

  return (
    <div className="lcard__container">
      <div className="profile">
        <img src={profile} alt="profile" />
      </div>
      <h1 className="heading">{name}</h1>
      <p className="card__des">{title}</p>
      <button onClick={handleBio}>Read bio</button>

      {readBio && (
        <div className="read__bio">
          <div className="read__bio-bg">
            <div className="left__bio">
              <div className="profile">
                <img src={profile} alt="profile" />
              </div>
            </div>
            <div className="right__bio">
              <h1 className="heading">{name}</h1>
              <p className="card__des">{title}</p>
              <p className="card__des">{description}</p>
            </div>
            <div className="close__btn" onClick={() =>setReadBio(false)}>
              <IoMdClose />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LCard;
