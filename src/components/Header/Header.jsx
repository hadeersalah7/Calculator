import calculatorLogo from "../../assets/investment-calculator-logo.png";
const Header = () => {
    return (
        <>
            <header id="header">
                <img src={calculatorLogo} alt="investmentCalculatorLogo" />
                <h1>React Investment Calculator</h1>
            </header>
        </>
    )
}

export default Header