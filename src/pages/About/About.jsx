import HeroAbout from "../../component/AboutComponents/HeroAbout/HeroAbout";
import OurMission from "../../component/AboutComponents/OurMission/OurMission";
import MarketingTeam from "../../component/AboutComponents/MarketingTeam/MarketingTeam";
import LeadershipTeam from "../../component/AboutComponents/LeadershipTeam/LeadershipTeam";
import JoinOurTeam from "../../component/AboutComponents/JoinOurTeam/JoinOurTeam";
import LiveRules from "../../component/AboutComponents/LiveRules/LiveRules";
import RequestSubmit from "../../shared/RequestSubmit/RequestSubmit";


const About = () => {
  return (
    <div className="about__page">
      <HeroAbout />
      <OurMission />
      <MarketingTeam />
      <LeadershipTeam />
      <JoinOurTeam />
      <LiveRules />
      <RequestSubmit />
    </div>
  )
}

export default About