import React from 'react'
import { calculateInvestmentResults, formatter } from '../../util/investment'
const Results = ({ inputs }) => {

    const results = calculateInvestmentResults(inputs)
    const initialInvestemnt = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment
    console.log(results)
    return (
        <>
            <table id='result'>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>

                <tbody>
                    {results.map((yearChange) => {
                        const totalInterset = yearChange.valueEndOfYear - yearChange.annualInvestment * yearChange.year - initialInvestemnt
                        const totalAmountInvested = yearChange.valueEndOfYear - totalInterset
                        return (
                            <tr key={yearChange.year}>
                                <td>{yearChange.year}</td>
                                <td>{formatter.format(yearChange.valueEndOfYear)}</td>
                                <td>{formatter.format(yearChange.interest)}</td>
                                <td>{formatter.format(totalInterset)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        )
                    }
                    )}

                </tbody>
            </table>
        </>
            
    )
}

export default Results