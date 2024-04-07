export const runtime = 'edge'

export const alt = 'Certificate by OAEG'

export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string[] } }) {

    const path = '/' + params.slug.join('/') + '.jpg'
    const url = 'https://previews.oaeg-website.pages.dev' + path
    console.log(url)
    const res = await fetch(url)
    return await res.blob()
}