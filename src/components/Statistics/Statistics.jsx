import PropTypes from 'prop-types';
import { StatSection, StatList, StatTitle, StatItem, StatFormat } from './Statistics.styled';

const color = item => {
  const colorArray = ['#E74C3C', '#8E44AD', '#3498DB', '#27AE60', '#F39C12'];
  return `${colorArray[Number(item.id.replace(/[^0-9]/g, '')) % 5]}`;
};

export const Statistics = ({ title, stats }) => {
    return (
        <StatSection>
            <StatTitle>{title}</StatTitle>

            <StatList>
                {stats.map(item => (
                    <StatItem key={item.id} style={{ backgroundColor: color(item) }}>
                        <StatFormat>{item.label}</StatFormat>
                        <span>{item.percentage}%</span>
                    </StatItem>
                ))}
            </StatList>
        </StatSection>
    );
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
};