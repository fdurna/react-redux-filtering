import React from 'react';
import Header from './Header'
import Card from './Card'
import Paginate from './Paginate'
import Loader from './Loader'

function Home() {
    return (
        <>
            <Header />
            <Loader />
            <div className="container">
                <div className="posts">
                    <Card />
                </div>
                <Paginate
                />
            </div>
        </>
    );
}

export default Home;