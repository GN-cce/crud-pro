import { useEffect, useState } from "react";
import Axios from "axios";


function App() {
  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [contact, setContact] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [empList, setEmpList] = useState([]);

  const [showTable, setShowTable] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null); // Store the edited employee data

  useEffect(() => {
    getEmp();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const addemp = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      dob: dob,
      contact: contact,
      position: position,
      wage: wage,
    })
      .then(() => {
        setEmpList([
          ...empList,
          {
            name: name,
            dob: dob,
            contact: contact,
            position: position,
            wage: wage,
          },
        ]);
        alert("Successfully Added!")
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getEmp = () => {
    Axios.get("http://localhost:3001/getview")
      .then((response) => {
        setEmpList(response.data);
        setShowTable(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const toggleTableView = () => {
    setShowTable(!showTable); // Toggle the value of showTable
  };

  const updateEmp = (id) => {
    Axios.put(`http://localhost:3001/update`, {
      id: editEmployee.id,  // Pass the employee id
      name: editEmployee.name,
      dob: editEmployee.dob,
      contact: editEmployee.contact,
      position: editEmployee.position,
      wage: editEmployee.wage,
    })
      .then(() => {
        // Update the employee data in empList
        const updatedEmpList = empList.map((emp) => {
          if (emp.id === editEmployee.id) {
            return editEmployee;
          }
          return emp;
        });
        setEmpList(updatedEmpList);
        setEditEmployee(null); // Clear the edited employee data
        alert("Successfully Updated!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteEmp = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response)=>{
      setEmpList(empList.filter((val)=>{
        return val.id !== id;
      }));
      alert("Successfully Deleted!");
    })
  }
  

  return (
    <div className="flex flex-col justify-center mt-10 bg-slate-500 p-10">
      <div className="w-[90%] m-auto bg-red-800 p-5 rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]">
        <form onSubmit={handleFormSubmit} className="mt-10">
          <table className="w-full ">
            <tbody>
              <tr className="">
                <td>
                  <label className="text-[20px] mb-5">Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-solid border-2 border-black w-full h-[50px] text-[18px] font-semibold pl-2 mb-5 rounded-xl"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="text-[20px] mb-5">D.O.B:</label>
                </td>
                <td>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDOB(e.target.value)}
                    className="border-solid border-2 border-black w-full h-[50px] text-[18px] font-semibold pl-2 mb-5 rounded-xl"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="text-[20px] mb-5">Contact No:</label>
                </td>
                <td>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="border-solid border-2 border-black w-full h-[50px] text-[18px] font-semibold pl-2 mb-5 rounded-xl"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="text-[20px] mb-5">Position:</label>
                </td>
                <td>
                  <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="border-solid border-2 border-black w-full h-[50px] text-[18px] font-semibold pl-2 mb-5 rounded-xl"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="text-[20px] mb-5">Wage (years):</label>
                </td>
                <td>
                  <input
                    type="number"
                    value={wage}
                    onChange={(e) => setWage(e.target.value)}
                    className="border-solid border-2 border-black w-full h-[50px] text-[18px] font-semibold pl-2 mb-5 rounded-xl"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="submit"
            onClick={addemp}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mt-5 mr-3"
          >
            Add Employee
          </button>
          <div className="">
            <button
              onClick={toggleTableView}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mt-5"
            >
              View Employee
            </button>
            {!showTable && (
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[96%] h-[400px] mt-3 mx-8">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 border-2 border-black"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 border-2 border-black"
                      >
                        DOB
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 border-2 border-black"
                      >
                        Contact
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 border-2 border-black"
                      >
                        Position
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 border-2 border-black"
                      >
                        Salary
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 border-2 border-black"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {empList.map((val, key) => (
                      <tr
                        key={key}
                        className="bg-white border-2 border-black dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="px-6 py-4 border-2 border-black">
                        {editEmployee !== null && editEmployee.id === val.id ? (
                            <input
                              type="text"
                              value={editEmployee.name}
                              onChange={(e) =>
                                setEditEmployee({
                                  ...editEmployee,
                                  name: e.target.value,
                                })
                              }
                            />
                          ) : (
                            val.name
                          )}
                        </td>
                        <td className="px-6 py-4 border-2 border-black">
                        {editEmployee !== null && editEmployee.id === val.id ? (
                            <input
                              type="text"
                              value={editEmployee.dob}
                              onChange={(e) =>
                                setEditEmployee({
                                  ...editEmployee,
                                  dob: e.target.value,
                                })
                              }
                            />
                          ) : (
                            val.dob
                          )}
                        </td>
                        <td className="px-6 py-4 border-2 border-black">
                        {editEmployee !== null && editEmployee.id === val.id ? (
                            <input
                              type="text"
                              value={editEmployee.contact}
                              onChange={(e) =>
                                setEditEmployee({
                                  ...editEmployee,
                                  contact: e.target.value,
                                })
                              }
                            />
                          ) : (
                            val.contact
                          )}
                        </td>
                        <td className="px-6 py-4 border-2 border-black">
                        {editEmployee !== null && editEmployee.id === val.id ? (
                            <input
                              type="text"
                              value={editEmployee.position}
                              onChange={(e) =>
                                setEditEmployee({
                                  ...editEmployee,
                                  position: e.target.value,
                                })
                              }
                            />
                          ) : (
                            val.position
                          )}
                        </td>
                        <td className="px-6 py-4 border-2 border-black">
                        {editEmployee !== null && editEmployee.id === val.id ? (
                            <input
                              type="text"
                              value={editEmployee.wage}
                              onChange={(e) =>
                                setEditEmployee({
                                  ...editEmployee,
                                  wage: e.target.value,
                                })
                              }
                            />
                          ) : (
                            val.wage
                          )}
                        </td>
                        <td className="px-2 py-1 text-right border-2 border-black">
                        {editEmployee !== null && editEmployee.id === val.id ? (
                            <button
                              onClick={updateEmp}
                              className="px-2 font-medium text-blue-600 dark:text-blue-500 hover:bg-black rounded-full hover:text-white"
                            >
                              Save
                            </button>
                          ) : (
                            <button
                              onClick={(id) => setEditEmployee(val)}
                              className="px-2 font-medium text-blue-600 dark:text-blue-500 hover:bg-black rounded-full hover:text-white"
                            >
                              Edit
                            </button>
                          )}
                          <button
                            onClick={() =>{deleteEmp(val.id)}} 
                            className="px-2 font-medium text-blue-600 dark:text-blue-500 hover:bg-black rounded-full hover:text-white">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
