import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sortCardAsc, sortCardDesc, searchCard } from '../redux/actions/CardAction';


function Header({onChange,search}) {
    const dispatch = useDispatch();
    const [sort,setSort] = useState('asc')
    
    useEffect(()=> {
        dispatch(searchCard(search));
        if(sort === 'desc'){
            dispatch(sortCardDesc())
        }
        if(sort === 'asc'){
            dispatch(sortCardAsc())
        }
    },[sort,search,dispatch])
    return (
        <>
        <header>
            <div className='title'>
                <h1>React Redux Filtering</h1>
            </div>
            <div className='filters'>
                <div className='search'>
                    <input 
                        type="text"
                        placeholder='Search'
                        onChange={onChange}
                    />
                </div>
                <div className='sort'>
                    <select onChange={(e) => setSort(e.target.value)}>
                        <option value="asc">ASC</option>
                        <option value="desc">DESC</option>
                    </select>
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;