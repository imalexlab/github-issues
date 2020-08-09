import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #565c88;
  margin: 0 auto;
  width: 75%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Label = styled.label`
  font-size: 2rem;
  margin-top: 2rem;
  text-align: center;
`;

const Input = styled.input`
  margin: 1rem;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #565c88;
  background: transparent;
  border-radius: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin: 1rem;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #565c88;
  background: transparent;
  color: #565c88;
  border-radius: 5px;

  :hover {
    border: 1px solid #565c88;
    background: #565c88;
    color: #f4f5fa;
  }

  :disabled {
    color: #bdc5ff;
    border: 1px solid #bdc5ff;
    background: transparent;
    cursor: not-allowed;
  }
`;

interface Props {
  handleSearch: ({ owner, repo }: { owner: string; repo: string }) => void;
  handleReset: () => void;
  owner: string;
  repo: string;
}

export default function Search({
  handleSearch,
  handleReset,
  owner,
  repo,
}: Props) {
  const [currentOwner, setCurrentOwner] = useState('');
  const [currentRepo, setCurrentRepo] = useState('');

  useEffect(() => {
    setCurrentOwner(owner);
    setCurrentRepo(repo);
  }, [owner, repo]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSearch({ owner: currentOwner, repo: currentRepo });
  };

  const onReset = (event: React.FormEvent) => {
    event.preventDefault();
    setCurrentOwner('');
    setCurrentRepo('');
    handleReset();
  };

  const changeOwner = useCallback((e) => {
    setCurrentOwner(e.target.value);
  }, []);

  const changeRepo = useCallback((e) => {
    setCurrentRepo(e.target.value);
  }, []);

  return (
    <>
      <Wrapper onSubmit={onSubmit} onReset={onReset}>
        <Label htmlFor="issues">
          Search with the name of the repository's owner and the repository name
        </Label>
        <Container>
          <Input
            data-testid="input-owner"
            type="text"
            id="owner"
            aria-label="owner"
            onChange={changeOwner}
            value={currentOwner}
            placeholder="facebook"
          />
          <Input
            data-testid="input-repo"
            type="text"
            id="repository"
            aria-label="repository"
            onChange={changeRepo}
            value={currentRepo}
            placeholder="react"
          />
          <ButtonWrapper>
            <Button
              type="submit"
              data-testid="search"
              onClick={onSubmit}
              disabled={currentOwner === '' || currentRepo === ''}
            >
              Search
            </Button>
            <Button type="reset" onClick={onReset}>
              Reset
            </Button>
          </ButtonWrapper>
        </Container>
      </Wrapper>
    </>
  );
}
