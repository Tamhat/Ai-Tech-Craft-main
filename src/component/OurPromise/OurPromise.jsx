import Card from '../../shared/Card/Card'

import './OurPromise.css'

const OurPromise = () => {
  return (
    <section>
        <div className="container oPromise__container">
            <div className="oPromise__left">
                <h3 className="card__title">OUR PROMISE</h3>
                <h1 className="heading">Powering businesses and eCommerce stores since 2008</h1>
            </div>

            <div className="oPromise__right">
                    <div className="oPromise__card-top">
                        <Card className="oPromise__single-card">
                            <h1 className="heading">2.5x</h1>
                            <h3 className="card__title">INCREASE IN SEO TRAFFIC</h3>
                        </Card>

                        <Card className="oPromise__single-card">
                            <h1 className="heading">120%</h1>
                            <h3 className="card__title">INCREASE IN PPC REVENUE</h3>
                        </Card>
                        <h3 className="card__title">*Average results generated for our clients</h3>
                    </div>

                    <div className="oPromise__card-top">
                        <Card className="oPromise__single-card">
                            <h1 className="heading">70%</h1>
                            <h3 className="card__title">SALES QUALIFIED LEADS INCREASE</h3>
                        </Card>

                        <Card className="oPromise__single-card">
                            <h1 className="heading">35%</h1>
                            <h3 className="card__title">CONVERSION RATE INCREASE</h3>
                        </Card>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default OurPromise