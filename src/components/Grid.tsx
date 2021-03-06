import GifModel from '../interfaces/app/gif'
import Gif from './Gif'
import './Grid.css'
interface Props {
  items?: GifModel[]

  name?: string
  children?: JSX.Element
}

function Grid({ items = [], name, children }: Props) {
  if (!children)
    return (
      <div className="Grid">
        {name && <p className="Grid__name">{name}</p>}
        {items?.map((g, i) => (
          <Gif key={`${g.id}-${i + 1}}`} data={g} />
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
