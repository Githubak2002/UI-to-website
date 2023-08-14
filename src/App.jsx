import react ,{ useState }  from 'react'

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Landingpg from './components/Landingpg'
import Abt from './components/Abt'
import Pricing from './components/Pricing'
import Work from './components/Work'
import Errorpg from './components/Errorpg'
import Footer from './components/Footer'

import Step1 from './components/step1'
import Step2 from './components/step2'
import Step3 from './components/Step3'

import Monthly from './components/Monthly'
import Yearly from './components/Yearly'
import Quaterly from './components/Quaterly'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='mx-auto max-w-[1532px]'>
      <Router>
      <Nav />

        <Routes>

          <Route path='/' element={<Landingpg />} />
          <Route path='about' element={<Abt />}>
            <Route index='/' element={<Step1 />}/>
            <Route path='step1' element={<Step1 />}/>
            <Route path='step2' element={<Step2 />}/>
            <Route path='step3' element={<Step3 />}/>
          </Route>

          <Route path='pricing' element={<Pricing />} >
          <Route index element={<Monthly />}  />
            <Route path='monthly' element={<Monthly />}/>
            <Route path='quaterly' element={<Quaterly />}/>
            <Route path='yearly' element={<Yearly />}/>
          </Route>

          <Route path='work' element={<Work />} />
          <Route path='*' element={<Errorpg />} />

        </Routes>

      <Footer />
      </Router>
      </div>
  )
}

export default App
