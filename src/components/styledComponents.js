import styled from 'styled-components';

export const CardContainer = styled.div`
	height: 100%;
	width: 100%;
    padding: 10px;
`;
export const CardHeader = styled.div`
	height: 30%;
	width: 90%;
	/* background: #367BA0; */
	padding: 10px;
`;
export const HeaderText = styled.text`
	font-size: 20px;
	font-weight: bold;
    font-style: normal;
    line-height: 24px;

`;
export const LabelText = styled.text`
    font-size: 13px;
    line-height: 13px;
`;

export const StyledIcons = styled.img`
    height: 24px;
    width: 20px;
`;
export const ColumnContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const LabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;
export const LabelWrapper = styled.div`
    background: #F4F4F4;
    margin: 5px;
    border-radius: 3px;
    border: 1px solid gray;
    padding: 4px;

`;

export const DropDownImage = styled.img`
    padding-top: 10px;
    height: 43px;
    width: 100%;
`;

export const ReviewPicWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    overflow-x: scroll
`

export const ReviewPicImage = styled.img`
    padding: 10px;
    height: 90px;
    width: 100%;
`;

export const LocationAndTimingText = styled.text`
    font-size: 16px;
    line-height: 24px;
`;

export const LocationAndTimingContainer = styled.div`
    height: 100px;
    display: flex;
    background: #F6FAFB;
    padding: 20px 5px;
    flex-direction: column;
    justify-content: space-between;
    
`;

export const LocationContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const AddressContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const LocationAndTimingIcon = styled.img`
    width: 24px;
    height: 24px;
    padding-right: 10px;
`;

export const DropInText = styled.text`
    font-size: 16px;
    line-height: 24px;
`;