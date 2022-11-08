import Posts from "./Posts";
import Stories from "./Stories";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      
      {/* left section */}
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      {/* right section */}
      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
      
    </main>
  );
}

export default Feed;