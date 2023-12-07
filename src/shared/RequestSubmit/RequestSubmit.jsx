import { MdAddCall } from "react-icons/md";

import './RequestSubmit.css'

const RequestSubmit = () => {
  return (
    <section className="requestSubmit__bg">
        <div className="container rSubmit__container">
            <div className="rSubmit__left">
                <h2 className="card__title">AVERAGE CLIENTS SEE A 4.5X ROI</h2>
                <div className="quote">
                    <h1 className="heading">Reach Out for a Quote</h1>
                    <ul>
                        <li>Dramatically improve ROI</li>
                        <li>Outperform the competition</li>
                        <li>Improve conversions</li>
                        <li>Reduce cost per acquisition</li>
                    </ul>
                </div>

                <h1 className="heading">Ready to speak with our team of experts?</h1>

                <p className="card__des">Chat with our Specialists or Call Us</p>

                <div className="call">
                 <MdAddCall /> (312) 265-0580
                </div>
            </div>
            <div className="rSubmit__right">
                <form>
                    <div className="name">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>

                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Phone" />
                    <input type="text" placeholder="Company Name" />

                    <div className="industry">
                        <select>
                            <option value="">Industry</option>
                            <option value="">Legal</option>
                            <option value="">Ecommorce</option>
                            <option value="">Small Business</option>
                        </select>
                        <span className="arrow"></span>
                    </div>
                    <div className="industry">
                        <select>
                            <option value="">What can we help you with?</option>
                            <option value="">Need more visitor?</option>
                            <option value="">Need to create baranding?</option>
                        </select>
                        <span className="arrow"></span>
                    </div>

                    <textarea placeholder="Please tell your project information" rows={10} />

                    <a className="btn">Submit Your Request</a>
                </form>
            </div>
        </div>
    </section>
  )
}

export default RequestSubmit