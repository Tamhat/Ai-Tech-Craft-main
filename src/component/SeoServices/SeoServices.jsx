
import './SeoServices.css'

const SeoServices = ({main, top, bottom, title, des}) => {
  return (
    <section>
        <div className="container sServices__container">
            <div className="sServices_left">
                <img src={main} alt=""  className='main'/>

                <img src={top} alt="" className="top" />

                <img src={bottom} alt="" className="bottom" />
            </div>
            <div className="sServices_right">
                <h1 className="heading">{title}</h1>

                <p className="card__des">{des}</p>
            </div>
        </div>
    </section>
  )
}

export default SeoServices