import Home from "./Component/Home";
import Layout from "./Layout"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NotaPage from "./Pages/NotaPage";
import DoctorLogin from "./Pages/DoctorLogin";

const App=()=> {
  return (
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    {/* <Route path="*" element={<NotaPage/>}/> */}
    </Route>
    </Routes>
    <Routes>
      <Route path="/Doctorlogin" element={<DoctorLogin/>}>
      </Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default  App;
