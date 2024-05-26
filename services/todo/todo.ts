import axios from "axios";
// fetch all blogs
export const fetchAdminBlogListHandler = async () => {
  const res = await axios.get(
    `https://my-app-two-nu-28.vercel.app/api/todo`,
  
  );
  return res;
};