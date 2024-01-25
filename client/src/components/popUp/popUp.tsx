import React from 'react'
import './popUp.css'
const PopUp = ():JSX.Element => {
  return (
    <section className="popUpOverlay">
        <div className="popUp">
            <h4>Congrats</h4>
            <span>Your Answers: 99%</span>
            <button>Play again</button>
        </div>
    </section>
  )
}

export default PopUp