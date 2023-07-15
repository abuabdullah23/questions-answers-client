import qs from 'query-string';
import React from 'react';
import { Link } from 'react-router-dom'
import { useSearchParams, useNavigate } from 'react-router-dom';

const SingleCategory = ({ category, selected }) => {

    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    const handleClick = () => {
        let currentQuery = {};
        if (params) {
            currentQuery = qs.parse(params.toString())
        }
        const updatedQuery = {
            ...currentQuery,
            category: category.category
        }
        const url = qs.stringifyUrl({
            url: '/qa/display-qa',
            query: updatedQuery
        },
            {
                skipNull: true
            })
        navigate(url);
    }


    return (
        <>
            <div
                onClick={handleClick}
                className={`hover:bg-[#003983] hover:text-white cursor-pointer py-2 ps-4 text-lg transition hover:scale-105
                ${selected ? 'bg-[#003983] text-white' : 'text-neutral-500'}
                `}>
                <Link>{category.category}</Link>
            </div>
        </>
    );
};

export default SingleCategory;