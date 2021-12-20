import { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import ShowedCard from "./ShowedCard";

function ContainerCard({ QRText, Name }) {
  const [show, setShow] = useState(false);

  const handleSetter = () => {
    setShow(!show);
  };

  return (
    <AnimateSharedLayout type={"crossfade"}>
      <AnimatePresence>
        {show ? (
          <ShowedCard setter={handleSetter} QRText={QRText} Name={Name} />
        ) : (
          <motion.button
            onClick={handleSetter}
            layoutId={"QR"}
            className="text-white font-bold tracking-wide hover:text-indigo-600 ease-out duration-200"
          >
            QR
          </motion.button>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default ContainerCard;
