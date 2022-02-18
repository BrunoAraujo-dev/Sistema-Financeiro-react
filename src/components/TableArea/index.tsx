import TableItem from "../TableItem";
import { Item } from "../../types/Item";
import * as C from "./styles";

type Props = {
  list: Item[];
};

const TableArea = ({ list }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={150}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Title</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
};

export default TableArea;
