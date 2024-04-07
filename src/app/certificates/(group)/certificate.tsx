import Image from "next/image";
import {FaLinkedin} from "react-icons/fa6";

const Icon = FaLinkedin;

export const Certificate = ({path}:{path:string})=> {

    const linkedinShare  = (url:string)=>{
        return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${'Certificate by OAEG'}`;
    };

    const imgSrc = path + '.jpg';
    const pdfSrc = path + '.pdf';
    const PUBLIC_URL = window.location.origin;
    const share = `${PUBLIC_URL}/certificates` + path;
    const name = path.split('/').pop()?.split('-').join(' ');
    const term = path.split('/')[2]

    return (
        <div className={'flex flex-col sm:flex-row'}>
            <div className={'sm:w-1/4 flex-col px-3 py-5 order-1 sm:order-0'}>
                <div className={'my-3'}>
                    <p>Recipient: {name}</p>
                    <p>Issued Term: {term} <br/></p>
                </div>
                <p className={'font-semibold'}>Share and download your credential.</p>
                <div className={'my-2 mr-2'}>
                    <a href={linkedinShare(share)} target={'_blank'}>
                        <div style={{background:"var(--theme-gold)", color: "black"}}
                             className={`rounded
                    font-semibold tracking-wide uppercase px-4 py-2 flex
                    w-fit
                     items-center`}>Share on LinkedIn
                            <Icon className={'ml-1 text-3xl'}/></div>
                    </a>
                </div>
                <div className={'my-2 mr-2'}>
                    <a href={pdfSrc} target={'_blank'}>
                        <div className={`rounded flex w-fit
                    font-semibold tracking-wide uppercase bg-white border-2 border-gray-500
                px-4 py-2`}>
                        Download
                        </div>
                    </a>
                </div>
            </div>
            <div className={'sm:w-3/4 mt-2 sm:m-0 p-2 order-0 sm:order-1'}>
                <div className={'p-2 border-2 border-gray-300 rounded'}>
                    <Image className={'rounded'} src={decodeURIComponent(imgSrc)} alt={'Image'}
                           loading={'lazy'}
                           width={1080} height={1080 * 794/ 1123}/>
                </div>
            </div>
        </div>
    )
};