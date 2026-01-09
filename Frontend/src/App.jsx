import { Box, Toaster } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar.jsx"
import HomePage from "./Pages/HomePage.jsx"
import CreatePage from "./Pages/CreatePage.jsx"

function App() {

  return (
    <>
    
    <Box minH={"100vh"}
        style={{background : "#574964"}}
    >
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/create" element={<CreatePage/>}/>
    </Routes>
    </Box>
    </>
  )
}

export default App
