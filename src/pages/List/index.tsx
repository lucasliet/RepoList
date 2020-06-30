import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import { Title, Form, RepoList, Error } from './styles';

import logo from '../../assets/logo.svg';
import rootpath from '../../config/GetRoothPath';

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
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@RepoList:repositories');
    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@RepoList:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function addRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!inputRepo) {
      setInputError('digite autor/nome do repositório');
      return;
    }
    try {
      const { data } = await api.get<Repository>(`repos/${inputRepo}`);
      const repository = data;
      setRepositories([...repositories, repository]);
      setInputRepo('');
      setInputError('');
    } catch {
      setInputError('erro na busca desse repositório');
    }
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Digite o Repositório a ser buscado.</Title>
      <Form hasError={!!inputError} onSubmit={addRepository}>
        <input
          value={inputRepo}
          onChange={event => setInputRepo(event.target.value)}
          type="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <RepoList>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`${rootpath}repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </RepoList>
    </>
  );
};

export default List;
