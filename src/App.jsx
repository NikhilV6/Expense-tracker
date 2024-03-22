import { useState } from 'react'
import Header2 from './components/header2'
import Balance from './components/Balance' 
import "./App.css"
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import  {GlobalProvider } from './context/GlobalState.jsx'
function App() {
  return (
    <GlobalProvider>
    <Header2/>
    <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  )
}

export default App
