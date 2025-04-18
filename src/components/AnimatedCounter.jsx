import React from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup'

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg sl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div className="bg-zinc-900 rounded-lg p-10 felx flex-col justify-center">
            <div key={counterItems.label} className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter