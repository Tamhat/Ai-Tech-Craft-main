
import './MarketingBenefit.css'

const MarketingBenefit = () => {
  return (
    <section className='mB__bg'>
        <div className="container mB__container">
            <div className="mB__left">
                <h1 className="heading">Reap the benefits of an entire marketing team without the burdens of building it yourself</h1>

                <img src="https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/02/branch.png.webp" alt="" />
            </div>

            <div className="mB__right">
                <p className="card__des">Transparency and accountability are important to us. Consequently, we only work with new clients when we have the data to verify our ability to deliver results. Ultimately, every business wants a high level of confidence in their marketing partner, and Comrade can provide that peace of mind.</p>

                <div className="mb__card">
                    <img src="https://comradeweb.com/wp-content/uploads/2022/02/dedicated.svg" alt="" />

                    <p className="card__title">Dedicated Teams</p>
                    <p className="card__des">Among our team are SEO experts, copywriters, editors, web designers, and developers, all of whom are truly committed to their craft.</p>
                </div>
                <div className="mb__card">
                    <img src="https://comradeweb.com/wp-content/uploads/2022/02/roi.svg" alt="" />

                    <p className="card__title">Driven by ROI</p>
                    <p className="card__des">Quite simply, if you don’t see concrete results from our services, then we haven't done our job.The data-driven, transparent, and measurable nature of our process ensures a successful marketing campaign.</p>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default MarketingBenefit