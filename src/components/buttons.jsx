import React from 'react';

const Button = (props) => {
    return (
        <button class={`bg-${props.bg} text-${props.color} font-bold py-1 px-3 border border-${props.bg} rounded-full`}>
            {props.name}
        </button>

    );
}

export default Button;