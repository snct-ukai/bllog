import { firestore } from "./firestore";

export const getPaths = async() => {
  const articles = await firestore.collection("blog").get();
  const Paths = articles.docs.map(doc => {
    return doc.id
  })
  return Paths;
}