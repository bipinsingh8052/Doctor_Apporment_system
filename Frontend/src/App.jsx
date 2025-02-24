import Home from "./Component/Home";
import Layout from "./Layout"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NotaPage from "./Pages/NotaPage";

const App=()=> {
  return (
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="*" element={<NotaPage/>}/>
    </Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default  App;
