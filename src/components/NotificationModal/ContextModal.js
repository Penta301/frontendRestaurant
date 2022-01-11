import React, { useState, useContext } from "react";

import Modal from "./Modal";

const ModalContext = React.createContext();

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState({
    title: "Testeando el Modal",
    mainText: "Es importante construir un modal reutilizable",
  });

  const handleShowNotificationModal = () => {
    setShow(!show);
  };

  const [functionModal, setFunctionModal] = useState(
    () => handleShowNotificationModal
  );

  const handleFunction = () => {
    functionModal();
    setShow(false);
  };

  const value = { handleShowNotificationModal, setText, setFunctionModal };

  return (
    <ModalContext.Provider value={value}>
      <Modal
        show={show}
        close={handleShowNotificationModal}
        text={text}
        functionAccept={handleFunction}
      >
        {children}
      </Modal>
    </ModalContext.Provider>
  );
}
