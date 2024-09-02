import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // const titles = [{
  //   name: 'NAME',
  //   email: 'EMAIL',
  //   phone: 'PHONE',
  //   location: 'LOCATION',
  //   dob: 'DATE OF BIRTH',
  //   gender: 'GENDER',
  //   nationality: 'NATIONALITY',
  //   id: 'ID',
  //   enrollmentDate: 'ENROLLMENT DATE',
  // }
  // ];

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10')
      .then(response => {
        const studentData = response.data.results.map(user => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email.trim(),
          phone: user.phone.trim(),
          location: `${user.location.city.trim()}, ${user.location.country.trim()}`,
          dob: new Date(user.dob.date).toLocaleDateString(),
          gender: user.gender.trim(),
          nationality: user.nat.trim(),
          enrollmentDate: new Date(user.registered.date).toLocaleDateString(),
        }));
        setStudents(studentData);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        {/* Data Rows */}
        {students.map((student) => (
          <div
            key={student.id}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-4 p-4 border-b cursor-pointer hover:bg-green-100"
            onClick={() => setSelectedStudent(student)}
          >
            
            <div className=" p-2 truncate">{student.name}</div>
            <div className=" p-2 truncate">{student.phone}</div>
            <div className=" p-2 truncate">{student.location}</div>
            <div className=" p-2 truncate">{student.email}</div>
            <div className=" p-2 truncate">{student.dob}</div>
            <div className=" p-2 truncate">{student.gender}</div>
            <div className=" p-2 truncate">{student.nationality}</div>
            <div className=" p-2 truncate">{student.id}</div>
            <div className=" p-2 truncate">{student.enrollmentDate}</div>
           
              <button className="button hover:text-white ">More</button>
           
          </div>
        ))}

        {/* Student Details Modal */}
        {selectedStudent && (
          <div className="fixed inset-0 bg-white z-10 bg-opacity-50 flex justify-center items-center ">
            <div className="bg-transparent backdrop-blur-sm py-4 lg:p-6 rounded shadow-2xl w-3/4 lg:h-4/6 flex flex-col justify-center px-10">
              <h2 className="text-2xl font-semibold mb-4">{selectedStudent.name}</h2>
              <div className="grid lg:grid-cols-2 grid-cols-1 py-3 lg:py-8 gap-4">
                <p><strong>ID:</strong> {selectedStudent.id}</p>
                <p><strong>EMAIL:</strong> {selectedStudent.email}</p>
                <p><strong>PHONE:</strong> {selectedStudent.phone}</p>
                <p><strong>LOCATION:</strong> {selectedStudent.location}</p>
                <p><strong>DATE OF BIRTH:</strong> {selectedStudent.dob}</p>
                <p><strong>GENDER:</strong> {selectedStudent.gender}</p>
                <p><strong>NATIONALITY:</strong> {selectedStudent.nationality}</p>
                <p><strong>ENROLLMENT DATE:</strong> {selectedStudent.enrollmentDate}</p>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="mt-4  buttonn px-8 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Students;


// {students.map((student) => (
//   <div
//     key={student.id}
//     onClick={() => setSelectedStudent(student)}
//     className="bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer"
//   >
//     <h3 className="text-lg font-semibold">{student.name}</h3>
//     <p>ID: {student.id[10]}</p>
//     {/* <p>NAME: {student.name}</p> */}
//     <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">More</button>
//   </div>
// ))}