import React from "react"
import Fade from "react-reveal/Fade"

const PageContent = props => {
  let explanationClasses = ["explanation animateElement"]
  if (props.width) {
    explanationClasses.push("explanation-after")
  }
  let explanation = null

  if (props.width === 0 || props.width >= 1365) {
    explanation = (
      <div className='explanation'>
        <h1>Reduce Browser Width Very Slowly and Watch Here!</h1>
      </div>
    )
  } else if (props.width < 550) {
    explanation = (
      <div className={explanationClasses.join(" ")}>
        <div className='top'>
          <h2>.container</h2>
          <p>display: grid</p>
          <hr />
          <p>grid-template-areas:</p>
          <Fade bottom>
            <table>
              <tbody>
                <tr>
                  <td>"A</td>
                  <td>A</td>
                  <td>B"</td>
                </tr>
                <tr>
                  <td>"H</td>
                  <td>H</td>
                  <td>B"</td>
                </tr>
                <tr>
                  <td>"H</td>
                  <td>H</td>
                  <td>B"</td>
                </tr>
              </tbody>
            </table>
          </Fade>
        </div>

        <div className='bottom'>
          <Fade right>
            <hr />
            <h2>
              .container > div <br /> :not(.A):not(.B) <br /> :not(.H)
            </h2>
          </Fade>
          <p>display: none</p>
        </div>
      </div>
    )
  } else if (props.width < 620) {
    explanation = (
      <div className={explanationClasses.join(" ")}>
        <div className='top'>
          <h2>.container</h2>
          <p>display: grid</p>
          <p>grid-template-areas:</p>
          <Fade bottom>
            <table>
              <tbody>
                <tr>
                  <td>"A</td>
                  <td>A</td>
                  <td>B"</td>
                </tr>
                <tr>
                  <td>"D</td>
                  <td>E</td>
                  <td>B"</td>
                </tr>
                <tr>
                  <td>"G</td>
                  <td>H</td>
                  <td>B"</td>
                </tr>
              </tbody>
            </table>
          </Fade>
        </div>

        <div className='bottom'>
          <Fade right>
            <h2>
              .container > div <br /> :not(.A):not(.B) <br /> :not(.D):not(.E) <br /> :not(.G):not(.H)
            </h2>
          </Fade>
          <p>display: none</p>
        </div>
      </div>
    )
  } else if (props.width < 700) {
    explanation = (
      <div className={explanationClasses.join(" ")}>
        <div className='top'>
          <h2>.container</h2>
          <hr />
          <p>display: grid</p>
          <Fade left>
            <p>grid-template-areas:</p>
            <table>
              <tbody>
                <tr>
                  <td>"A</td>
                  <td>A</td>
                  <td>B"</td>
                </tr>
                <tr>
                  <td>"D</td>
                  <td>E</td>
                  <td>F"</td>
                </tr>
                <tr>
                  <td>"G</td>
                  <td>H</td>
                  <td>I"</td>
                </tr>
              </tbody>
            </table>
          </Fade>
        </div>
        <Fade right>
          <div className='bottom'>
            <h2>
              .container > div <br /> :not(.A):not(.B):not(.D) <br /> :not(.E):not(.F):not(.G) <br /> :not(.H):not(.I)
            </h2>
            <p>display: none</p>
          </div>
        </Fade>
      </div>
    )
  } else if (props.width < 750) {
    explanation = (
      <div className={explanationClasses.join(" ")}>
        <div className='top'>
          <h2>.container</h2>
          <p>display: grid</p>
          <p>
            grid-template- columns: <br /> 1fr 2fr 1fr
          </p>
          <Fade bottom>
            <p>
              grid-template-rows: <br /> 1fr 1.5fr 1fr
            </p>
          </Fade>
        </div>
        <div className='bottom'>
          <h2>.container > div</h2>
          <p>display: flex</p>
          <p>align-items: center </p>
          <p>justify-content: center</p>
        </div>
      </div>
    )
  } else if (props.width < 800) {
    explanation = (
      <div className={explanationClasses.join(" ")}>
        <div className='top'>
          <h2>.container</h2>
          <Fade top>
            <p>display: grid</p>
            <p>
              grid-template- columns: <br /> 1fr 2fr 1fr
            </p>
          </Fade>
        </div>
        <div className='bottom'>
          <h2>.container > div</h2>
          <p>display: flex</p>
          <p>align-items: center </p>
          <p>justify-content: center</p>
        </div>
      </div>
    )
  } else if (props.width < 875) {
    explanation = (
      <div className={explanationClasses.join(" ")}>
        <div className='top'>
          <h2>.container</h2>
          <p>display: flex</p>
          <p>flex-wrap: wrap</p>
          <hr />
          <Fade left>
            <p>justify-content: space-around</p>
          </Fade>
        </div>
        <div className='bottom'>
          <h2>.container > div</h2>
          <p>display: flex</p>
          <p>align-items: center </p>
          <p>justify-content: center</p>
        </div>
      </div>
    )
  } else if (props.width < 950) {
    explanation = (
      <div className={explanationClasses.join(" ")}>
        <div className='top'>
          <h2>.container</h2>
          <p>display: flex</p>
          <p>flex-wrap: wrap</p>
          <Fade top>
            <p>
              justify-content: <br /> space-between
            </p>
          </Fade>
        </div>
        <div className='bottom'>
          <h2>.container > div</h2>
          <p>display: flex</p>
          <p>align-items: center </p>
          <p>
            justify-content: <br /> center
          </p>
        </div>
      </div>
    )
  } else if (props.width < 1000) {
    explanation = (
      <div className={explanationClasses.join(" ")}>
        <div className='top'>
          <h2>.container</h2>
          <p>display: flex</p>
          <p>flex-wrap: wrap</p>
        </div>
        <div className='bottom'>
          <h2>.container > div</h2>
          <p>display: flex</p>
          <p>align-items: center </p>
          <Fade bottom>
            <p>
              justify-content:
              <br /> center
            </p>
          </Fade>
        </div>
      </div>
    )
  } else if (props.width < 1025) {
    explanation = (
      <div className={explanationClasses.join(" ")}>
        <div className='top'>
          <h2>.container</h2>
          <p>display: flex</p>
          <p>flex-wrap: wrap</p>
        </div>
        <div className='bottom '>
          <h2>.container > div</h2>
          <Fade top>
            <p>display: flex</p>
            <p>align-items: center </p>
          </Fade>
        </div>
      </div>
    )
  } else if (props.width < 1366) {
    explanation = (
      <div className={explanationClasses.join(" ")}>
        <div className='top'>
          <h2>.container</h2> <p>display: flex</p>
          <p>flex-wrap: wrap</p>
        </div>
        <div className='bottom'>
          <h2>.container > div</h2>
          <p>none</p>
        </div>
      </div>
    )
  }

  return (
    <div className='App'>
      <fieldset>
        {props.width > 1 && <h3>Current Width = {props.width} px</h3>}
        {explanation}
        <legend>Flexbox & Grid</legend>
        <div className='container'>
          <div className='A'>
            <p>A</p>
          </div>
          <div className='B'>
            <p>B</p>
          </div>
          <div className='C'>
            <p>C</p>
          </div>
          <div className='D'>
            <p>D</p>
          </div>
          <div className='E'>
            <p>E</p>
          </div>
          <div className='F'>
            <p>F</p>
          </div>
          <div className='G'>
            <p>G</p>
          </div>
          <div className='H'>
            <p>H</p>
          </div>
          <div className='I'>
            <p>I</p>
          </div>
        </div>
      </fieldset>
    </div>
  )
}

export default PageContent
