import { MdOutlineMiscellaneousServices } from 'react-icons/md'

import './Heading.css'

const Heading = ({icon, title }) => {
  return (
    <div className="container heading__container">
          <div className="heading__icon">{ icon }</div>

      <div className="heading__title">
        <h1 className="section__heading">{title}</h1>
      </div>
    </div>
  );
};

export default Heading