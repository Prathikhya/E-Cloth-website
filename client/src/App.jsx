import { Routes, Route } from 'react-router-dom'
import Headers from './pages/Headers'
import Home from './pages/Home'
import Collection from './pages/Collection'



function App() {
  return (
    <>
    <main className='mx-auto w-full max-w-7xl px-1 sm:px-6 lg:px-8'>
      <Headers />
    </main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/collection' element={<Collection />} />
   
    </Routes>
    </>
  )
}

export default App
