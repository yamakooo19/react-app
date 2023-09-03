import React, { createContext, useContext } from 'react'

const Context = createContext({money: 0});

const Mago = () => {
  const { money } = useContext(Context)
  return <p>{money}円</p>
}

const Kodomo = () => <Mago />

const Oya = () => {
  return (
    <Context.Provider value={{ money: 10000 }}>
      <Kodomo />
    </Context.Provider>
  )
}

const Example = Oya;



export {Example};