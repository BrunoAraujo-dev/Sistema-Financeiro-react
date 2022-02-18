import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  box-shadow: 0px 0px 10px #ccc;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20PX;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  text-align: left;
  padding: 10px 0;
`;
