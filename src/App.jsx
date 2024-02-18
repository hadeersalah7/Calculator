
import { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Results from "./components/Results/Results";
const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 700,
    duration: 7
  })

  const inputIsValid = userInput.duration >= 1
  const handleChangeInput = (inputIdentifier, newValue) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue
      }
    })
  }
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChangeInput} userInput={userInput} />
      {!inputIsValid && <p className="center error">Please enter a duration number greater than 1</p>}
      {inputIsValid && <Results inputs={userInput} />} 
    </>
    
  )
}

export default App
