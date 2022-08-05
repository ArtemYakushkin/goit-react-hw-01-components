import styled from 'styled-components';

export const CardUser = styled.div`
    padding: 8px;
    border: 2px solid #4E555F;
    max-width: 250px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
`;

export const InfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImgUser = styled.img`
    max-width: 100px;
    height: 100%;
`;

export const NameUser = styled.h2`
    margin-bottom: 8px;
`;

export const TagUser = styled.p`
    margin-bottom: 8px;
    margin-top: 0px;
    color: #4E555F;
`;

export const LocationUser = styled.p`
    margin-bottom: 8px;
    margin-top: 0px;
    color: #4E555F;
`;

export const StatsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StatsСategory = styled.span`
    color: #4E555F;
    font-size: 12px;
    margin-bottom: 4px;
`;

export const StatsNumber = styled.span`
    font-weight: 700;
    font-size: 16px;
`;

