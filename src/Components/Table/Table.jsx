import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Table.css"

export default function Table({ data }) {
  const [columns, setColumns] = React.useState([]);
  const [rows, setRows] = React.useState([]);
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
    <div className="w-full h-51 rounded">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
