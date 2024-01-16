import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export default function SelectedBlog() {
  const { selectedBlog } = useContext(BlogContext);
  return (
    <div className="w-11/12 m-auto md:w-10/12 py-40 ">
      {selectedBlog && (
        <div>
          <h1 className="mb-4 text-3xl font-bold">{selectedBlog.title}</h1>
          <img
            src={selectedBlog.image}
            alt=""
            className="w-[700px] h-[350px] object-cover"
          />
          <p className="py-4">{selectedBlog.introduction}</p>
          <p className="font-bold pb-2">1. {selectedBlog.tip1}</p>
          <p className="mb-4">{selectedBlog.tip1Content}</p>
          <p className="font-bold pb-2">2. {selectedBlog.tip2}</p>
          <p className="mb-4">{selectedBlog.tip1Content}</p>
          <p className="font-bold pb-2">3. {selectedBlog.tip3}</p>
          <p className="mb-4">{selectedBlog.tip1Content}</p>
          <p className="font-bold pb-2">4. {selectedBlog.tip4}</p>
          <p className="mb-4">{selectedBlog.tip1Content}</p>
          <p className="font-bold pb-2">5. {selectedBlog.tip5}</p>
          <p className="mb-4">{selectedBlog.tip1Content}</p>
          <p>{selectedBlog.conclusion}</p>
        </div>
      )}
    </div>
  );
}
