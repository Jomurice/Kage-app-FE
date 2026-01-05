// import Header from './component/layout/Header'
// import LastUpdate from './component/layout/LastUpdate'
// import MangaCardHorizontal from './component/ui/MangaCardHorizontal'
// import MangaCard from './component/ui/MangaCardVertical'
// import MangaDetailPage from './page/MangaDetailPage'

import { Toaster } from 'sonner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
function App() {


  return (
    <>
    <Toaster  position="top-right"/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />


          <Route path="*" element = {<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
