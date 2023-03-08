import React from 'react'
import cardapio from './itens.json'
import Item from './Item'

export default function Itens() {
  return (
    <div>
      {cardapio.map((item) => (
        <div>
          {item.title}
          <Item />
        </div>
      ))}
    </div>
  )
}
