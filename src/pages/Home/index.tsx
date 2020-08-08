import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import getIssues from 'src/services/getIssues';

const Wrapper = styled.div``;

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
    return <Wrapper>Loading</Wrapper>;
  }

  return <Wrapper>Issues</Wrapper>;
};

export default Home;
