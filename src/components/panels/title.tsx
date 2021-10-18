//Title(title, description) - Shows an unwrapped two line title & text
import React from 'react';

const Title = (props) => {
    return (
        <div className="flex flex-col text-center w-full mt-4 mb-8">
            <h1 className="pb-0 sm:text-2xl text-xl font-medium title-font text-gray-900">
            {props.Panels.title.title}
            </h1>
            <p className="text-sm text-gray-500">
            {props.Panels.title.description}
            </p>                                
        </div>
    )
}

export default Title
