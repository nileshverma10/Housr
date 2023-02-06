import './App.css'
import Header from './component/Header'
import MainNav from './component/MainNav'
import CarouselCard from './component/CarouselCard'
import CarouselCard1 from './component/CarouselCard1'
import { Hero } from './component/Hero'
import { Hero2 } from './component/Hero2'
import { Testimonial } from './component/Testimonial'
import { Subscribe } from './component/Subscribe'
import { MiniBox } from './component/MiniBox'
import { Footer } from './component/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <MainNav />
      <CarouselCard />
      <CarouselCard1/>
      <Hero/>
      <Hero2/>
      <Testimonial/>
      <Subscribe/>
      <MiniBox/>
      <Footer/>
    </div>
  )
}

export default App

// https://www.youtube.com/watch?v=8kbS2WEZieU?
// https://medium.com/tinyso/how-to-create-a-dropdown-select-component-in-react-bf85df53e206
