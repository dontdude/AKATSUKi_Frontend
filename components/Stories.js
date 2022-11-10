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
      "https://www.otaquest.com/wp-content/uploads/2021/07/eren-yeager-feature-image.png",
    username: "Yeager",
    company: {
      name: "Eren",
    },
  }, {
    id: 3,
    avatar:
      "https://i1.sndcdn.com/avatars-000218147509-tfqn4g-t500x500.jpg",
    username: "Little_Giant",
    company: {
      name: "Shoyo Hinata",
    },
  }, {
    id: 3,
    avatar:
      "http://pm1.narvii.com/6383/2cb0f321852ac44e6c637ac7832af70836b85f31_00.jpg",
    username: "Black_Prince",
    company: {
      name: "Lelouch",
    },
  }, {
    id: 3,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa12Aplu5JLaKVCqNW0tZxZ2JAotp8IPXBtg&usqp=CAU",
    username: "Saiyan",
    company: {
      name: "Goku",
    },
  }, {
    id: 3,
    avatar:
      "https://i.pinimg.com/736x/f3/6f/a3/f36fa35144d20e7e7f362748323d9984.jpg",
    username: "Deku",
    company: {
      name: "Midoriya",
    },
  }, {
    id: 3,
    avatar:
      "https://sm.mashable.com/mashable_in/photo/default/this-one-piece-fans-femme-luffy-cosplay-is-gomu-gomu-no-a-mi_gqe7.jpg",
    username: "Straw_Hat",
    company: {
      name: "Luffy",
    },
  }, {
    id: 3,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTipmIgG4cHkSybq6pjPf74-m8BUdid6C-2Kw&usqp=CAU",
    username: "Humanity_Greatest_Soldier",
    company: {
      name: "Levi",
    },
  }, {
    id: 3,
    avatar:
      "https://i.pinimg.com/originals/bc/27/6f/bc276ff73e30a5f50c493aeb685edb90.png",
    username: "Copy_Ninja",
    company: {
      name: "Kakashi",
    },
  }, {
    id: 3,
    avatar:
      "https://toppng.com/uploads/preview/itachi-itachi-uchiha-11563520029nkwerlqr6q.png",
    username: "Self_less",
    company: {
      name: "Itachi",
    },
  },{
    id: 3,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdkeYWzb2dRxG_kwoeRKCpIjf_nb_FzVU3Q&usqp=CAU",
    username: "White_Demon",
    company: {
      name: "Gintoki",
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