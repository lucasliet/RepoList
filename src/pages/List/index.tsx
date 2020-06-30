import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import { Title, Form, RepoList } from './styles';

import logo from '../../assets/logo.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const List: React.FC = () => {
  const [inputRepo, setInputRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function addRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const { data } = await api.get<Repository>(`repos/${inputRepo}`);
    const repository = data;
    setRepositories([...repositories, repository]);
    setInputRepo('');
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Digite o Repositório a ser buscado.</Title>
      <Form onSubmit={addRepository}>
        <input
          value={inputRepo}
          onChange={event => setInputRepo(event.target.value)}
          type="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <RepoList>
        {repositories.map(repository => (
          <Link key={repository.full_name} to="/repository">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight />
          </Link>
        ))}
      </RepoList>
    </>
  );
};

export default List;
