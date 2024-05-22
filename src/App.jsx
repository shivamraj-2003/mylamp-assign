import './App.css'
import Navbar from "./components/Navbar"
import Content from "./components/Content"
function App() {

  return (
    <>
      <Navbar />
      <Content value={ 6 } val={ 27 } />
    </>
  )
}

export default App
