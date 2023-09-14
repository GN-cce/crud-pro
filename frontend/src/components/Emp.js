import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Emp() {
  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [contact, setContact] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [empList, setEmpList] = useState([]);

  const [showTable, setShowTable] = useState(false);

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

  return (
    <div className="flex flex-col justify-center mt-10 bg-slate-500 p-10">
      <div className="w-[70%] m-auto bg-red-800 p-5 rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]">
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
              onClick={getEmp}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mt-5"
            >
              View Employee
            </button>
            {showTable && (
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[900px] h-[400px] mt-3 mx-8">
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
                          {val.name}
                        </td>
                        <td className="px-6 py-4 border-2 border-black">
                          {val.dob}
                        </td>
                        <td className="px-6 py-4 border-2 border-black">
                          {val.contact}
                        </td>
                        <td className="px-6 py-4 border-2 border-black">
                          {val.position}
                        </td>
                        <td className="px-6 py-4 border-2 border-black">
                          {val.wage}
                        </td>
                        <td className="px-2 py-1 text-right border-2 border-black">
                          <Link
                            to={`/edit/${val.id}`} // Assuming 'id' is the unique identifier for each employee
                            className="px-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </Link>
                          <a
                            href="/"
                            className="px-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Delete
                          </a>
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

export default Emp;
