import React, { useReducer, createContext } from 'react'
import PropTypes from 'prop-types'

const appState = {
  popup: false
}

const initialState = {
  ...appState
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'displayPopup':
      return { ...state, popup: payload }
    default:
      return state
  }
}

const StoreContext = createContext({})

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export { reducer, initialState, StoreContext, Store }

Store.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]).isRequired
}
