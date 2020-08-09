import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import getIssues from 'src/services/getIssues';
import Spinner from 'src/atoms/Spinner';
import Issues from 'src/organisms/Issues';
import Pagination from 'src/molecules/Pagination';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Home = () => {
  const [issues, setIssues] = useState([]);
  const [pending, setPending] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  // Methods
  const fetchIssues = useCallback(
    async (pageNumber) => {
      setPending(true);

      try {
        const data = await getIssues({
          owner: 'facebook',
          repo: 'react',
          page: pageNumber,
        });
        setIssues(data);
        if (data.length === 20) {
          setPageCount(pageCount + 1);
        }
        setPending(false);

        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (e) {
        console.log('ERROR', e);
      }
    },
    [pageCount, setPageCount, setIssues]
  );

  const changePage = useCallback(
    (pageNumber: number) => {
      fetchIssues(pageNumber);
      setCurrentPage(pageNumber);
    },
    [fetchIssues, setCurrentPage]
  );

  // LifeCycle
  useEffect(() => {
    if (issues.length === 0) {
      fetchIssues(1);
    }
  }, [fetchIssues, issues.length]);

  // Rendering
  if (pending) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Issues issues={issues} />
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        goToPage={changePage}
      />
    </Wrapper>
  );
};

export default Home;
