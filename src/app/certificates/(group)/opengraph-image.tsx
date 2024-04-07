import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export const alt = 'Certificate by OAEG'

export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string[] } }) {
    const post = await fetch(`/${params.slug}`).then((res) =>
        res.json()
    )

    const path = '/' + params.slug.join('/') + '.jpg'
    const url = process.env.VERCEL_URL + path

    return new ImageResponse(
        (
            <img src={url} alt={''} width={1200} height={630} />
        ),
        {
            ...size,
        }
    )
}