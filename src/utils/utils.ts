export function determineTodaysDate() {
  const D = new Date();
  const year = D.getFullYear()
  const month = D.getMonth().toString().length > 1 ? D.getMonth() + 1 : '0' + (D.getMonth() + 1);
  const day = D.getDate();
  return `${year}-${month}-${day}`;
}
