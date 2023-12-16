import React, { useState, useEffect } from 'react';
// import { css } from '@emotion/react';
import { SyncLoader } from 'react-spinners';

const LoadingPage = () => {
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        // Simulate some asynchronous operation
        const timer = setTimeout(() => {
            setLoading(false);
        }, 30000);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, []);



    return (


        <div className="loading-container" style={{ textAlign: 'center', width: '80%', margin: 'auto', marginTop: '7rem', marginBottom: '8rem', }}>
            <SyncLoader color={'#86bc25'} loading={loading} size={62} />
            <h1
                className='small'
                style={{
                    color: '#D6CC99',
                    fontFamily: 'Rubik',
                    fontSize: '8rem',
                    marginTop: '1rem',
                    fontWeight: 'bolder'

                }}
            >
                Be <span
                    style={{
                        color: '#54731a',
                    }}>N</span>atural
            </h1>
        </div >
    );
};

export default LoadingPage;
