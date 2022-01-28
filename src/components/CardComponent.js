import {
    CardContainer,
    CardHeader,
    HeaderText,
    LabelText,
    StyledIcons,
    ColumnContainer,
    LabelContainer,
    LabelWrapper,
    DropDownImage,
    ReviewPicWrapper,
    ReviewPicImage,
    LocationAndTimingContainer,
    LocationContainer,
    AddressContainer,
    LocationAndTimingText,
    LocationAndTimingIcon,
} from './styledComponents';
import BookMark from '../assets/images/bookmark.png';
import rating_dropDown from '../assets/images/rating_dropDown.png';
import reviewPic1 from '../assets/images/reviewPic1.jpeg';
import reviewPic2 from '../assets/images/reviewPic2.jpeg';
import reviewPic3 from '../assets/images/reviewPic3.jpeg';
import reviewPic4 from '../assets/images/reviewPic4.jpeg';
import reviewPic5 from '../assets/images/reviewPic5.jpeg';
import reviewPic6 from '../assets/images/reviewPic6.jpeg';
import reviewPic7 from '../assets/images/reviewPic7.jpeg';
import reviewPic8 from '../assets/images/reviewPic8.jpeg';
import reviewPic9 from '../assets/images/reviewPic9.jpeg';
import reviewPic10 from '../assets/images/reviewPic10.jpeg';
import location from '../assets/images/location.png';
import time from '../assets/images/time.png';
import TabGroup from './Tab/TabGroup';

const labelData = [
    {
        id: 1,
        name: " Accessible ",
    },
    {
        id: 2,
        name: " TTC Convenient ",
    },
    {
        id: 3,
        name: " COVID-safe ",
    },
];

const CardComponent = (props) => {

    const { centerName, centerAddress } = props
    return (
        <CardContainer>
            <CardHeader>
                <ColumnContainer>
                    <HeaderText>{centerName}</HeaderText>
                    <StyledIcons src={BookMark} alt="bookmark Image" />
                </ColumnContainer>
                <LabelContainer>
                    <LabelWrapper>
                        <LabelText>{labelData[0].name}</LabelText>
                    </LabelWrapper>
                    <LabelWrapper>
                        <LabelText>{labelData[1].name}</LabelText>
                    </LabelWrapper>
                    <LabelWrapper>
                        <LabelText>{labelData[2].name}</LabelText>
                    </LabelWrapper>
                </LabelContainer>
                <DropDownImage src={rating_dropDown} alt="rating drop down" />
                <ReviewPicWrapper>
                    <ReviewPicImage src={reviewPic1} alt="reviewPic1" />
                    <ReviewPicImage src={reviewPic2} alt="reviewPic2" />
                    <ReviewPicImage src={reviewPic3} alt="reviewPic3" />
                    <ReviewPicImage src={reviewPic4} alt="reviewPic4" />
                    <ReviewPicImage src={reviewPic5} alt="reviewPic5" />
                    <ReviewPicImage src={reviewPic6} alt="reviewPic6" />
                    <ReviewPicImage src={reviewPic7} alt="reviewPic7" />
                    <ReviewPicImage src={reviewPic8} alt="reviewPic8" />
                    <ReviewPicImage src={reviewPic9} alt="reviewPic9" />
                    <ReviewPicImage src={reviewPic10} alt="reviewPic10" />
                </ReviewPicWrapper>
                <LocationAndTimingContainer>
                    <LocationContainer>
                        <LocationAndTimingIcon src={location} alt='address Icon' />
                        <LocationAndTimingText>
                            {centerAddress}
                        </LocationAndTimingText>
                    </LocationContainer>
                    <AddressContainer>
                        <LocationAndTimingIcon src={time} alt='address Icon' />
                        <LocationAndTimingText>
                            9am - 5pm <span>(Open Now)</span>
                        </LocationAndTimingText>
                    </AddressContainer>
                    <LocationAndTimingText>
                        Drop in center from 10am - 2pm
                    </LocationAndTimingText>
                </LocationAndTimingContainer>
            </CardHeader>
            <TabGroup />
        </CardContainer>
    );
};

export default CardComponent;
