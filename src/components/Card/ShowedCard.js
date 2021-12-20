import { motion } from "framer-motion";
import Logic from "./Logic";
import QRCode from "qrcode.react";

function ShowedCard({ QRText, setter, Name }) {
  const { width } = Logic();
  const multipliyer = parseInt(Name);

  return (
    <motion.div
      layoutId={"QR"}
      animate={{ y: (-100 * multipliyer) / 1.4, x: -width, opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed flex flex-col justify-between items-center bg-gray-800 p-4 rounded-2xl shadow-item-custom"
    >
      <QRCode value={QRText} size={250} />
      <button
        onClick={setter}
        className="bg-indigo-600 brigth-shadow-indigo px-6 py-2 text-white font-bold text-xl rounded-xl mt-5"
      >
        Close
      </button>
    </motion.div>
  );
}

export default ShowedCard;
