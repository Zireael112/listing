import React from 'react'
import Card from './Card'
import { TJ } from '../models/TJ'

export default function Listing({items = []}) {
  return (
    <div className="item-list">
      {items.map((item: TJ) => <Card key={item.listing_id} item={item} />)}
    </div>
  )
}