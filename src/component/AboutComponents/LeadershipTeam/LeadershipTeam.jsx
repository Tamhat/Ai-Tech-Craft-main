import { useState } from 'react'
import { leaderShipData, boardMember } from '../../../data/data'
import LCard from '../../../helper/LCard/LCard'
import './LeadershipTeam.css'

const LeadershipTeam = () => {
    const [buttonActive, setButtonActive] = useState(false);

    const leadershipResult = leaderShipData?.map((curElem) => <LCard {...curElem} key={curElem.id} />);
    const BoardMemberResult = boardMember?.map((curElem) => <LCard {...curElem} key={curElem.id} />);


  return (
    <section>
      <div className="container leadershipteam__container">
        <h1 className="heading">Our Leadership Team</h1>

        <div className="LST__button">
          <button
            className={`LST__btn ${buttonActive ? "" : "active"}`}
            onClick={() => setButtonActive(false)}
          >
            Leadership
          </button>
          <button
            className={`LST__btn ${buttonActive ? "active" : ""}`}
            onClick={() => setButtonActive(true)}
          >
            Board Members
          </button>
        </div>

        <div className="tCard__data">
            {
                buttonActive ? BoardMemberResult : leadershipResult
            }
        </div>
      </div>
    </section>
  );
}

export default LeadershipTeam