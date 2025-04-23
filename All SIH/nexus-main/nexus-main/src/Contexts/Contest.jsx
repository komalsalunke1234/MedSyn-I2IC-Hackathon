import React, { createContext } from "react";
import { useContext } from "react";

const clinicContext = createContext();
const clinicsData = [
    {
        centername: "Bliss Mother & Baby International Hospital India ",
        centeradd:"207, Tradenet Building, Next to Phoenix Mall, Landmark : Above Kothari Wheels Maruti Showroom, Next to Phoenix Market City, Pune",
        time:"8 pm",
        id:10,
        timings: ["Mon-Sun", "09:30 AM - 10:30 PM"],        
        specs:"Maternity and Baby care Clinic",
        logo: "clinic10",
        services: [
            "Prenatal Checkups",
            "High-Risk Pregnancy Care",
            "Ultrasound Scanning (2D/3D/4D)",
            "Fetal Monitoring",
            "Labor and Delivery Services",
            "Painless Normal Delivery (Epidural)",
            "Cesarean Section (C-Section)",
            "Postnatal Care",
            "Lactation Consultation",
            "Neonatal Intensive Care Unit (NICU)",
            "Newborn Screening",
            "Vaccination & Immunization",
            "Growth & Development Tracking",
            "Infant Nutrition Counseling",
            "Pediatric Checkups",
            "Maternal Nutrition & Diet Counseling",
            "Family Planning & Contraception Counseling",
            "Pelvic Floor Rehabilitation",
            "Antenatal Classes (Yoga, Lamaze, Parenting)",
            "Cord Blood Banking"
        ],
        
        docs: {
            12345:{
            docname: "Dr. Pradeep Kumari",
            docskills: ["MBBS", "gynacologist", "baby care  & Maternity", "Surgen", "maternity"],
            exp: 21,
            isVerify: true
        },
        98765: {
            docname: "Dr. Nitin Jain",
            docskills: ["MBBS", "MD - Obstetrics & Gynaecology", "Fellowship in Reproductive Medicine"],
            exp: 21,
            isVerify: true
        },
        45689: {
            docname: "Dr. Ajay More",
            docskills: ["MBBS", "DNB - Pediatrics", "Neonatal Intensive Care Specialist"],
            exp: 9,
            isVerify: false
        }
        
    }
    },
    {
        centername: "Kaya Clinic",
        centeradd:"Yogesh House, East Street, Camp, Pune, Maharashtra, Pune - 411001, Maharashtra",
        time:"8 pm",
        id:11,
        timings: ["Mon-Sun", "10:30 AM - 6:00 PM"],
        specs:"Hair PRP Treatment",
        logo: "clinic11",
        services: ["Dermabrasion",
            "Laser Resurfacing",
            "Acne / Pimples Treatment",
            "Scar Treatment",],
        docs:{}
        
    },
    {
        centername: "SkinCure Skin & Hair Clinic",
        centeradd:"D136, 1st Floor, D building, Clover Center, Besides Arora Towers, Moledina Road, Camp, Pune - 411001, Maharashtra",
        time:"6:30 pm",
        id:12,
        specs:"Mesotherapy | Hair-grafting",
        logo: "clinic12",
        docs:{}
    }

]
export const ClinicProvider  = ({children})=>{
    return(
        <>
        <clinicContext.Provider value = {{clinics: clinicsData}}>
            {children}
        </clinicContext.Provider>
        </>
    )
}

export default clinicContext;