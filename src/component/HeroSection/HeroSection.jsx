import { heroCardData } from "../../data/data";
import AILogo from "../../assets/heroImage1.jpg";
import Circle from "../../assets/circle.png";
import { GoTrophy } from "react-icons/go";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero__bg">
      <div className="container hero__container">
        {/* =======hero left section========== */}
        <div className="hero__left">
          <h1 className="hero__heading">
            <h1>AI Solutions  for <br/> the Future</h1>
            </h1>
          <p className="hero__text">
            AI Tech Craft is a leading provider of AI solutions for the future. 
            We are a team of highly skilled and experienced professionals who 
            have been working in the field of artificial intelligence for over
            10 years. Our goal is to help businesses leverage the power of AI
            </p>
          <div className="hero__btn">
            <button className="btn">Get Started</button>
            <button>Learn More</button>
          </div>

          <div className="hero__card-container">
            <h5>Our Services: </h5>
            <div className="hero__card">
              {heroCardData &&
                heroCardData?.map(({ id, icon, firstTitle, lastTitle }) => {
                  return (
                    <div className="card" key={id}>
                      <span>{icon}</span>
                      <div className="card__text">
                        <h4>{firstTitle}</h4>
                        <h4>{lastTitle}</h4>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* =========hero right section========= */}
        <div className="hero__right">
          <div className="bg__img">
            <img src={AILogo} alt="Circle" />
          </div>
          <div className="circle__bg"></div>
          <div className="circle__bg2"></div>
          <div className="prize">
            <div className="icon">
              <GoTrophy />
            </div>
            <div className="content">
              <h1>35k+</h1>
              <p>Case Solved</p>
              <p>with Satisfaction</p>
            </div>
          </div>
          
          <div className="round__circle">
            <div className="circle__bg3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
