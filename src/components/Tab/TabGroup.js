import react, { useState } from 'react'
import { Tab, HeaderText, TabContainer, ReviewsContainer, TabText, ReviewContainer, DividerLine, ReviewName } from './styledComponents';


const TabGroup = (props) => {
    const types = ["Babies (0-1)", "Toddlers (1-3)", "Kids (3-5)"];
    const [active, setActive] = useState(types[0]);

    const reviewBabyData = [
        {
            id: 1,
            name: "John",
            description: "Father of 1 Baby, 1 Toddler",
            review: "“This place was great! My two young ones (boys, aged 6months and 2 years), both loved it. The staff were super friendly and made them feel super welcomed. Recommended!”",
        },
        {
            id: 2,
            name: "Lucy",
            description: "Mother of 2 baby",
            review: "“This team has been amazing through this pandemic. Although they only had a few in person classes this year, both my kiddos have been able to enjoy Zoom classes at home with wonderful instructors. James is doing an amazing work.”"
        },
        {
            id: 3,
            name: "Nick",
            description: "Father of 1 Baby, 1 Kid",
            review: "“Studio Director Miss Jamee is an exquisite role model, mentor and dance educator. During her time teaching my oldest child, Jamee was supportive, motivating and always supportive.”",
        }
    ];

    const reviewToddlerData = [
        {
            id: 1,
            name: "John",
            description: "Father of 1 Baby, 1 Toddler",
            review: "“Our son attended High Park Early Learning Centre for 2 years. He loved his time there. The staff were excellent in every way.”",
        },
        {
            id: 2,
            name: "Mary",
            description: "Mother of 2 Toddlers",
            review: "“We love High Park Early Learning Centre. Our daughter started daycare at age of 11-months, and since then it's been a flawless transition. 3 groups later, and she made so many friends, learned so many great things”"
        },
        {
            id: 3,
            name: "James",
            description: "Father of 2 Toddlers",
            review: "“A very nice and safe place for our kids. Great staff.”",
        }
    ];

    const reviewKidsData = [
        {
            id: 1,
            name: "John",
            description: "Father of 1 Baby, 1 Toddler",
            review: "“Our son attended High Park Early Learning Centre for 2 years. He loved his time there. The staff were excellent in every way.”",
        },
        {
            id: 2,
            name: "Mary",
            description: "Mother of 2 Toddlers",
            review: "“We love High Park Early Learning Centre. Our daughter started daycare at age of 11-months, and since then it's been a flawless transition. 3 groups later, and she made so many friends, learned so many great things”"
        },
        {
            id: 3,
            name: "“James",
            description: "“Father of 2 Toddlers",
            review: "“A very nice and safe place for our kids. Great staff.”",
        }
    ];


    return (
        <>
            <ReviewsContainer>
                <HeaderText>
                    Reviews:
                </HeaderText>
                <TabContainer>
                    {types.map((type) => (
                        <Tab
                            key={type}
                            active={active === type}
                            onClick={() => setActive(type)}
                        >
                            {type}
                        </Tab>
                    ))}
                </TabContainer>
            </ReviewsContainer>
            {
                active === types[1] ? (
                    <ReviewContainer>

                    </ReviewContainer>
                ) :
                    active === types[2] ? (
                        <ReviewContainer>

                        </ReviewContainer>) :
                        (<ReviewContainer>

                        </ReviewContainer>)
            }

        </>
    );
}

export default TabGroup