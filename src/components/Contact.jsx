import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import profilePic from "../assets/profile.jpg";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Parth Tyagi</h3>

        {/* Profile Image */}
        <div className="mt-4 mb-8 flex justify-center">
          <img
            src={profilePic}
            alt="Parth Tyagi"
            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>

        <div className="mt-4 flex flex-col gap-8">
          <div className="flex flex-col text-white text-[17px] leading-[30px]">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tyagiparth65@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-1 hover:underline"
            >
              📧 tyagiparth65@gmail.com
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ptyagi_be22@thapar.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-1 hover:underline"
            >
              🎓 ptyagi_be22@thapar.edu
            </a>
            <a href="tel:+918199063995" className="hover:underline">
              📞 +91 8199063995
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() =>
                window.open("https://github.com/tyagi-parth5", "_blank")
              }
              className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 py-3 px-6 rounded-2xl text-white font-semibold shadow-lg shadow-black/30 backdrop-blur-sm border border-white/10"
            >
              GitHub
            </button>

            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/parth-tyagi-7ab010237/",
                  "_blank"
                )
              }
              className="bg-gradient-to-r from-[#0A66C2] to-[#0056a0] hover:from-[#0958a6] hover:to-[#004d8f] transition-all duration-300 py-3 px-6 rounded-2xl text-white font-semibold shadow-lg shadow-blue-900/40 backdrop-blur-sm border border-white/10"
            >
              LinkedIn
            </button>
          </div>

          {/* Motivating Slogan */}
          <p className="mt-10 text-center text-white italic text-lg font-semibold tracking-wide">
            "Innovate with passion, code with purpose — your journey starts here."
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-[700px] md:h-[600px] h-[450px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
