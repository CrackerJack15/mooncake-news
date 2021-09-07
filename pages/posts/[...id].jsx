import fetchInfo from "../../helpers/fetchInfo";
import Article from "../../components/article/Article";

export async function getServerSideProps({ params }) {
  // Joining array of params into the whole url
  const id = params.id.join("/");
  const data = await fetchInfo(
    `https://content.guardianapis.com/${id}?show-fields=trailText,body,byline,thumbnail&show-tags=contributor,keyword&show-related=true&api-key=${process.env.API_KEY}`
  );

  return {
    props: {
      data: data.response.content,
      related: data.response.relatedContent,
    },
  };
}

export default function ArticlePage({ data, related }) {
  return <Article {...data} related={related} />;
}
