
import './MarketingAudit.css'

const MarketingAudit = () => {
  return (
    <section className='mAudit__bg'>
        <div className="container mAudit__container">
            <div className="mAudit__left">
                <h1 className="heading">Free AI Marketing Audit from Ai Tech Craft.</h1>

                <div>
                    <p className="card__des">The experts at our Ai Tech Craft have managed thousands of successful marketing campaigns, resulting in increases in qualified leads, phone calls, traffic, and most importantly— revenue.</p>

                    <p className="card__des">Start by requesting an initial digital strategy proposal for free and receive:</p>

                    <ul>
                        <li className='card__des'>Website review (content & CRO)</li>
                        <li className='card__des'>SEO Audit: 20-point performance check</li>
                        <li className='card__des'>Digital marketing strategy</li>
                    </ul>
                </div>

                <div className="btn">REQUEST FREE AUDIT</div>
            </div>

            <div className="mAudit__right">
                <img src="https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/Free-audit-request.-1.jpg.webp" alt="" />
            </div>
        </div>
    </section>
  )
}

export default MarketingAudit