import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Images } from "./components/Images"

function App() {

  return (
    <div className="bg-zinc-950 w-dvh flex justify-center overflow-hidden">
      <div className="bg-zinc-900 overflow-hidden h-full w-full lg:w-11/12 ">
        <Header></Header>
        <Home></Home>
        <Images></Images>
      </div>
    </div>
  )
}

export default App
