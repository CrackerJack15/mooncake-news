export default function formatTitle(string) {
  const str = string
    .toLowerCase()
    .replace(/-/g, " ")
    .replace(/(?<=\s)\w/g, function (a) {
      return a.toUpperCase();
    });
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
