
import './OurMission.css'

const OurMission = () => {
  return (
    <section>
        <div className="container ourmission__container">
            <div className="mission__left">
                <img src="https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/06/IMG_2920-1-1.jpg.webp" alt="" />
            </div>
            <div className="mission__right">
                <h1 className="card__title">OUR MISSION</h1>
                <h1 className="heading">Help Small & Mid-Sized Businesses Grow Beyond What They Thought Possible</h1>

                <div className="mission__des">
                    <p className="card__des">The backbone of the US economy, small and mid-sized businesses deserve every opportunity to grow and continue their immeasurable contributions to our society. Yet most marketing agencies focus on serving only large corporations that can afford their services.</p>
                    <p className="card__des">The end result? Big corporations continue to grow and maximize profits while smaller businesses struggle to retain and grow their market share. We’re not like that.</p>
                    <p className="card__des">Our passion and expertise lies in providing world-class marketing solutions specially designed for smaller organizations. That’s what gets us up every morning — knowing that our solutions positively impact the lives of thousands.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurMission