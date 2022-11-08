import { useEffect, useState } from "react";
import Story from "./Story";
const sugg = [
  {
    id: 1,
    avatar:
      "https://staticg.sportskeeda.com/editor/2022/06/4b665-16560787404655.png",
    username: "the_hokage",
    company: {
      name: "Naruto",
    },
  },
  {
    id: 2,
    avatar:
      "https://i.pinimg.com/736x/2b/ee/66/2bee660fcfdcc407bd3e29b01cc5e1a3.jpg",
    username: "sun_breather",
    company: {
      name: "Tanjiro",
    },
  },
  {
    id: 3,
    avatar:
      "https://fictionhorizon.com/wp-content/uploads/2022/06/Light-Yagami-quotes-from-death-note.jpg",
    username: "kira",
    company: {
      name: "Yagami",
    },
  },
  {
    id: 3,
    avatar:
      "https://fictionhorizon.com/wp-content/uploads/2022/06/Light-Yagami-quotes-from-death-note.jpg",
    username: "kira",
    company: {
      name: "Yagami",
    },
  }, {
    id: 3,
    avatar:
      "https://fictionhorizon.com/wp-content/uploads/2022/06/Light-Yagami-quotes-from-death-note.jpg",
    username: "kira",
    company: {
      name: "Yagami",
    },
  }, {
    id: 3,
    avatar:
      "https://fictionhorizon.com/wp-content/uploads/2022/06/Light-Yagami-quotes-from-death-note.jpg",
    username: "kira",
    company: {
      name: "Yagami",
    },
  }, {
    id: 3,
    avatar:
      "https://fictionhorizon.com/wp-content/uploads/2022/06/Light-Yagami-quotes-from-death-note.jpg",
    username: "kira",
    company: {
      name: "Yagami",
    },
  }, {
    id: 3,
    avatar:
      "https://fictionhorizon.com/wp-content/uploads/2022/06/Light-Yagami-quotes-from-death-note.jpg",
    username: "kira",
    company: {
      name: "Yagami",
    },
  }, {
    id: 3,
    avatar:
      "https://fictionhorizon.com/wp-content/uploads/2022/06/Light-Yagami-quotes-from-death-note.jpg",
    username: "kira",
    company: {
      name: "Yagami",
    },
  }, {
    id: 3,
    avatar:
      "https://fictionhorizon.com/wp-content/uploads/2022/06/Light-Yagami-quotes-from-death-note.jpg",
    username: "kira",
    company: {
      name: "Yagami",
    },
  }, {
    id: 3,
    avatar:
      "https://fictionhorizon.com/wp-content/uploads/2022/06/Light-Yagami-quotes-from-death-note.jpg",
    username: "kira",
    company: {
      name: "Yagami",
    },
  }, {
    id: 3,
    avatar:
      "https://fictionhorizon.com/wp-content/uploads/2022/06/Light-Yagami-quotes-from-death-note.jpg",
    username: "kira",
    company: {
      name: "Yagami",
    },
  },{
    id: 3,
    avatar:
      "https://fictionhorizon.com/wp-content/uploads/2022/06/Light-Yagami-quotes-from-death-note.jpg",
    username: "kira",
    company: {
      name: "Yagami",
    },
  },
];

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  
  useEffect(() => {
    setSuggestions(sugg);
  }, []);

  return (
    <div className="flex space-x-2 p-5 bg-stone-800 mt-8 rounded-lg overflow-x-scroll scrollbar-thin scrollbar-thumb-stone-900 scrollbar-track-stone-700 ">
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;