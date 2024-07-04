import { useState } from 'react'


const Statistics = ({good, neutral, bad, total}) => {
  return(
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text='good' value={good}/>
          <StatisticsLine text='neutral' value={neutral}/>
          <StatisticsLine text='bad' value={bad}/>
          <StatisticsLine text='average' value={(good-bad)/total}/>
          <StatisticsLine text='positive' value={100*good/total + '%'}/>
        </tbody>
      </table>
    </>
  )
}

const StatisticsLine = ({ text, value }) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = ({ onClick, text }) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    setGood(good+1)
    setTotal(total+1)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
    setTotal(total+1)
  }

  const handleBad = () => {
    setBad(bad+1)
    setTotal(total+1)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={handleGood} text='good' /> 
      <Button onClick={handleNeutral} text='neutral' /> 
      <Button onClick={handleBad} text='bad' /> 
      {total>0? <Statistics good={good} bad={bad} neutral={neutral} total={total}/>:<p>no feedback given</p>}
      
    </div>
  )
}

export default App