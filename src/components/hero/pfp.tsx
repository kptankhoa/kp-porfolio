import { motion } from 'framer-motion';

const PFP = ({ img }: { img: string }) => (
  <div className="flex justify-center p-5 mt-6 mb-6">
    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[420px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-emerald-200 after:via-emerald-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-emerald-700 before:dark:opacity-10 after:dark:from-emerald-900 after:dark:via-[#064e3b] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    </div>
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: [0, 180, 360], scale: [0.9, 1, 1.2] }}
      whileHover={{ scale: 1.3, rotate: 720 }}
      whileTap={{
        scale: 0.8,
        rotate: 360
      }}
      transition={{ duration: 0.5 }}
      className="pfp"
    >
      <div>
        <img src={img} alt="KP pic" className="unclickable"/>
      </div>
    </motion.div>
  </div>
);

export default PFP;
