"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  get_super_admin_message,
  get_super_admin_status,
  get_super_admin_students,
  get_super_admin_token,
} from "../../../../redux/selectors";
import styled from "styled-components";
import { get_students_request } from "../../../../redux/reducers/thunks/get_students";

// Styled Components
const Section = styled.section`
  width:100%;
  padding: 1.5rem;
  background-color: #f9fafb;
  min-height: 100vh;
`;

const Header = styled.header`
  width: 100%;
  text-align: center;
  background: linear-gradient(to right, #3b82f6, #14b8a6);
  color: white;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 2rem;
    margin: 0;
  }
`;

const SearchBar = styled.input`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  width: 20rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #e5e7eb;
    padding: 0.75rem;
    text-align: center;
  }

  th {
    background-color: #eff6ff;
    color: #1f2937;
    font-weight: 600;
  }

  tr:nth-child(even) {
    background-color: #f9fafb;
  }

  tr:hover {
    background-color: #f3f4f6;
  }
`;

const Message = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  font-weight: bold;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  background-color: ${(props) => (props.success ? "#22c55e" : "#ef4444")};
`;

const NoDataRow = styled.tr`
  td {
    text-align: center;
    color: #6b7280;
    padding: 1rem;
  }
`;

const Load_data_button=styled.button` 
width:80px;
height:33px;
border-radius:11px;
border:none;
background-color:white;
box-shadow:2px 2px 2px 2px grey;

`

export default function SuperAdminStudentsComp() {
  const dispatch=useDispatch()
  const token=useSelector(get_super_admin_token)
  const students = useSelector(get_super_admin_students);
  const message = useSelector(get_super_admin_message);
  const status = useSelector(get_super_admin_status);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredStudents = students.filter(
    (student) =>
      student.firstname.toLowerCase().includes(search.toLowerCase()) ||
      student.lastname.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Section>
      {/* Page Title */}
      <Header>
        <h1>Students Management</h1>
      </Header>

      {/* Search Bar */}
      <div style={{ marginBottom: "1.5rem", textAlign: "center",display:"flex","alignItems":"center","justifyContent":"space-around"}}>
        <SearchBar
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search for students..."
        />
        <Load_data_button type="button" onClick={(e)=>{dispatch(get_students_request({token}))}}>Load Data</Load_data_button>
      </div>

      {/* Students Table */}
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Rank</th>
              <th>Logged In</th>
              <th>Group ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student._id}>
                  <td>{`${student.firstname} ${student.lastname}`}</td>
                  <td>{student.username}</td>
                  <td>{student.email}</td>
                  <td>{student.phone_number}</td>
                  <td>{"rank"}</td>
                  <td>{student.loggedIn ? "Yes" : "No"}</td>
                  <td>{student.group_id}</td>
                </tr>
              ))
            ) : (
              <NoDataRow>
                <td colSpan="7">No students found</td>
              </NoDataRow>
            )}
          </tbody>
        </Table>
      </TableContainer>

      {/* Message Notification */}
      {message && <Message success={!!message}>{message}</Message>}
    </Section>
  );
}
