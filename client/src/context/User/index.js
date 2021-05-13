import React, {createContext, useReducer} from "react"
import Reducer from "./reducer"

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false
}

export const UserContext = React.createContext({initialState})

const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(Reducer, initialState)

  return (
    <UserContext.Provider value={[ state, dispatch ]}>
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider;