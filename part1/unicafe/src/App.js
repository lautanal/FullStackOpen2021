import React, { useState } from 'react'

const Header = ({title}) => {
//  console.log(props)
    return (
      <div>
        <h1>
            {title}
        </h1>
      </div>
    )
}

const Statistics = ({points}) => {
  const g = points[0].count
  const n = points[1].count
  const b = points[2].count
  if ((g+n+b) > 0) {
    return (
      <div>
        <table>
          <tbody>
          <StatisticLine grade={points[0].grade} count={g} unit='' />
          <StatisticLine grade={points[1].grade} count={n} unit='' />
          <StatisticLine grade={points[2].grade} count={b} unit='' />
          <StatisticLine grade='all' count={g + n + b} unit='' />
          <StatisticLine grade='average' count={(g-b)/(g + n + b)} unit='' />
          <StatisticLine grade='positive' count={100*g/(g + n + b)} unit='%'/>
          </tbody>
        </table>
      </div>
    )
  } else {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
}

const StatisticLine = ({ grade, count, unit }) => {
  return (
    <tr>
      <td width="80">{grade}</td><td>{count}</td><td>{unit}</td>
    </tr>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const results = {
    title: 'statistics',
    points: [
      {
        grade: 'good',
        count: good
      },
      {
        grade: 'neutral',
        count: neutral
      },
      {
        grade: 'bad',
        count: bad
      }
    ]
  }

  const goodClick = () => {
    console.log('good clicked')
    setGood(good + 1)
  }

  const neutralClick = () => {
    console.log('neutral clicked')
    setNeutral(neutral + 1)
 }

  const badClick = () => {
    console.log('bad clicked')
    setBad(bad + 1)
  }

  return (
    <div>
      <Header title='give feedback' />
      <Button handleClick={() => goodClick()} text='good' />
      <Button handleClick={() => neutralClick()} text='neutral' />
      <Button handleClick={() => badClick()} text='bad' />
      <Header title={results.title} />
      <Statistics points={results.points} />
    </div>
  )
}

export default App
