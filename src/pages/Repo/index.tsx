import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import { RepoInfo, Header, Issues } from './styles';

import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repo: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>
      <RepoInfo>
        <header>
          <img />
          <div>
            <strong />
            <p />
          </div>
        </header>
        <ul>
          <li>
            <strong />
            <span>Stars</span>
          </li>
          <li>
            <strong />
            <span>Forks</span>
          </li>
          <li>
            <strong />
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepoInfo>

      <Issues>
        <Link to="t">
          <div>
            <strong>name</strong>
            <p>t</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repo;
