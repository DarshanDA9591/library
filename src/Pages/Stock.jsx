import React from 'react'
import MainAllData from "../Components/MainAllData"
import Students from "../Components/students"


const Stock = () => {
  return (
    <>
    <Students label="Students" isBtnHide={true} texts={['Name', 'Student ID','Cource', 'Semester', 'Gender', 'Age',  'Phone No']} btnContent={["Refresh" , "Filter"]} optionInput={false} link={true} detailBtn={true} border="1px solid #118CF0" color="#118CF0"  addRoutes1="/addStudent"/>
  </>
  )
}

export default Stock