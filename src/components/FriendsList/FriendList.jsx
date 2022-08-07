import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import { List } from "./FriendList.styled";

export default function FriendList({ friends }) {
    
    return (
        <List>
          {friends.map(friend => (
            <FriendListItem
              key={friend.id}
              prop={friend}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          ))}
        </List>
    );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};