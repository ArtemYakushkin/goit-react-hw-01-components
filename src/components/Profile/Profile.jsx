import PropTypes from 'prop-types';
import { CardUser, InfoUser, ImgUser, NameUser, TagUser, LocationUser, StatsList, StatsItem, StatsСategory, StatsNumber } from './Profile.styled';

export const Profile = ({ user }) => {
    const { name, tag, location, avatar, stats } = user;
    return (
        <CardUser>
            <InfoUser>
                <ImgUser src={avatar} alt={"User photo"} />
                <NameUser>{name}</NameUser>
                <TagUser>{tag}</TagUser>
                <LocationUser>{location}</LocationUser>
            </InfoUser>
            <StatsList>
                <StatsItem>
                    <StatsСategory>Followers</StatsСategory>
                    <StatsNumber>{stats.followers}</StatsNumber>
                </StatsItem>
                <StatsItem>
                    <StatsСategory>Views</StatsСategory>
                    <StatsNumber>{stats.views}</StatsNumber>
                </StatsItem>
                <StatsItem>
                    <StatsСategory>Likes</StatsСategory>
                    <StatsNumber>{stats.likes}</StatsNumber>
                </StatsItem>
            </StatsList>
        </CardUser>
    );  
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};