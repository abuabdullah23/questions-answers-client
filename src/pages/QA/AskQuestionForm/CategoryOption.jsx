import React from 'react';

const CategoryOption = ({category}) => {
    return (
        <option>
            {category.category}
        </option>
    );
};

export default CategoryOption;