import { searchURL } from "../../data/urls";

export default async function handler(req, res) {
  const { value, page } = req.query;

  const resultsRaw = await fetch(
    `${searchURL}?q=${value}&page=${page}&page-size=20&show-fields=thumbnail&api-key=${process.env.API_KEY}`
  );
  const results = await resultsRaw.json();

  res.status(200).json({
    pages: results.response.pages,
    results: results.response.results,
  });
}
