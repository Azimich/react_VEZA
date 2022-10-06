//import type { GetStaticPropsContext } from "next";
/*import { Layout } from "../components/common";*/

/*export async function getStaticProps({
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales };
  //  const { pages } = await commerce.getAllPages({ config, preview })
  //  const { categories, brands } = /!*await commerce.getSiteInfo({ config, preview })*!/["aaa","sddsds"]

  return {
    props: {
      pages: "pages err",
      categories: "categories err",
      brands: "brands err",
      config: config,
    },
    revalidate: 200,
  };
}*/

export default function NotFound() {
  return <div>404</div>;
}
