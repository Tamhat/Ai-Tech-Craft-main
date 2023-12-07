
import './ClientSuccessCard.css'

const ClientSuccessCard = ({img, rate, category, categoryTitle}) => {
  return (
    <div className="cS__card">
        <div className="cs__top">
            <img src={img} alt="" />
            <div className="rate__container">
                <div className="rate__box">
                    <h1 className="heading">{rate.percent1}</h1>
                    <p className="card__title">{rate.title1}</p>
                </div>
                <div className="rate__box">
                    <h1 className="heading">{rate.percent2}</h1>
                    <p className="card__title">{rate.title2}</p>
                </div>
                <div className="rate__box">
                    <h1 className="heading">{rate.percent3}</h1>
                    <p className="card__title">{rate.title3}</p>
                </div>
            </div>
        </div>
        <div className="cs__bottom">
            <h3 className="card__title">{category}</h3>
            <h1 className="heading">{categoryTitle}</h1>
        </div>
    </div>
  )
}

export default ClientSuccessCard