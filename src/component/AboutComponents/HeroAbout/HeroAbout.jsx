import Logo from '../../../assets/heroImage1.jpg'

import './HeroAbout.css'

const HeroAbout = () => {
  return (
    <div className="heroAbout__bg">
        <div className="container heroAbout__container">
        <div className="heroAbout__left">
            <img src={Logo} alt="Logo" />
        </div>
        <div className="heroAbout__right">
            <h1 className="heading">
            Guiding sales teams on the proven path to success
            </h1>

            <div className="heroAbout__des">
                <p className="card__des">The People.ai enterprise revenue intelligence platform helps teams speed up complex enterprise sales cycles by engaging the right people in the right accounts.</p>
                <p className="card__des">We do it by helping teams clearly see who to engage within each account and exactly what to do to deliver the highest-yielding deals and blow out their numbers every single quarter.</p>
            </div>

            <a href="#" className='btn'>Get a Demo</a>
        </div>
    </div>
    </div>
  )
}

export default HeroAbout