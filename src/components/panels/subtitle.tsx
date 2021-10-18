//Subtitle(title, description) - Shows an unwrapped two line title & text
import React from 'react';

const Subtitle = (props) => {
    return (
        <div className="flex flex-col text-center w-full mt-4 mb-8">
            <h2 className="pb-0 sm:text-2xl text-xl font-medium title-font text-gray-900">
            {props.Panels.subtitle.title}
            </h2>
            <p className="text-sm text-gray-500">
            {props.Panels.subtitle.description}
            </p>                                
        </div>
    )
}

export default Subtitle
