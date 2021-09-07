import { searchURL } from "../../data/urls";

export default async function handler(req, res) {
  try {
    const { section, page } = req.query;
    const response = await fetch(
      `${searchURL}?q=${section}&show-fields=thumbnail&page=${page}&page-size=40&api-key=${process.env.API_KEY}`
    );
    const data = await response.json();

    res
      .status(200)
      .json({ results: data.response.results, pages: data.response.pages });
  } catch (error) {
    console.log(error);
  }
}
