import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string) => {
  const newList: Item[] = [];
  const [year, month] = date.split("-");

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }
  return newList;
};

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${addZeroDate(day)}/${addZeroDate(month)}/${addZeroDate(year)}`;
};

export const addZeroDate = (n: number) => {
  return `${n < 10 ? `0${n}` : `${n}`}`;
};

export const formatCurrentMonth = (currentMonth: string) => {
  const [year, month] = currentMonth.split("-");
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return `${months[parseInt(month) - 1]} de ${year}`;
};
