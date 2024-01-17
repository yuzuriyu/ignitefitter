import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import facebook from "../assets/facebook--dark.png";
import twitter from "../assets/twitter--dark.png";
import retweet from "../assets/retweet--dark.png";
import star from "../assets/star--dark.png";
import { useNavigate } from "react-router-dom";

export default function SelectedBlog() {
  const { selectedBlog } = useContext(BlogContext);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="w-11/12 m-auto md:w-10/12 py-40 ">
      {selectedBlog && (
        <div className="">
          <h1 className="mb-4 text-3xl font-bold">{selectedBlog.title}</h1>
          <img
            src={selectedBlog.image}
            alt=""
            className="w-[700px] h-[350px] object-cover"
          />
          <p className="py-4">{selectedBlog.introduction}</p>
          {selectedBlog.tip1 && (
            <p className="font-bold pb-2">1. {selectedBlog.tip1}</p>
          )}
          <p className="mb-4">{selectedBlog.tip1Content}</p>
          {selectedBlog.tip2 && (
            <p className="font-bold pb-2">2. {selectedBlog.tip2}</p>
          )}
          <p className="mb-4">{selectedBlog.tip2Content}</p>
          {selectedBlog.tip3 && (
            <p className="font-bold pb-2">3. {selectedBlog.tip3}</p>
          )}
          <p className="mb-4">{selectedBlog.tip3Content}</p>
          {selectedBlog.tip4 && (
            <p className="font-bold pb-2">4. {selectedBlog.tip4}</p>
          )}
          <p className="mb-4">{selectedBlog.tip4Content}</p>
          {selectedBlog.tip5 && (
            <p className="font-bold pb-2">5. {selectedBlog.tip5}</p>
          )}
          <p className="mb-4">{selectedBlog.tip5Content}</p>
          <p>{selectedBlog.conclusion}</p>
          <div className="pt-8">
            <p className="text-sm py-4">Share this:</p>
            <div className="flex gap-2">
              <div className="flex items-center border rounded-lg px-2 py-1">
                <img src={twitter} alt="" className="w-5 mr-2" />
                <p className="text-sm">Twitter</p>
              </div>
              <div className="flex items-center border rounded-lg px-2 py-1">
                <img src={facebook} alt="" className="w-5 mr-2" />
                <p className="text-sm">Facebook</p>
              </div>
              <div className="flex items-center border rounded-lg px-2 py-1">
                <img src={retweet} alt="" className="w-5 mr-2" />
                <p className="text-sm">Reblog</p>
              </div>
              <div className="flex items-center border rounded-lg px-2 py-1">
                <img src={star} alt="" className="w-4 mr-2" />
                <p className="text-sm">Like</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between py-8">
            <p className="border-b text-sm border-black">{selectedBlog.date}</p>
            <p className="border-b text-sm border-black">Fitness</p>
          </div>
          <div
            className="flex items-center pt-8 group"
            onClick={() => goBack()}
          >
            <p className="mr-2">←</p>
            <p className="group-hover:border-b border-black">Previous</p>
          </div>
        </div>
      )}
    </div>
  );
}
