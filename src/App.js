import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies'

// import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./component/layout/Layout";

function App() {


  return (
     <Layout>
    {/* //    <MainNavigation/>  */}
  
      <Routes>

        <Route path='/' exact element={<Home />} />

        <Route path='/movies' element={<Movies />} />


      </Routes>

     </Layout >
  );
}

export default App;