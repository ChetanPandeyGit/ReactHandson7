import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Student from "../Pages/Student"
import Contact from "../Pages/Contact"
import NotFound from "../Pages/NotFound"
import AddorUpdate from "../Pages/AddorUpdate.jsx"


function RouterComp() {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Student />} />
          <Route path="/students-desc" element={<AddorUpdate />} />
          <Route path="/students-desc/:id" element={<AddorUpdate />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
  )
}

export default RouterComp