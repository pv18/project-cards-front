import React from 'react';
import ReactStars from 'react-stars';

interface IRatingProps {
    value: number
}

export const Rating: React.FC<IRatingProps> = (props) => {
    const ratingChanged = (newRating:number) => {
        console.log(newRating)
    }

    return (
        <div>
            <ReactStars
                value={props.value}
                count={5}
                size={24}
                color1={'#D7D8EF'}
                color2={'#21268F'}
                onChange={ratingChanged}
            />
        </div>
    );
};

