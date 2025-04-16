'use client'

import { ReactNode, useState } from 'react'

export function AddToCartButton({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)

  function addToCart() {
    setCount((state) => state + 1)
  }

  return (
    <div>
      <button onClick={addToCart}>Adicionar ao carrinho ({count})</button>
      {children}
      {/* Maneira de como passar um component dentro de client component sem se tornar um client component */}
    </div>
  )
}
