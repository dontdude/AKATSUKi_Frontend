import { useState } from "react";
import {
    DotsHorizontalIcon,
    HeartIcon,
    HeartIconFilled,
    PaperAirplaneIcon,
    ChatIcon,
    BookmarkIcon,
    EmojiHappyIcon,
  } from "@heroicons/react/outline";

  function Post({ username, userImg, img, caption }) {

    const [iconColored, setIconColored] = useState(false);

    return (
      // default value for box border using rounded
      <div className="bg-stone-800 my-7 shadow-lg rounded-xl">

        {/* Post/User detail */}
        <div className="flex items-center p-5">
          <img
            className="rounded-full h-12 w-12 object-fill border p-1 mr-3 "
            src={userImg}
            alt=""
          />
          <p className="flex-1 font-bold">{username}</p>
          <DotsHorizontalIcon className="h-5" />
        </div>

        {/* Post image */}
        <div className="bg-stone-900 max-h-screen flex justify-center">
          <img className="object-contain" src={img} alt="" />
        </div>
        
         {/* Post icon */}
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">

            <div onClick={() => setIconColored(!iconColored)}>
              {iconColored ? <HeartIcon className="btn text-red-700 " /> : <HeartIcon className="btn " />}
            </div>

            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn rotate-45" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
        
        {/* Post desc */}
        <p className="p-5 truncate max-w-lg mx-auto">
          {caption}
        </p>

        {/* comment input box */}
        <form className="flex p-4 items-center">
          <EmojiHappyIcon className="btn pr-5" />
          <input
            type="text"
            placeholder="Add a comment.."
            className="border-none rounded-lg bg-stone-700 flex-1 focus:ring-0 outline-none"
          />
          <button className="text-blue-500  px-5">Post</button>
        </form>
      </div>
    );
  }
  
  export default Post;