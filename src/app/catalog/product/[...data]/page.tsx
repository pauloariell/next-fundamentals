import { AddToCartButton } from './add-to-cart-button'
import { Test } from './test'

interface ProductProps {
  params: {
    data: string[]
  }
}

/**
 * Server Component => O component não usa Javascript, pois o component é montado do lado do servidor
 * No caso do next, por padrão dele, ele sempre monta o component do lado do servidor
 * dessa forma ele renderiza só o component que está sendo acessado, então basicamente um HMTL e CSS puro apenas
 * pois é o q funciona no server side.
 * Poderem, qualquer function, um onClick que for, ja não funciona, pois o next tenta entender no serverside e não consegue
 * Então é necessario fazer uma anotação na primeira linha do component ou page
 * colocando a assim 'use client'
 */

export default async function Product({ params }: ProductProps) {
  const response = await fetch('https://api.github.com/users/pauloariell')
  const responseJson = await response.json()

  const [productId, size, color] = params.data
  return (
    <div>
      <p>ProductId:{productId}</p>
      <p>Size:{size}</p>
      <p>Color:{color}</p>

      <AddToCartButton>
        <Test />
        {/* Maneira de como passar um component dentro de client component sem se tornar um client component */}
      </AddToCartButton>
    </div>
  )
}
