import styled from 'styled-components';

export const StatSection = styled.section`
    margin: 0 auto 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    border: 1px solid #4E555F;
`;

export const StatTitle = styled.h2`
    text-align: center;
`;

export const StatList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0px;
    padding: 0px;
`;

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
`;

export const StatFormat = styled.span`
    font-size: 12px;
    color: #4E555F;
    margin-bottom: 8px;
`;