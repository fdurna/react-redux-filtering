import React, { useState, useEffect } from 'react';
import Header from './Header'
import Card from './Card'
import Paginate from './Paginate'
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../redux/actions/CardAction';


function Home() {
    const [search,setSearch] = useState('')
    const dispatch = useDispatch();
    const {cards,loading} = useSelector((state) => state.CardReducers);
    const [currentPage, setCurrentPage] = useState(1);

    const handleChangeSearch = (e) => {
        const value = e.target.value
        setSearch(value)
    }

    useEffect(()=> {
        dispatch(fetchCards())
    },[dispatch])


    const cardPostPage = 15;
	const totalCards = cards.length;

    const indexOfLastCard = currentPage * cardPostPage;
	const indexOfFirstCard = indexOfLastCard - cardPostPage;
    const filterCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    return (
        <>
            <Header
                search={search}
                onChange={handleChangeSearch}
            />
            {
                loading ? (
                    <Loader />
                )   : (
                    <div className="container">
                        <div className="posts">
                            {
                                filterCards.map((card)=>(
                                    <Card key={card.id} card={card} />
                                ))
                            }
                        </div>
                        {
                            totalCards > cardPostPage && (
                                <Paginate
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                    totalCards={totalCards}
                                    cardPostPage={cardPostPage}
                                />
                            )
                        }
                       
                    </div>
                )
            }
            
        </>
    );
}

export default Home;