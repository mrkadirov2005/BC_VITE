"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  get_super_admin_groups,
  get_super_admin_message,
  get_super_admin_status,
  get_super_admin_token,
} from "../../../../redux/selectors";
import { get_groups_request } from "../../../../redux/reducers/thunks/get_groups";
import styled from "styled-components";

// Styled Components
const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8fafc;
`;

const Header = styled.header`
  width: 100%;
  text-align: center;
  background: linear-gradient(to right, #059669, #14b8a6);
  color: white;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  h1 {
    font-size: 2rem;
    margin: 0;
  }
`;

const SubHeading = styled.h2`
  width: 100%;
  text-align: center;
  color: #059669;
  background-color: #ecfdf5;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1.25rem;
`;

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #e2e8f0;
    padding: 0.75rem;
    text-align: center;
  }

  th {
    background-color: #ecfdf5;
    color: #374151;
    font-weight: 600;
  }

  tr:nth-child(even) {
    background-color: #f9fafb;
  }

  tr:hover {
    background-color: #f3f4f6;
  }
`;

const Loading = styled.div`
  width: 100%;
  text-align: center;
  background-color: #fb923c;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
`;

const Button = styled.button`
  background-color: #059669;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #047857;
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

export default function SuperAdminGroupsComp() {
  const GroupsData = useSelector(get_super_admin_groups);
  const message = useSelector(get_super_admin_message);
  const status = useSelector(get_super_admin_status);
  const dispatch = useDispatch();
  const token = useSelector(get_super_admin_token);

  const RenderGroups = () => {
    return (
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Center</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            {GroupsData.length > 0 ? (
              GroupsData.map((group, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{group.name}</td>
                  <td>{group.center_id}</td>
                  <td>{group.teacher_id}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No data loaded yet</td>
              </tr>
            )}
          </tbody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Section>
      <Header>
        <h1>Welcome to Groups Page!</h1>
      </Header>

      <SubHeading>Manage Groups Easily</SubHeading>

      {status === "pending" ? (
        <Loading>Loading...</Loading>
      ) : (
        <>
          <Button onClick={() => dispatch(get_groups_request({ token }))}>
            Load Data
          </Button>
          <RenderGroups />
          {message && <Message success={!!message}>{message}</Message>}
        </>
      )}
    </Section>
  );
}
