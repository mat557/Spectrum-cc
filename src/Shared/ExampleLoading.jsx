import React from 'react';
import ReactLoading from 'react-loading';

const ExampleLoading = ({bubbles}) => {
    return (
        <div>
            <ReactLoading type={bubbles} color={'#FF0000'} height={'20%'} width={'20%'} />
        </div>
    );
};

export default ExampleLoading;