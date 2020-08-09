import React from 'react';
import styled from 'styled-components';

interface Pagination {
  pageCount: number;
  currentPage: number;
  goToPage: (pageNumber: number) => void;
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  padding: 0;
  color: #565c88;
`;

const PreviousNextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  background: transparent;
  border: 0;
  color: #565c88;
  font-size: 1rem;

  :hover {
    text-decoration: underline;
  }
`;

const Page = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  background: transparent;
  border: 0;
  color: #565c88;
  font-size: 1rem;

  :hover {
    border: solid 1px #565c88;
    border-radius: 50%;
  }
`;

const ActivePage = styled.p`
  background-color: #565c88;
  border: solid 1px #565c88;
  border-radius: 50%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  font-size: 1rem;
`;

export default function Pagination({
  pageCount,
  currentPage,
  goToPage,
}: Pagination) {
  return (
    <Wrapper>
      {currentPage > 1 && (
        <>
          <PreviousNextButton onClick={() => goToPage(currentPage - 1)}>
            Previous
          </PreviousNextButton>
          <Page onClick={() => goToPage(currentPage - 1)}>
            {currentPage - 1}
          </Page>
        </>
      )}
      <ActivePage>{currentPage}</ActivePage>
      {currentPage < pageCount && (
        <>
          <Page onClick={() => goToPage(currentPage + 1)}>
            {currentPage + 1}
          </Page>
          <PreviousNextButton onClick={() => goToPage(currentPage + 1)}>
            Next
          </PreviousNextButton>
        </>
      )}
    </Wrapper>
  );
}
