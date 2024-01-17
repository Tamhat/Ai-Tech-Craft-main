import { useState } from "react";
import { faqData } from "../../data/data";
import FaqCard from "../FaqCard/FaqCard";

import "./Faq.css";

const Faq = ({data}) => {
  const [singleQuestion, setSingleQuestion] = useState(false);

  const faqToggle = (index) => {
    if (singleQuestion === index) {
      setSingleQuestion(null);
      return;
    }
    setSingleQuestion(index);
  };

  return (
    <section>
      <div className="container faq__container">
      <h1 className="heading"></h1>

        <div className="faq__content">
        {data &&
          data?.map((curElem, index) => {
            return (
              <FaqCard
                key={curElem.id}
                open={singleQuestion === index}
                {...curElem}
                toggle={() => faqToggle(index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
