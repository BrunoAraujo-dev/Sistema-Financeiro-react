import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 10px 0;
`;

export const Category = styled.div`
  background-color: ${(props) => props.color};
  padding: 10px;
  display: inline-block;
  border-radius: 5px;
  color: white;
`;

export const Value = styled.div`
  color: ${(props) => props.color};
`;
