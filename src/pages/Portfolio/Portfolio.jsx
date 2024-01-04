import HeroAbout from "../../component/AboutComponents/HeroAbout/HeroAbout";
import OurMission from "../../component/AboutComponents/OurMission/OurMission";
import MarketingTeam from "../../component/AboutComponents/MarketingTeam/MarketingTeam";
import Portfoliosec from "../../component/PortfolioComponents/Portfolio";
import JoinOurTeam from "../../component/AboutComponents/JoinOurTeam/JoinOurTeam";
import LiveRules from "../../component/AboutComponents/LiveRules/LiveRules";
import RequestSubmit from "../../shared/RequestSubmit/RequestSubmit";



const Portfolio = () => {
  return (
    <div>
      {/* <h1>Portfolio</h1> */}
      {/* <HeroAbout /> */}
      {/* <OurMission /> */}
      {/* <MarketingTeam /> */}
      <Portfoliosec />
      <JoinOurTeam />
      {/* <LiveRules /> */}
      <RequestSubmit />
    </div>
  )
}

export default Portfolio