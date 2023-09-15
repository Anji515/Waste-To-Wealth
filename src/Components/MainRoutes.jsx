import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Main from '../Pages/Page-1/Main'
import Cohort from '../Pages/Page-2/Cohort'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cohort1' element={<Cohort/>}/>
    </Routes>
  )
}

export default MainRoutes