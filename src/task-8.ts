import axios from "axios";
interface IPost {
  id: number;
  title: string;
  body: string;
}
async function fetchPosts() {
  const response = await axios.get<IPost[]>(
    "<https://jsonplaceholder.typicode.com/posts>"
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
