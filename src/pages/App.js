import React from 'react';
import { useState } from 'react';
import { Container } from "./styles";
import { Input } from '../components/Input/index';
import { Button } from '../components/Button/index';
import { ItemRepo } from "../components/ItemRepo";
import { api } from "../services/api";
import githubLogo from '../assets/github.png';

function App() {
  const [currentRepo, setCurrentRepo] = useState(''); // repo being searched
  const [repos, setRepos] = useState([]); // Array of already searched repos

  const handleSearchRepo = async () => 
  {
    const {data} = await api.get(`repos/${currentRepo}`);

    if (data.id)
    {
      const isExist = repos.find(repo => repo.id === data.id);

      if (!isExist)
      {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return;
      };
      alert('Repositório não encontrado');
    };
  };

  const handleRemoveRepo = (id) =>
  {
    console.log('Removendo registro ', id);
    const updatedRepos = repos.filter((repo) => repo.id !== id);
    setRepos(updatedRepos);
  }

  return (
    <Container>
      <img src={githubLogo} alt="GitHub Logo" width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button value={"Buscar"} onClick={handleSearchRepo} />
      {
        repos.map(repo => 
          <ItemRepo handleRemoveRepoItemRepo={handleRemoveRepo} repo={repo} />
        )}
    </Container>
  );
};

export default App;