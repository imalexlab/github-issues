import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import getIssues from 'src/services/getIssues';
import Spinner from 'src/atoms/Spinner';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const [issues, setIssues] = useState([]);
  const [pending, setPending] = useState(true);

  // LifeCycle
  const fetchIssues = useCallback(async () => {
    try {
      const data = await getIssues({ owner: 'facebook', repo: 'react' });
      setIssues(data);
    } catch (e) {
      console.log('ERROR', e);
    }
  }, [setIssues]);

  useEffect(() => {
    fetchIssues();

    if (issues.length > 0) {
      setPending(false);
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

  return <Wrapper>Issues</Wrapper>;
};

export default Home;
