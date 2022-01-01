import React, { useState, useEffect } from 'react';
import Header from './Header'
import Card from './Card'
import Paginate from './Paginate'
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../redux/actions/CardAction';


function Home() {
    const dispatch = useDispatch();
    const {cards,loading} = useSelector((state) => state.CardReducers);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=> {
        dispatch(fetchCards())
    },[dispatch])


    const postPerPage = 15;
	const totalCards = cards.length;

    const indexOfLastCard = currentPage * postPerPage;
	const indexOfFirstCard = indexOfLastCard - postPerPage;
    const filterCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    
    return (
        <>
            <Header />
            <Loader />
            <div className="container">
                <div className="posts">
                    {
                        filterCards.map((card)=>(
                            <Card card={card} />
                        ))
                    }
                </div>
                <Paginate
                />
            </div>
        </>
    );
}

export default Home;