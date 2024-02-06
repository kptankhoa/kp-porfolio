"use client";
import Typewriter from "typewriter-effect"
import { motion } from "framer-motion";
import { Heading } from "@components"

interface Props {
  img: string;
  typewriter: string[]
}

const About = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center p-5">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          whileHover={{ scale: 1.3, rotate: 10 }}
          whileTap={{
            scale: 0.8,
            rotate: -90
          }}
          className="pfp"
        >
          <img src={props.img} alt="" />
        </motion.div>
      </div>

      <Heading firstWord="About" secondWord="Me" />

      <div className="hero-typewriter">
        <h3>I am</h3>
        <Typewriter
          options={{
            strings: props.typewriter,
            autoStart: true,
            loop: true,
            wrapperClassName: "typewriter"
          }}
        />
      </div>
    </div>
  )
};

export default About;