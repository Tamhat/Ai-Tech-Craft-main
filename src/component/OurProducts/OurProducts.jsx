import React from 'react'
import Heading from "../../helper/Heading/Heading";
import { MdOutlineShoppingBag } from "react-icons/md";
import "../OurServices/OurServices.css";
import { AiOutlineAudit } from "react-icons/ai";
import { FaRobot } from "react-icons/fa6";
import { MdOutlineInterests } from "react-icons/md";
import { AiFillBuild } from "react-icons/ai";

const OurProducts = () => {
  return (
    <section>
      <Heading icon={<MdOutlineShoppingBag />} title="our Products" />

      <div className="container services__container">
        <div className="services__card">
          <a href="https://ai-audits-main.vercel.app/" target="_blank">
            <div className="services__icon"><AiOutlineAudit /></div>
            <div className="card__title">Ai Audits</div>
            <h5 className="card__des">
              An Ai Content Detection Tool.
              For Writers, Editors, and Content Managers.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore officia dignissimos.
            </h5>
          </a>
        </div>
        <div className="services__card">
          <a href="https://ai-audits-main.vercel.app/" target="_blank">
            <div className="services__icon"><FaRobot /></div>
            <div className="card__title">Ai Directory</div>
            <h5 className="card__des">
              An Ai Content Detection Tool.
              For Writers, Editors, and Content Managers.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore officia dignissimos.
            </h5>
          </a>
        </div>
        <div className="services__card">
          <div className="services__icon"><AiOutlineAudit /></div>
          <div className="card__title">Ai Solutions</div>
          <h5 className="card__des">
            An Ai Content Detection Tool.
            For Writers, Editors, and Content Managers.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore officia dignissimos.
          </h5>
        </div>
        <div className="services__card">
          <div className="services__icon"><AiFillBuild /></div>
          <div className="card__title">Ai builder</div>
          <h5 className="card__des">
            An Ai Content Detection Tool.
            For Writers, Editors, and Content Managers.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore officia dignissimos.
          </h5>
        </div>
      </div>

    </section >
  )
}

export default OurProducts