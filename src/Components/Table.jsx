// import React from "react";

// const Table = ({ data }) => {
//   console.log(data);
//   return (
//     <table>
//       <thead className="sticky top-0 z-10 h-10 bg-white ">
//         <tr className="border-b-2 p-2">
//           {Object.keys(data[0]).map((key, index) => (
//             <th key={index}>{key.toUpperCase()}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((item, index) => (
//           <tr key={index} >
//             {Object.values(item).map((value, index) => (
//               <td key={index} className="p-2">{value}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

// const columns = [
//   { field: 'id', headerName: 'ID',},
//   { field: 'firstName', headerName: 'First name',  },
//   { field: 'lastName', headerName: 'Last name', },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function Table({ data }) {
  const [columns, setColumns] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  // const rows = []
  React.useEffect(() => {
    setColumns(
      Object.keys(data[0]).map((key) => ({
        field: key,
        headerName: key.toUpperCase(),
        width: 150,
      }))
    );

    setRows(
      data.map((row, index) => ({
        ...row,
        id: index + 1,
      }))
    );
  }, [data]);

  return (
    <div className="w-full h-48">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
