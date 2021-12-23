import { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import QuestModal from "./QuestModal";

function ContainerCard({ data, newQuest }) {
  const [show, setShow] = useState(false);

  const handleSetter = () => {
    setShow(!show);
  };

  return (
    <AnimateSharedLayout type={"crossfade"}>
      <AnimatePresence>
        <motion.div className="flex items-center justify-around py-2 w-full fixed background shadow-item-custom ">
          <motion.h1 className="main_text font-bold">
            This is the table {data.table}
          </motion.h1>
          {show ? (
            ""
          ) : (
            <motion.p
              layoutId={"label"}
              className="main_text font-bold brigth_border text-center p-2 px-4 rounded-full custom-smooth-shadow cursor-pointer"
              onClick={handleSetter}
            >
              Total = <span className="text_brigth">{data.total}$</span>
            </motion.p>
          )}
        </motion.div>
        {show ? (
          <QuestModal
            data={data}
            setter={handleSetter}
            show={show}
            newQuest={newQuest}
          />
        ) : (
          ""
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default ContainerCard;
