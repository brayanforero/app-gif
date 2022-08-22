import { memo } from 'react'
import GifModel from '../interfaces/app/gif'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import './Gif.css'
import { Link } from 'wouter'
interface Props {
  data: GifModel
  type?: 'hd' | 'normal'
}

function Gif({ data, type = 'normal' }: Props) {
  return (
    <div className="Gif">
      <LazyLoadImage
        decoding="async"
        effect="blur"
        useIntersectionObserver={true}
        src={type === 'normal' ? data.image.normal : data.image.hd}
        alt={data.name}
        width="100%"
        height="100%"
      />
      <Link to={`/g/${data.id}`} className="Gif__name">
        {data.name || 'Title Unavaliable'}
      </Link>
    </div>
  )
}

export default memo(
  Gif,
  (prevProps, nextProps) => prevProps.data.id === nextProps.data.id
)
