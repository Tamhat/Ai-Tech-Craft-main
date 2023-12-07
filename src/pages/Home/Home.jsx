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
const title = "SEO Services That Put You on Top";
const des =
  "Approximately 94% of all organic search traffic is handled by Google, and 80% of online users use search engines to locate products, services, and information. Therefore, the success of online businesses depends heavily on an effective SEO strategy. In the last 12 years, our SEO agency has generated more than $50M in revenue for our clients through different search engine optimization services. Not to mention, we are the first digital marketing company to offer a guarantee on our work. Get in touch with us today to learn more.";

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
  "Your online presence is defined by your website. It introduces your brand to the world, exhibits your unique benefits, and inspires visitors to take action. That’s where Comrade comes in. We began as a small website design company and over the last decade, have grown to offer a full range of marketing services, all designed to attract traffic and convert leads into paying customers.";

const webMainImage =
  "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/Mask-group-1.jpg.webp";

const webTopImage =
  "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/pencil.png.webp";

const webBottomImage =
  "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/code_editor.png.webp";
