import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md';
// Asynchronous----Asynchronous means JavaScript can start a task and continue doing other work without waiting for that task to finish.

const PromiseConceptAsyncAwait = () => {

    const [studentData, setstudentData] = useState([]);
    const [studentTable, setstudentTable] = useState(false);

    async function getStudentData() {
        try {
            const response =await axios.get('http://localhost:8080/student/get-student-data');
            if (response?.data?.status) {
                setstudentData(response?.data?.studentData);
                setstudentTable(true);
            }
            else {
                setstudentData([]);
                setstudentTable(false);
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { getStudentData() }, [])
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
                                    <tr key={student.student_id}>
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

export default PromiseConceptAsyncAwait