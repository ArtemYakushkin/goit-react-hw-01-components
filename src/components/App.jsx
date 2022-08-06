import { Profile } from "./Profile/Profile";
import user from "./Profile/user";
import { Statistics } from "./Statistics/Statistics";
import data from "./Statistics/data"
import { FriendList } from "./Friends/FriendList";
import friends from "./Friends/friends";

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
    </div>
  );
};
