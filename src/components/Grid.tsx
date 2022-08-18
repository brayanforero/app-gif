import { lazy, Suspense } from 'react'
import GifModel from '../interfaces/app/gif'

import './Grid.css'
import Card from './placeholders/Card'
interface Props {
  items?: GifModel[]

  name?: string
  children?: JSX.Element
}

const Gif = lazy(() => import('./Gif'))

function Grid({ items = [], name, children }: Props) {
  if (!children)
    return (
      <div className="Grid">
        {name && <p className="Grid__name">{name}</p>}
        {items?.map((g, i) => (
          <Suspense fallback={<Card />}>
            <Gif key={`${g.id}-${i + 1}}`} data={g} />
          </Suspense>
        ))}
      </div>
    )

  return (
    <article className="Grid">
      {name && <p className="Grid__name">{name}</p>}
      {children}
    </article>
  )
}

export default Grid
