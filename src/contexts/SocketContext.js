import React, { useContext } from "react";
import { io } from "socket.io-client";
const ENDPOINT = "https://fathomless-ridge-00660.herokuapp.com/";
const socket = io(ENDPOINT);

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ children }) {
  const value = {
    socket,
  };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
}
