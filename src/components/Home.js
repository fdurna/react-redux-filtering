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
            <Card/>
            <Paginate/>
        </>
    );
}

export default Home;