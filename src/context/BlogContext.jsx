import { createContext, useEffect, useState } from "react";
import { blogData } from "../blogData";

const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [blog, setBlog] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const selectBlog = (blogContent) => {
    setSelectedBlog(blogContent);
  };

  console.log(selectedBlog);

  useEffect(() => {
    setBlog(blogData);
  }, []);

  const value = {
    blog,
    selectBlog,
    selectedBlog,
  };
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export default BlogContextProvider;

export { BlogContext, BlogContextProvider };
