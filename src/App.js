import React, { useEffect, useState } from "react"
import "./App.css"
import PageContent from "./PageContent"

const App = props => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })

    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth)
      })
    }
  }, [width])

  return (
    <React.Fragment>
      <PageContent width={width} />
    </React.Fragment>
  )
}

export default App
