import PropTypes from 'prop-types';
import { ListItem, FriendStatus } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <ListItem>
            <FriendStatus status={isOnline}></FriendStatus>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </ListItem>
    );
};

FriendListItem.protoType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};