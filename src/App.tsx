
import { useState } from "react"
import Page1 from "./components/Page1"
import Page2 from "./components/Page2"
// import Page3 from "./components/Page3"
// import Page4 from "./components/Page4"
// import Page5 from "./components/Page5"



function App() {
  const [open, setOpen] = useState("")

  const page2 = () => {
    setOpen("hidden")
    console.log("hello");

  }


  return (
    <>
      {
        open ? <Page2 /> : <Page1 page2={page2} />

      }
      {/* <Page3 /> */}
      {/* <Page4 /> */}
      {/* <Page5 /> */}
    </>
  )
}

export default App
