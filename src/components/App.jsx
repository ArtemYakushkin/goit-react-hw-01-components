import { Profile } from "./Profile/Profile";
import user from "./Profile/user";
import { Statistics } from "./Statistics/Statistics";
import data from "./Statistics/data"
import FriendList from "./FriendsList/FriendList";
import friends from "./FriendsList/friends";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import items from "./TransactionHistory/transactions";

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};
