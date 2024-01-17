import "./SliderCard.css";

const SliderCard = (props) => {
  const { img, title, description } = props;
  return (
    <div className="sliderCard">
      <div className="sCard__left">
        <img src={img} alt="" />
      </div>
      <div className="sCard__right">
        <h1 className="heading">{title}</h1>
        <p className="card__des">{description}</p>
      </div>  
    </div>
  );
};

export default SliderCard;
