import React from 'react';
import {Link} from 'react-router-dom'

import Chart from './Chart'

function CoinModal({coin, handleClick}) {
    return (
        <>
           {coin.name  ?
            <div className="chart__container" key={coin.name} onClick={(e)=>{handleClick(e, coin)}}s>
                <h2 className="coin__title">{coin.name}</h2>
                <h4 className="coin__symbol">{coin.symbol}</h4>
                <div className="coin__logo">
                <img src={coin.image} height="40" alt={coin.name} />
                </div>
                <Chart sparklineData = { coin.sparkline_in_7d.price } />
            </div>
            : <h2>Sorry, No Data to display, <Link to='/'>Go Home</Link></h2>
            
            }
        </>
    )
}

export default CoinModal