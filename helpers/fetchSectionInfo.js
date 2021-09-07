export default async function fetchSectionInfo(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.response.results;
  } catch (error) {
    console.log(error);
  }
}
