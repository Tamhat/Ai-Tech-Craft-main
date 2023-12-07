import { liveRulesData } from '../../../data/data';
import Card from '../../../shared/Card/Card';
import './LiveRules.css'

const LiveRules = () => {
  return (
    <section>
        <div className="container liveRules__container">
            <h1 className="heading">The Rules We Live By:</h1>

            <div className="liveRules__card">
                {
                    liveRulesData && liveRulesData?.map((curElem) =>{
                        const {id} = curElem;

                        return (
                            <Card key={id} className="live__card">
                                <div className="card__top">
                                    <img src={curElem.icon} alt="" />
                                    <h1 className="heading">{curElem.title}</h1>
                                </div>

                                <p className="card__des">{curElem.description}</p>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default LiveRules