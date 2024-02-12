import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { CircularProgress, Typography } from "@mui/material";
import "../../src/Dash.css";
import { useGetAllUsers } from "../hooks/useUser";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useTable } from "react-table";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const columns = [
  { Header: "ID", accessor: "id" },
  { Header: "User Name", accessor: "username" },
  { Header: "Email", accessor: "email" },
];
const UserTable = () => {
  const [userData, setUserData] = React.useState();
  const { data, isError, isLoading, error } = useGetAllUsers();

  React.useEffect(() => {
    setUserData(data?.data);
  }, [data]);
  console.log(userData);
  const tableRows = React.useMemo(() => {
    if (!userData) return [];
    return userData.map((user) => ({
      id: user._id,
      username: user.username,
      email: user.email,
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
      <Typography sx={{ margin: "2vh" }} variant="h4">
        User Information
      </Typography>
      <div className="mt-[2.5%] w-full h-full ">
        <table
          {...getTableProps()}
          style={{ border: "1px solid black" }}
          className="w-[85%] align-middle text-center ml-[8%]"
        >
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

export default UserTable;
