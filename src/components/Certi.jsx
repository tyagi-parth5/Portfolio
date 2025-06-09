import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({ index, title, issuer, date, icon, link }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain hover:scale-110 transition-transform duration-300'
          />
        </a>

        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        <p className='text-secondary text-[14px] text-center'>{issuer}</p>
        <span className='text-white-100 text-[12px]'>{date}</span>
      </div>
    </motion.div>
  </Tilt>
);

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Achievements</p>
        <h2 className={styles.sectionHeadText}>Certificates.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {certificates.map((certificate, index) => (
          <CertificateCard key={certificate.title} index={index} {...certificate} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
