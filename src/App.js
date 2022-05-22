import Graph from './components/Graph'
import * as d3 from 'd3'

const App = () => {
  const chartOptions = {
    w: 290,
    h: 350,
    margin: { top: 100, right: 100, bottom: 100, left: 100 },
    levels: 4,
    maxValue: 4,
    roundStrokes: true,
    format: '.0f',
    opacityArea: 0.1,
    labelFactor: 1.15,
    color: d3.scaleOrdinal(['#00FFFF', '#FF0000', '#6B8E23']),
    legend: { title: 'Content Title', translateX: 120, translateY: 80 },
  }

  return (
    <div className='App' style={{ height: '100vh', width: '100vw' }}>
      <Graph chartOptions={chartOptions} />
    </div>
  )
}

export default App
