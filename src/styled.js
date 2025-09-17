import styled from "styled-components";

export const Card = styled.div`
  width: 250px;
  padding: 20px;
  border-radius: 12px;
  margin: 10px auto;
  text-align: center;
  background: ${(props) => (props.dark ? "#333" : "#fff")};
  color: ${(props) => (props.dark ? "#fff" : "#000")};
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
`;

export const Status = styled.p`
  color: ${(props) => (props.active ? "green" : "red")};
  font-weight: bold;
`;
