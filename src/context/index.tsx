import React from "react";

type PropsChildren = {
  children : React.ReactNode
}
type ContextType = {
  status:boolean;
  setStatus:(newState:boolean) => void
}

const initial ={
  status: false,
  setStatus: () => {}
}

export const ContextStatus = React.createContext<ContextType>(initial)

export const ContextProvider = ({children}:PropsChildren) => {
  const [status, setStatus] = React.useState(initial.status)

  return (
      <ContextStatus.Provider value={{status,setStatus}}>
          {children}
      </ContextStatus.Provider>
    )
}