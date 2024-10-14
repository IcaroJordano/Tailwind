import { Header } from "./components/Header"
import { Home } from "./components/Home"

function App() {

  return (
    <div className="bg-zinc-950 w-dvh flex justify-center h-screen">
      <div className="bg-zinc-900  h-lvh w-full lg:w-11/12 ">
        <Header></Header>
        <Home></Home>
      </div>
    </div>
  )
}

export default App
