"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { get_super_admin_centers_data, get_super_admin_token } from "../../../../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { delete_center_request } from "../../../../../redux/reducers/thunks/delete_center";

// Styled components for styling
const Container = styled.div`
  padding: 1.5rem;
  background-color: #f9fafb;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 48rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #1f2937;
`;

const CenterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CenterItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f3f4f6;
  }

  &.selected_item {
    background-color: #dbeafe;
    border-color: #3b82f6;
  }
`;

const CenterDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailLabel = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`;

const DetailValue = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
`;

const SubmitButton = styled.button`
  margin-top: 2rem;
  padding: 0.5rem 1.5rem;
  background-color: #2563eb;
  color: #ffffff;
  font-weight: 500;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const LoadingText = styled.h1`
  text-align: center;
  font-size: 1.125rem;
  font-weight: 500;
`;

export default function SuperAdminDeleteCenter() {

  const centers=useSelector(get_super_admin_centers_data)
  const [status, setStatus] = useState(0);
  const [data, setData] = useState(centers);
  const [selectedCenter, setSelectedCenter] = useState();
const dispatch=useDispatch()
const token=useSelector(get_super_admin_token)
  const handleSubmitDeleteCenter = () => {
    const data={
      token,
      UID:selectedCenter
    }
  dispatch(delete_center_request(data));
  };

  const selectItem = (e) => {
    const id = e.target.id;
    document.getElementById(id)?.classList.toggle("selected_item");
  };
  

  return (
    <>
      {status == 0 ? (
        <Container>
          <ContentWrapper>
            <Title>Available Centers</Title>
            <CenterList>
              {data?.map((item) => (
                <CenterItem
                  id={item.UID}
                  onClick={(e) => {
                    setSelectedCenter(item.UID);
                    selectItem(e);
                  }}
                  key={item.UID}
                >
                  <CenterDetails>
                    <DetailLabel>Center ID</DetailLabel>
                    <DetailValue>{item.UID}</DetailValue>
                  </CenterDetails>
                  <CenterDetails>
                    <DetailLabel>Name</DetailLabel>
                    <DetailValue>{item.name}</DetailValue>
                  </CenterDetails>
                </CenterItem>
              ))}
            </CenterList>
            <div className="flex justify-center mt-8">
              <SubmitButton onClick={handleSubmitDeleteCenter}>
                Submit
              </SubmitButton>
            </div>
          </ContentWrapper>
        </Container>
      ) : (
        <LoadingText>Loading....</LoadingText>
      )}
    </>
  );
}
