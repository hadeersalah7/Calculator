
import { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Results from "./components/Results/Results";
const App = () => {
  const [userInput, setUserInput] = useState({
    intialInvestment: 1000,
    annualInvenstment: 1200,
    expectedReturn: 700,
    duration: 7
  })

  const handleChangeInput = (inputIdentifier, newValue) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: newValue
      }
    })
  }
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChangeInput} userInput={userInput} />
      <Results inputs={userInput} />
    </>
    
  )
}

export default App
