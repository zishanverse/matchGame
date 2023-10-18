import './index.css'

const Navbar = props => {
  const {scr, tm} = props

  return (
    <div className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo"
      />
      <ul className="navContent">
        <li>
          <p className="score">
            Score: <span className="count">{scr}</span>
          </p>
        </li>
        <li className="timerCard">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timerImg"
          />
          <p className="timer">{tm} sec</p>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
