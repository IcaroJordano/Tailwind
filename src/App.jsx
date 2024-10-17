import { Content } from "./components/Content"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Images } from "./components/Images"

function App() {

  return (
    <div className="bg-zinc-950 custom-scrollbar w-dvh flex justify-center  overflow-hidden">
      <div className="bg-zinc-900 lg:overflow-visible overflow-hidden h-full w-auto lg:w-11/12 ">
        <Header></Header>
        <Home></Home>
        <Images></Images>
        <Content></Content>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
