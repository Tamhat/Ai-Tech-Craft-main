
import './MarketingAgencyCard.css'

const MarketingAgencyCard = ({video, images}) => {
  return (
    <div className='mA__card'>
        {
          video ? <video src={video} autoPlay muted className='mA__media-video' /> : <img src={images} className='mA__media'/>
        }
    </div>
  )
}

export default MarketingAgencyCard