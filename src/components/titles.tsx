import textTheme from "@/app/fonts";

export function MainTitle({title}:{title:string}){
    return <h2 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
    }}
               className={textTheme.title.className}
    >
        {title}
    </h2>;
}

export function SecondaryTitle({title}:{title:string}){
    return <h3 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
    }}>
        {title}
    </h3>;
}

export function TertiaryTitle({title}:{title:string}){
    return <h4 style={{
        fontSize: '1.2rem',
        fontWeight: '400',
    }}>
        {title}
    </h4>;
}

export default {MainTitle, SecondaryTitle, TertiaryTitle}