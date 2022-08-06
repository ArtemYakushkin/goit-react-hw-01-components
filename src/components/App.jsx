import { Profile } from "./Profile/Profile";
import user from "./Profile/user";
import { Statistics } from "./Statistics/Statistics";
import data from "./Statistics/data"

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
    </div>
  );
};
