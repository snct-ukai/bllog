import { firestore } from "./firestore";

export type articleLink = {
  title: string,
  path: string,
}

export const getLinks = async() => {
  const links : articleLink[] = [];
  const articles = await firestore.collection("blog").get();

  articles.docs.map(doc => {
    links.push({title: doc.get("title"), path: doc.id})
  })
  return links;
}