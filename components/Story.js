function Story({ img, username }) {
    return (
      <div>
        <img
          className="h-14 w-14 rounded-full p-[3px] border-red-700 border-2 object-cover cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
          src={img}
          alt=""
        />
        <p className="text-xs w-14 truncate text-center">{username}</p>
      </div>
  
    );
  }
  
  export default Story;