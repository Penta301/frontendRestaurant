import { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import QuestModal from "./QuestModal";

function ContainerCard({ table, total, newQuest, food, handleQuest }) {
  const [show, setShow] = useState(false);

  const [showContentModal, setShowContentModal] = useState(false);

  const handleSetter = () => {
    setShow(!show);
    if (!showContentModal) {
      setTimeout(() => setShowContentModal(true), 1000);
      return;
    }
    setShowContentModal(false);
  };

  return (
    <AnimateSharedLayout>
      <motion.div className="flex items-center justify-around py-2 w-full fixed background  ">
        <motion.h1 layout className="main_text font-bold">
          Esta es la mesa: {table}
        </motion.h1>
        <AnimatePresence initial={false}>
          {show ? (
            <motion.div
              layout
              key="questModal"
              className="absolute top-12"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ bounce: 0 }}
              exit={{ y: -700 }}
            >
              <QuestModal
                newQuest={newQuest}
                total={total}
                food={food}
                handleQuest={handleQuest}
                setter={handleSetter}
                show={showContentModal}
              />
            </motion.div>
          ) : (
            <motion.p
              layout
              key="label"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="main_text font-bold brigth_border text-center p-2 px-4 rounded-full  cursor-pointer"
              onClick={handleSetter}
            >
              Total = <span className="text_brigth">{total}$</span>
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimateSharedLayout>
  );
}

export default ContainerCard;
