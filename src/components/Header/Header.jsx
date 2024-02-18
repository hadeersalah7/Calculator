import calculatorLogo from "../../assets/investment-calculator-logo.png";
const Header = () => {
    return (
        <>
            <header id="header">
                <h1>React Investment Calculator</h1>
                <img src={calculatorLogo} alt="investmentCalculatorLogo" />
            </header>
        </>
    )
}

export default Header