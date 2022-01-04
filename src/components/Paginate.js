import React from 'react';

function Paginate({currentPage,setCurrentPage,totalCards,cardPostPage}) {
    const totalPages = Math.ceil(totalCards/cardPostPage);
    
    let pages = [];

    for(let q = 1; q <= totalPages;q++){
        pages.push(q)
    }
    console.log(pages);
    return (
        <>
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 && `disabled`}`}>
                    <button className="page-link">
                        &laquo;
                    </button>
                </li>
                {
                    pages.map((page)=> (
                        <li
                            key={page}
                            className={`page-item ${page === currentPage && `active`}`}
                        >
                            <button className='page-link'>{page}</button>
                        </li>
                    ))
                }
                <li className={`page-item ${currentPage === totalPages && `disabled`}`}>
                    <button className="page-link">
                        &raquo;
                    </button>
                </li>
            </ul>
        </>
    );
}

export default Paginate;