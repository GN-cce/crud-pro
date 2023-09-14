import React from "react";

const ViewEmp = () => {
  return (
    <div
      id="viewEmp"
      className="flex flex-col justify-center mt-10 bg-slate-500 p-10"
    >
      <div className="w-[70%] m-auto bg-red-800 p-5 rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]">
        <form className="mt-10">
          <table className="w-full ">
            <tbody>
              <tr className="">
                <td>
                  <label className="text-[20px] mb-5">Name:</label>
                </td>
                <td>
                  <input
                    type="text"
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
                    className="border-solid border-2 border-black w-full h-[50px] text-[18px] font-semibold pl-2 mb-5 rounded-xl"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mt-5 mr-3"
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ViewEmp;
