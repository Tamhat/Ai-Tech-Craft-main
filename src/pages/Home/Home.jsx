import HeroSection from "../../component/HeroSection/HeroSection";
import OurServices from "../../component/OurServices/OurServices";
import ValuableClient from "../../component/ValuableClient/ValuableClient";
import ReviewSlider from "../../component/ReviewSlider/ReviewSlider";
import BannerVideo from "../../component/BannerVideo/BannerVideo";
import OurPromise from "../../component/OurPromise/OurPromise";
import DigitalMarketing from "../../component/DigitalMarketing/DigitalMarketing";
import SeoServices from "../../component/SeoServices/SeoServices";
import PPCServices from "../../component/PPCServices/PPCServices";
import MarketingBenefit from "../../component/MarketingBenefit/MarketingBenefit";
import CSuccessSlider from "../../component/CSuccessSlider/CSuccessSlider";
import MarketingAudit from "../../component/MarketingAudit/MarketingAudit";
import MarketingAgency from "../../component/MarketingAgency/MarketingAgency";
import Faq from "../../shared/Faq/Faq";
import { faqData } from "../../data/data";
import RequestSubmit from "../../shared/RequestSubmit/RequestSubmit";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ValuableClient />
      {/* <ReviewSlider /> */}
      <BannerVideo />
      <OurPromise />
      <DigitalMarketing />
      <SeoServices
        main={main}
        top={top}
        bottom={bottom}
        title={title}
        des={des}
      />
      <PPCServices />
      <SeoServices
        main={webMainImage}
        top={webTopImage}
        bottom={webBottomImage}
        title={webTitle}
        des={webDescription}
      />
      <MarketingBenefit />
      <CSuccessSlider />
      <MarketingAudit />
      <MarketingAgency />
      <Faq data={faqData} />
      <RequestSubmit />

      {/* <OurServices /> */}
    </div>
  );
};

export default Home;

// ----------seo services===========
const title = "Ai SEO Services That Put You on Top";
const des =
  "Dominate search results with our AI SEO services, blending advanced technology and strategic optimization. Stay ahead of the competition with cutting-edge algorithms and machine learning for lasting success. Seamlessly integrate into the digital landscape, engaging your audience effortlessly. Welcome to a new era of digital prominence, where our AI SEO propels your brand to the top.";

const main =
  "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/shutterstock_1520228513-1.jpg.webp";
const top =
  "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/google_search.png.webp";
const bottom =
  "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/table_with_results.png.webp";

// -------------web design------------
const webTitle =
  "Empower your business with result-oriented Web Design Services";
const webDescription =
  "Crafting Your Digital Identity: Ai Tech Craft Shapes Your Online Presence, from Web Design to Result-Driven Marketing Solutions. Born as a web design pioneer, we've evolved into a comprehensive marketing partner, dedicated to attracting traffic and transforming leads into valued customers over the last decade.";

const webMainImage =
  "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/Mask-group-1.jpg.webp";

const webTopImage =
  "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/pencil.png.webp";

const webBottomImage =
  "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/code_editor.png.webp";
