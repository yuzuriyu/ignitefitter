import { blogData } from "../blogData";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";

export default function Blog() {
  const { selectBlog } = useContext(BlogContext);
  return (
    <div className="w-11/12 m-auto md:w-10/12 py-40 grid grid-cols-1 gap-20 md:gap-10 md:grid-cols-2 ">
      {blogData.map((data, index) => (
        <Link
          to={`/blog/${data.id}`}
          onClick={() => selectBlog(data)}
          key={data.id}
        >
          <h1 className="mb-4 text-3xl font-bold">{data.title}</h1>
          <img
            src={data.image}
            alt=""
            className="w-[700px] h-[350px] object-cover"
          />
          <p className="py-4">{data.introduction}</p>
          <div className="flex justify-between">
            <p className="border-b border-black">{data.date}</p>
            <p className="border-b border-black">Fitness</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
