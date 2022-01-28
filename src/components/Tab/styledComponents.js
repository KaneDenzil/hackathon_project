import styled from 'styled-components';

export const ReviewsContainer = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
`;

export const TabContainer = styled.div`
    padding-right: 18px;
    display: flex;
    justify-content: space-between;
    width: 270px;
`;

export const Tab = styled.button`
  padding: 5px ;
  cursor: pointer;
  /* background: #367BA0; */
  border: 1px solid gray;
  border-radius: 4px;
  transition: ease border-bottom 250ms;
`;

export const HeaderText = styled.text`
	font-size: 20px;
	font-weight: bold;
    font-style: normal;
    line-height: 24px;

`;
export const DividerLine = styled.hr`
  color: rgba(0, 0, 0, 0.65);
  margin-left: -100px;
`;

export const TabText = styled.text`
font-size: 12px;
line-height: 16px;
`;

export const ReviewContainer = styled.div`

`;
export const ReviewName = styled.text`
font-weight: bold;
font-size: 16px;
line-height: 24px;
padding-right: 15px;
`;
export const ReviewDescription = styled.text`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
`;

export const ReviewComment = styled.text`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 24px;
padding: 10px 0px;

`;

export const ReviewWrapper = styled.div`
padding: 10px 0px;

`