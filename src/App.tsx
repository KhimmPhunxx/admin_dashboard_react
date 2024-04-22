import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main_Page from './pages/main_page/Main_Page'
import Dashboard_Saff_Page from './pages/staff_dashboard/dashboard_staff/Dashboard_Saff_Page'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main_Page />}></Route>
        <Route path="/dashboard_staff" element={<Dashboard_Saff_Page />}>

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
