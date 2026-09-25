import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
// Axios is a JavaScript library used to communicate with a backend API from React.
//In JS we can use JavaScript's built-in fetch():
// HTTP status codes
// 200 → Success
// 201 → Created
// 400 → Bad Request
// 401 → Unauthorized
// 403 → Forbidden
// 404 → Not Found
// 500 → Internal Server Error


const AxiosConcept = () => {

    const [studentData, setstudentData] = useState([]);
    const [studentTable, setstudentTable] = useState(false);

    function getStudentData() {
        axios.get('http://localhost:8080/student/get-student-data').then((response) => {
            if (response?.data?.status) {
                setstudentData(response?.data?.studentData);
                setstudentTable(true);
            }
            else {
                setstudentData([]);
                setstudentTable(false);
            }
        }).catch((error) => console.log(error))
    }
    useEffect(() => { getStudentData() }, [])
    console.log("studentData>>", studentData)
    return (
        <div>
            {studentTable &&
                (studentData.length > 0 ? (
                    <table className='table table-responsive table-bordered table-striped table-sm mt-5 mx-5 '>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: "#e0ddf7" }}>S.No</th>
                                <th style={{ backgroundColor: "#e0ddf7" }}>Student Name</th>
                                <th style={{ backgroundColor: "#e0ddf7" }}>Student ID</th>
                                <th style={{ backgroundColor: "#e0ddf7" }}>Gender</th>
                                <th style={{ backgroundColor: "#e0ddf7" }}>Email</th>
                                <th style={{ backgroundColor: "#e0ddf7" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentData.map((student, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{student.student_name}</td>
                                        <td>{student.student_id}</td>
                                        <td>{student.gender}</td>
                                        <td>{student.email}</td>
                                        <td>
                                            <button style={{ color: '#f13535', border: 'none', background: 'none', fontSize: '24px' }}><MdDelete /></button>
                                        </td>

                                    </tr>)
                            })}
                        </tbody>
                    </table>) : (<center className='text text-danger'>*** No Data ***</center>))}
        </div>
    )
}

export default AxiosConcept