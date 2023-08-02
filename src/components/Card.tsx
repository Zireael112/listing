import React from 'react'

export default function Card({item} : any) {

    const {title, currency_code = '', url, MainImage, price = '', quantity = 0} = item

    if (item.state === 'removed') {
        return null;
    }

    let shortTitle
    let cost
    let quantityClass

    if (title > 49) {
        shortTitle = title.slice(0, 50) + '...'
    } else {
        shortTitle = title
    }

    if (['USD', 'EUR'].includes(currency_code)) {
        cost = currency_code === "USD" ? `$${price}` : `€${price}`
    } else {
        cost = `${price} ${currency_code}`
    }

    if (quantity) {
        if (quantity <= 10) {
            quantityClass = 'low'
        } else if (quantity <= 20) {
            quantityClass = 'medium'
        } else {
            quantityClass = 'high'
        }
         
    }

    return (
        <div className="item">
          <div className="item-image">
            <a href={url}>
              <img src={MainImage?.url_570xN} alt={shortTitle}/>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{shortTitle}</p>
            <p className="item-price">{cost}</p>
            <p className={`item-quantity level-${quantityClass}`}>{quantity} left</p>
          </div>
        </div>
    )
}