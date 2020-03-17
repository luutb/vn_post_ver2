import React from 'react'
import ReactDOM from 'react-dom'

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  )

  export default store;


