import React from 'react';

import InterviewItem from '../interview-item/interview-item.component';

class SitesAndNewspapers extends React.Component {
    constructor() {
        super();

        this.state = {
            sites: [
                {
                    id: 1,
                    title: 'pharetra massa massa ultricies mi quis hendrerit',
                    website: 'test.com',
                    date: 2005
                },
                {
                    id: 2,
                    title: 'nunc scelerisque viverra mauris in aliquam sem fringillat',
                    website: 'test.com',
                    date: 2005
                },
                {
                    id: 3,
                    title: 'eget arcu dictum varius',
                    website: 'test.com',
                    date: 2005
                }
            ],
            newspapers: [
                {
                    id: 1,
                    title: 'pharetra massa massa ultricies mi quis hendrerit',
                    website: 'test.com',
                    date: 2005
                },
                {
                    id: 2,
                    title: 'nunc scelerisque viverra mauris in aliquam sem fringillat',
                    website: 'test.com',
                    date: 2005
                },
                {
                    id: 3,
                    title: 'eget arcu dictum varius',
                    website: 'test.com',
                    date: 2005
                }
            ]
        }
    }


    render() {
        const { sites, newspapers } = this.state;
        return (
            <div className="sites-and-newspapers main u-align-items-center">
                <h1 className="heading-primary">
                    saytlarda və qəzetlərdə çıxışlarım
                </h1>

                <div className="sites-and-newspapers__content col-md-10">
                    {
                        sites.map(({ id, ...otherInterviewProps }) =>
                            <InterviewItem key={id} {...otherInterviewProps} />
                        )
                    }
                    {
                        newspapers.map(({ id, ...otherInterviewProps }) => 
                            <InterviewItem key={id} {...otherInterviewProps} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default SitesAndNewspapers;