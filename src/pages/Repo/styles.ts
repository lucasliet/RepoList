import styled from 'styled-components';

export const RepoInfo = styled.section`
  margin-top: 50px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #737380;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 34px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c88;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color ease-in 0.3s;
    &:hover {
      color: #555;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const Issues = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  a {
    display: flex;
    align-items: center;

    background: white;
    border-radius: 5px;

    width: 100%;
    padding: 24px;

    text-decoration: none;

    transition: transform ease-in-out 0.2s;
    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 10px;
    }

    div {
      display: flex;
      flex: 1;
      flex-direction: column;

      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #303d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
