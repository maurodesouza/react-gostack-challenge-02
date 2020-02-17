import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 16px;
    color: #7159c1;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const Issues = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 5px;

    & + li {
      margin-top: 10px;
    }
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }

      span {
        background: #eee;
        color: #333;
        border-radius: 5px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 5px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const Select = styled.select`
  align-self: flex-end;
  margin-bottom: 15px;
  border: 1px solid #eee;
  padding: 5px;
  border-radius: 5px;
  color: #7159c1;
  font-size: 16px;
  font-weight: bold;
  width: 100px;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;

  span {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    padding: 5px 15px;
    margin: 0 30px;
    background: #7159c1;
    border-radius: 4px;
    cursor: default;
  }
`;

export const ButtonPage = styled.button`
  padding: 0 10px;
  color: #fff;
  background: #7159c1;
  opacity: ${({ disabled }) => disabled && '0.8'};
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  border-radius: 4px;
  border: 0;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
