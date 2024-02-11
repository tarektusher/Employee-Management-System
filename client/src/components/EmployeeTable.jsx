import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, CircularProgress, Typography } from "@mui/material";
import EmployeeButton from "./EmployeeButton";
import { useGetAllEmployees } from "../hooks/useEmployee";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTable } from "react-table";
import "../App.css";

// const columns = [
//   {
//     field: "id",
//     headerName: "ID",
//     width: 80,
//     headerClassName: "employeeTableHeader",
//   },
//   {
//     field: "firstname",
//     headerName: "First Name",
//     width: 250,
//     headerClassName: "employeeTableHeader",
//   },
//   {
//     field: "lastname",
//     headerName: "Last Name",
//     width: 150,
//     headerClassName: "employeeTableHeader",
//   },
//   {
//     field: "position",
//     headerName: "Position",
//     width: 250,
//     headerClassName: "employeeTableHeader",
//   },
//   {
//     field: "actions",
//     headerName: "Actions",
//     width: 350,
//     headerClassName: "employeeTableHeader",
//     renderCell: (params) => {
//       const id = params.row.id;
//       return (
//         <div>
//           <Button
//             component={Link}
//             to={`/view/${id}`}
//             variant="contained"
//             style={{ backgroundColor: "green", marginRight: "10px" }}
//           >
//             <VisibilityIcon />
//             <Typography>View</Typography>
//           </Button>
//           <Button
//             component={Link}
//             to={`/edit/${id}`}
//             variant="contained"
//             style={{ backgroundColor: "blue", marginRight: "10px" }}
//           >
//             <EditIcon />
//             <Typography>Edit</Typography>
//           </Button>
//           <Button
//             component={Link}
//             to={`/delete/${id}`}
//             variant="contained"
//             color="error"
//             style={{ backgroundColor: "red" }}
//           >
//             <DeleteIcon />
//             <Typography>Delete</Typography>
//           </Button>
//         </div>
//       );
//     },
//   },
// ];

// export default function UserTable() {
//   const [userData, setUserData] = React.useState();
//   const { data, isError, isLoading, error } = useGetAllEmployees();
//   React.useEffect(() => {
//     setUserData(data?.data);
//   });
//   if (isLoading) {
//     return <CircularProgress />;
//   }

//   let rows = [];
//   if (userData) {
//     userData.map((user) => {
//       const tempData = {
//         id: user.emp_id,
//         firstname: user.firstname,
//         lastname: user.lastname,
//         //'age' : user.age,
//         //'department' : user.department,
//         position: user.position,
//         //'salary' : user.salary,
//       };
//       rows.push(tempData);
//     });
//     console.log(rows);
//   }
//   return (
//     <Box>
//       <Typography sx={{ marginTop: "10px" }} variant="h4">
//         Employee Information
//       </Typography>
//       <EmployeeButton />
//       <Box
//         sx={{
//           width: "100%",
//           marginTop: "20px",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <Box
//         >
//           <DataGrid
//             rows={rows}
//             sx={{ fontSize: "18px" }}
//             columns={columns}
//             initialState={{
//               pagination: {
//                 paginationModel: {
//                   pageSize: 10,
//                 },
//               },
//             }}
//             pageSizeOptions={[5]}
//             // checkboxSelection
//             disableRowSelectionOnClick
//             rowsPerPageOptions={[5, 10, 20]}
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// }

const columns = [
  { Header: "ID", accessor: "id" },
  { Header: "First Name", accessor: "firstname" },
  { Header: "Last Name", accessor: "lastname" },
  { Header: "Position", accessor: "position" },
  {
    Header: "Actions",
    Cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div className="flex justify-center align-middle">
          <Button
            component={Link}
            to={`/view/${id}`}
            variant="contained"
            style={{ backgroundColor: "green", marginRight: "10px"}}
          >
            <VisibilityIcon />
            <Typography>View</Typography>
          </Button>
          <Button
            component={Link}
            to={`/edit/${id}`}
            variant="contained"
            style={{ backgroundColor: "blue", marginRight: "10px" }}
          >
            <EditIcon />
            <Typography>Edit</Typography>
          </Button>
          <Button
            component={Link}
            to={`/delete/${id}`}
            variant="contained"
            color="error"
            style={{ backgroundColor: "red" }}
          >
            <DeleteIcon />
            <Typography>Delete</Typography>
          </Button>
        </div>
      );
    },
  },
];

const ReactTableExample = () => {
  const [userData, setUserData] = React.useState();
  const { data, isError, isLoading, error } = useGetAllEmployees();

  React.useEffect(() => {
    setUserData(data?.data);
  }, [data]);

  const tableRows = React.useMemo(() => {
    if (!userData) return [];

    return userData.map((user) => ({
      id: user.emp_id,
      firstname: user.firstname,
      lastname: user.lastname,
      position: user.position,
    }));
  }, [userData]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: tableRows,
    });

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Box>
        <Typography sx={{ marginTop: "10px" }} variant="h4">
          Employee Information
        </Typography>
        <EmployeeButton />
      </Box>
      <div className="mt-[2.5%] w-full h-full ">
        <table {...getTableProps()} style={{ border: "1px solid black" }} className="w-[85%] align-middle text-center ml-[8%]">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: "1px solid black",
                      borderRight: "1px solid black",
                      background: "lightgray",
                      padding: "8px",
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        borderBottom: "1px solid black",
                        borderRight: "1px solid black",
                        padding: "8px",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReactTableExample;
