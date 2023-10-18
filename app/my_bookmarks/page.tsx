import { useRouter } from "next/navigation";
import { useBookmarks } from "./useBookmarks";

const IndexPage: React.FC = () => {
  const router = useRouter();
  const bookmarks = useBookmarks();

  const handleBookmark = () => {
    // TODO: Implement bookmarking functionality
    setBookmarks([...bookmarks, router.pathname]);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl">Your Bookmarks</h1>
      <ul className="list-none">
        {bookmarks.length === 0 ? (
          <li className="text-center text-xl">You haven't bookmarked anything yet</li>
        ) : (
          bookmarks.map((bookmark) => (
            <li key={bookmark} className="p-2">
              <a href={bookmark}>{bookmark}</a>
            </li>
          ))
        )}
      </ul>
      <button className="btn btn-primary" onClick={handleBookmark}>
        Bookmark
      </button>
    </div>
  );
};

export default IndexPage;