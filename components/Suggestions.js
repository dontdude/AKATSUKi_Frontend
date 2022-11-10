import { useEffect, useState } from "react";

const sugg = [
  {
    id: 1,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa12Aplu5JLaKVCqNW0tZxZ2JAotp8IPXBtg&usqp=CAU",
    username: "Saiyan",
    company: {
      name: "DragonBall",
    },
  },
  {
    id: 2,
    avatar:
      "https://staticg.sportskeeda.com/editor/2022/06/4b665-16560787404655.png",
    username: "the_hokage",
    company: {
      name: "Naruto",
    },
  },
  {
    id: 3,
    avatar:
      "http://pm1.narvii.com/6383/2cb0f321852ac44e6c637ac7832af70836b85f31_00.jpg",
    username: "Black_Prince",
    company: {
      name: "Code Geass",
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
              From anime {profile.company.name}
            </h3>
          </div>
          <button className="text-blue-500">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
