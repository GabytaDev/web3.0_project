import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import "./Services.scss";
import ServiceCard from "./ServiceCard";

const Services = () => {
    return (
        <div className="content-services">
            <div className="content-inner">
                <div className="content-text">
                    <h1 className="title-services">
                        Services that we
                        <br />
                        continue to improve
                    </h1>
                    <p className="text">
                        The best choice for buying and selling your crypto assets, with the
                        various super friendly services we offer
                    </p>
                </div>
                <div className="content-service-card">
                    <ServiceCard
                        color="bg-color-blue"
                        title="Security gurantee"
                        icon={<BsShieldFillCheck className="color-icon"/>}
                        subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                    />
                    <ServiceCard
                        color="bg-color-violet"
                        title="Security gurantee"
                        icon={<BiSearchAlt className="color-icon"/>}
                        subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                    />
                     <ServiceCard
                        color="bg-color-red"
                        title="Security gurantee"
                        icon={<RiHeart2Fill className="color-icon"/>}
                        subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                    />
                </div>
            </div>
        </div>    
            )
}

            export default Services;