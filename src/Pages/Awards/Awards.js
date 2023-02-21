import React from 'react';
import Award from './Award';

const Awards = () => {
    const awards=[
        {id:1,
        awardquntity:32,
        awardType:'Blue Burmin Award'
        },
        {id:2,
            awardquntity:43,
            awardType:'Mimo X11 Award'
            },
            {id:3,
                awardquntity:51,
                awardType:'Australian UGC Award'
                },
                {id:4,
                    awardquntity:42,
                    awardType:'IITCA Green Award'
                    }

    ]
    return (
        <div className='awards'>
           <div className="container">
            <div className="row">
                <p className='text-success fw-bold'>Our Awards</p>
                <h3 className='text-center'>Over 1,24,000+ Happy User Bieng With Us <br />
                Still They Love Our Services
                </h3>
                {
                    awards.map(award=><Award key={award.id} award={award}></Award>)
                }
            </div>
            </div> 
        </div>
    );
};

export default Awards;