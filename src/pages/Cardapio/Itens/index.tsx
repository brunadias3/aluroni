import React from 'react'
import cardapio from './itens.json'
import Item from './Item'

export default function Itens() {
  return (
    <div>
      {cardapio.map((item) => (
        <div>
          <Item 
            key={item.id}
            {...item}
            />
        </div>
      ))}
    </div>
  )
}