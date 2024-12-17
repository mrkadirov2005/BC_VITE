import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // For Vite, using react-router-dom
import styled from "styled-components";
import { Data, getCentersData, SAMPLE_CENTER } from "../../api/center_request";
import { formatCenterData } from "./format";

export default function CenterPage() {
  const { id } = useParams(); // Assuming Vite uses react-router-dom
  const [centers, setData] = useState(SAMPLE_CENTER);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    getCentersData({ setData, setStatus });
  }, [id]);

  const currentCenter = status === 1 ? centers?.find((item) => item._id === id) : undefined;
  const allExtracted = formatCenterData(currentCenter);
  const allExtractedArray = Object.entries(allExtracted);

  return (
    <PageWrapper>
      <ContentContainer>
        {status === 0 || !allExtracted ? (
          <Title>Loading data...</Title>
        ) : (
          <>
            <Heading>Center Details</Heading>
            <DetailsGrid>
              {allExtractedArray.map(([key, value], index) => (
                <DetailItem key={index} label={key} value={value} />
              ))}
            </DetailsGrid>
          </>
        )}
      </ContentContainer>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 64rem;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
`;

const Detail = styled.div`
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const Label = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #4b5563;
`;

const Value = styled.p`
  font-size: 1.25rem;
  color: #1f2937;
`;

// Functional DetailItem component for each detail
function DetailItem({ label, value }) {
  return (
    <Detail>
      <Label>{label}:</Label>
      <Value>{value}</Value>
    </Detail>
  );
}
