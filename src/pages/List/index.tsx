import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, RepoList } from './styles';

import logo from '../../assets/logo.svg';

const List: React.FC = () => (
  <>
    <img src={logo} alt="Github Explorer" />
    <Title>Digite o Repositório a ser buscado.</Title>
    <Form>
      <input type="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <RepoList>
      <Link to="/repository">
        <img />
        <div>
          <strong>Nome</strong>
          <p>Descricao</p>
        </div>
        <FiChevronRight />
      </Link>
    </RepoList>
  </>
);

export default List;
