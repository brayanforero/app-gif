import GifModel from '../interfaces/app/gif'
import Gif from './Gif'
import './Grid.css'
interface Props {
  items?: GifModel[]
  name?: string
}

const DEFAULT_ITEMS: GifModel[] = [
  {
    id: 'asdfasdf343',
    name: 'xd',
    image: {
      hd: 'https://c.tenor.com/tX_T48A14BwAAAAd/khaby-really.gif',
      normal: 'https://c.tenor.com/tX_T48A14BwAAAAd/khaby-really.gif',
    },
  },
  {
    id: 'asdfasdf343',
    name: 'xd',
    image: {
      hd: 'https://c.tenor.com/tX_T48A14BwAAAAd/khaby-really.gif',
      normal: 'https://c.tenor.com/tX_T48A14BwAAAAd/khaby-really.gif',
    },
  },
  {
    id: 'asdfasdf343',
    name: 'xd',
    image: {
      hd: 'https://c.tenor.com/tX_T48A14BwAAAAd/khaby-really.gif',
      normal: 'https://c.tenor.com/tX_T48A14BwAAAAd/khaby-really.gif',
    },
  },
]

function Grid({ items = DEFAULT_ITEMS, name }: Props) {
  return (
    <div className="Grid">
      {name && <p className="Grid__name">{name}</p>}
      {items?.map(g => (
        <Gif data={g} />
      ))}
    </div>
  )
}

export default Grid
