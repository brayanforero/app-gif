export interface GifApi {
  type: string
  id: string
  url: string
  slug: string
  bitly_gif_url: string
  bitly_url: string
  embed_url: string
  username: string
  source: string
  title: string
  rating: Rating
  content_url: string
  source_tld: string
  source_post_url: string
  is_sticker: number
  import_datetime: Date
  trending_datetime: Date
  images: ImageApi
  user?: User
  analytics_response_payload: string
  analytics: Analytics
}

export interface CategoryApi {
  name: string
  name_encoded: string
  subcategories: SubcategoryApi[]
  gif: GifApi
}

export interface SubcategoryApi {
  name: string
  name_encoded: string
}

export interface TrendingSearchApi {
  data: string[]
  meta: MetaApi
}

export interface Analytics {
  onload: Onclick
  onclick: Onclick
  onsent: Onclick
}

export interface Onclick {
  url: string
}

export interface ImageApi {
  original: FixedHeight
  downsized: The480_WStill
  downsized_large: The480_WStill
  downsized_medium: The480_WStill
  downsized_small: The4_K
  downsized_still: The480_WStill
  fixed_height: FixedHeight
  fixed_height_downsampled: FixedHeight
  fixed_height_small: FixedHeight
  fixed_height_small_still: The480_WStill
  fixed_height_still: The480_WStill
  fixed_width: FixedHeight
  fixed_width_downsampled: FixedHeight
  fixed_width_small: FixedHeight
  fixed_width_small_still: The480_WStill
  fixed_width_still: The480_WStill
  looping: Looping
  original_still: The480_WStill
  original_mp4: The4_K
  preview: The4_K
  preview_gif: The480_WStill
  preview_webp: The480_WStill
  hd?: The4_K
  '480w_still': The480_WStill
  '4k'?: The4_K
}

export interface The480_WStill {
  height: string
  width: string
  size: string
  url: string
}

export interface The4_K {
  height: string
  width: string
  mp4_size: string
  mp4: string
}

export interface FixedHeight {
  height: string
  width: string
  size: string
  url: string
  mp4_size?: string
  mp4?: string
  webp_size: string
  webp: string
  frames?: string
  hash?: string
}

export interface Looping {
  mp4_size: string
  mp4: string
}

export enum Rating {
  G = 'g',
  PG = 'pg',
}

export interface User {
  avatar_url: string
  banner_image: string
  banner_url: string
  profile_url: string
  username: string
  display_name: string
  description: string
  instagram_url: string
  website_url: string
  is_verified: boolean
}

export interface MetaApi {
  status: number
  msg: string
  response_id: string
}

export interface Pagination {
  total_count: number
  count: number
  offset: number
}

export interface GifsResponse {
  data: GifApi[]
  pagination: Pagination
  meta: MetaApi
}

export interface SingleGifResponse {
  data: GifApi
  pagination: Pagination
  meta: MetaApi
}

export interface CategoriesResponse {
  data: CategoryApi[]
  pagination: Pagination
  meta: MetaApi
}