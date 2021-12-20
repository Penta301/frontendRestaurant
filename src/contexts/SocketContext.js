import React, { useContext } from "react";
import { io } from "socket.io-client";
const ENDPOINT = "ws://127.0.0.1:8001/";
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
