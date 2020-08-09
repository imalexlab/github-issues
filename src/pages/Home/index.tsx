import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import getIssues from 'src/services/getIssues';
import Spinner from 'src/atoms/Spinner';
import Search from 'src/organisms/Search';
import Issues from 'src/organisms/Issues';
import Pagination from 'src/molecules/Pagination';
import { Issue } from 'src/utils/types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [pending, setPending] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [repoValues, setRepoValues] = useState({ repo: '', owner: '' });
  const [shouldFetch, setShouldFetch] = useState(false);
  const [error, setError] = useState('');

  // Methods
  const fetchIssues = useCallback(
    async (pageNumber) => {
      setPending(true);

      try {
        const data = await getIssues({
          owner: repoValues.owner,
          repo: repoValues.repo,
          page: pageNumber,
        });
        if (!Array.isArray(data)) {
          throw new Error();
        }

        setIssues(data);
        if (data.length === 20) {
          setPageCount(pageCount + 1);
        }
        setPending(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (e) {
        setError('Invalid repository');
        setPending(false);
      }
    },
    [repoValues.owner, repoValues.repo, pageCount]
  );

  const changePage = useCallback(
    (pageNumber: number) => {
      fetchIssues(pageNumber);
      setCurrentPage(pageNumber);
    },
    [fetchIssues]
  );

  const handleSearch = useCallback(
    ({ owner, repo }: { owner: string; repo: string }) => {
      setRepoValues({ owner, repo });
      setShouldFetch(true);
      setError('');
    },
    []
  );

  const handleReset = useCallback(() => {
    setPending(true);
    setIssues([]);
    setCurrentPage(1);
    setPageCount(1);
    setRepoValues({ owner: '', repo: '' });
  }, [setIssues, setRepoValues, setCurrentPage, setPageCount]);

  useEffect(() => {
    if (shouldFetch) {
      fetchIssues(1);
      setShouldFetch(false);
    }
  }, [fetchIssues, shouldFetch]);

  // Rendering
  return (
    <Wrapper>
      <Search
        handleSearch={handleSearch}
        handleReset={handleReset}
        repo={repoValues.repo}
        owner={repoValues.owner}
      />
      {pending && <Spinner />}
      {error !== '' && !pending && <p>{error}</p>}

      {error === '' && !pending && issues.length === 0 && <p>No issues :)</p>}
      {error === '' && !pending && issues.length > 0 && (
        <>
          <Issues issues={issues} />
          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            goToPage={changePage}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Home;
