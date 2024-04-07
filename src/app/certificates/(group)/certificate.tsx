import Image from "next/image";


export const Certificate = ({path}:{path:string})=> {

    const linkedinShare  = (url:string)=>{
        return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${'Certificate by OAEG'}`;
    };

    const imgSrc = path + '.jpg';
    const pdfSrc = path + '.pdf';
    const PUBLIC_URL = window.location.origin;
    const share = `${PUBLIC_URL}/certificates` + path;

    return (
        <div className={'flex'}>
            <div className={'w-1/4 flex-col px-4 py-5'}>
                <div className={'my-2'}>
                    <a href={pdfSrc} target={'_blank'} style={{background:"var(--theme-gold)", color: "black"}}
                       className={`rounded
                    font-semibold tracking-wide uppercase
                px-4 py-2`}>Download</a>
                </div>
                <div className={'my-2'}>
                    <a href={linkedinShare(share)} target={'_blank'}
                            style={{background:"var(--theme-gold)", color: "black"}}
                            className={`rounded
                    font-semibold tracking-wide uppercase px-4 py-2`}>Share</a>
                </div>
            </div>
            <div className={'w-3/4'}>
                <div className={'p-2 border-2 border-gray-300 rounded'}>
                    <Image className={'rounded'} src={decodeURIComponent(imgSrc)} alt={'Image'}
                           loading={'lazy'}
                           width={1080} height={1080 * 794/ 1123}/>
                </div>
            </div>
        </div>
    )
};