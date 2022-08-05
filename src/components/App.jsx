import { Profile } from "./Profile/Profile";
import user from "./Profile/user";

export const App = () => {
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};
