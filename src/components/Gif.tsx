import { memo } from 'react'
import GifModel from '../interfaces/app/gif'
import './Gif.css'
interface Props {
  data: GifModel
  type?: 'hd' | 'normal'
}

function Gif({ data, type = 'normal' }: Props) {
  return (
    <div className="Gif">
      <img
        className="Gif__image"
        loading="lazy"
        src={type === 'normal' ? data.image.normal : data.image.hd}
        alt={data.name}
      />
      <p className="Gif__name">{data.name || 'Title Unavaliable'}</p>
    </div>
  )
}

export default memo(
  Gif,
  (prevProps, nextProps) => prevProps.data.id === nextProps.data.id
)
