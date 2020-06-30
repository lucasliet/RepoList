import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  margin-top: 60px;
  font-size: 28px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background: #4dd354;
    width: 210px;
    height: 70px;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: white;
    font-weight: bold;
    transition: background-color ease-in-out 0.2s;

    &:hover {
      background: ${shade(0.2, '#4dd354')};
    }
  }
`;

export const RepoList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  max-width: 700px;

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

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
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

export const Error = styled.span`
  display: block;
  margin-top: 6px;
  color: #c53030;
`;
