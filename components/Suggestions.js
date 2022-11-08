import { useEffect, useState } from "react";

const sugg = [
  {
    id: 1,
    avatar:
      "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg",
    username: "virat kohli",
    company: {
      name: "BCC",
    },
  },
  {
    id: 2,
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Tom_Cruise_%2834450932580%29.jpg",
    username: "Tom cruise",
    company: {
      name: "Hollywood",
    },
  },
  {
    id: 3,
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/Angelina_Jolie_by_Gage_Skidmore.jpg",
    username: "Angelina jolie",
    company: {
      name: "Hollywood",
    },
  },
];

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    setSuggestions(sugg);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="rounded-full w-10 h-10 object-cover border p-[2px]"
            src={profile.avatar}
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="text-sm font-semibold">{profile.username}</h2>
            <h3 className="text-sm text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>
          <button className="text-blue-500">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;