import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Container,
  Typography,
  Button,
} from "@material-ui/core";
const tableData = [
  {
    id: 1,
    first_name: "Beret",
    last_name: "Lennard",
    email: "blennard0@pcworld.com",
    gender: "Female",
    ip_address: "213.196.192.52",
  },
  {
    id: 2,
    first_name: "Tera",
    last_name: "Choke",
    email: "tchoke1@theatlantic.com",
    gender: "Male",
    ip_address: "101.152.241.70",
  },
  {
    id: 3,
    first_name: "Lyn",
    last_name: "Bowart",
    email: "lbowart2@odnoklassniki.ru",
    gender: "Male",
    ip_address: "188.127.126.94",
  },
  {
    id: 4,
    first_name: "Bert",
    last_name: "Huckett",
    email: "bhuckett3@tinypic.com",
    gender: "Female",
    ip_address: "247.156.243.148",
  },
  {
    id: 5,
    first_name: "Drew",
    last_name: "Jenicke",
    email: "djenicke4@businessinsider.com",
    gender: "Male",
    ip_address: "0.185.35.172",
  },
];

const Contact = () => {
  return (
    <>
      <div>
        <div className="mx-4 my-2 text-center">
          <Typography variant="h6">USER LIST</Typography>
        </div>
        <Container className="my-4">
          <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
            <Table aria-label="simple table" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Lats Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Action</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">
                      <Button
                        align="center"
                        variant="contained"
                        color="primary"
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      <Button variant="outlined" color="secondary">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    </>
  );
};

export default Contact;
