import dayjs from "dayjs"; 

import 'dayjs/locale/fr'

export function formatHeure(heure) {
  let ne = dayjs(heure).locale("fr").format("HH:mm");

  return ne;
}

export function formatDate(heure) {
  let ne = dayjs(heure).locale('fr').format("DD MMMM YYYY");

  return ne;
}

export function formatDate2(heure) {
  let ne = dayjs(heure).locale('fr').format("dddd le DD MMMM YYYY");

  return ne;
}
export function formatDateHeure(heure) {
  let ne = dayjs(heure).locale("fr").format("DD MM YYYY | HH:mm");

  return ne;
}

export function DiffDay(d1, d2) {
  const date1 = dayjs(d1);
  const date2 = dayjs(d2);

  return date2.diff(date1, "Day");
} 