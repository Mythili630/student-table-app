import React from 'react';
import './App.css';

function App() {
  const students = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
    { id: 3, name: "Charlie", grade: "C" },
    { id: 4, name: "David", grade: "B" },
    { id: 5, name: "Eve", grade: "A" },
    { id: 6, name: "Frank", grade: "D" },
    { id: 7, name: "Grace", grade: "C" },
    { id: 8, name: "Heidi", grade: "B" },
    { id: 9, name: "Ivan", grade: "A" },
    { id: 10, name: "Judy", grade: "C" },
  ];

  return (
    <div className="App">
      <h1>Student Table</h1>
      <table border="1" style={{ margin: 'auto' }}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td><td>{student.name}</td><td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;