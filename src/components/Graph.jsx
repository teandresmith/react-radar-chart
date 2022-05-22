import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { drawChart } from './drawChart'
import './graph.css'

const Graph = ({ chartOptions }) => {
  const containerRef = useRef(null)

  const info = [
    {
      name: 'Product',
      axes: [
        { axis: 'Industry', value: 1 },
        { axis: 'Type', value: 2 },
        { axis: 'Maturity', value: 3 },
      ],
    },
    {
      name: 'Client 1',
      axes: [
        { axis: 'Industry', value: 2 },
        { axis: 'Type', value: 1 },
        { axis: 'Maturity', value: 2 },
      ],
    },
    {
      name: 'Client 2',
      axes: [
        { axis: 'Industry', value: 3 },
        { axis: 'Type', value: 3 },
        { axis: 'Maturity', value: 1 },
      ],
    },
  ]

  useEffect(() => {
    if (containerRef.current) {
      const svg = d3.select(containerRef.current)
      drawChart(svg, info, chartOptions)
    }
  })

  return (
    <>
      <svg ref={containerRef} className='radarChart container'></svg>
    </>
  )
}

export default Graph
