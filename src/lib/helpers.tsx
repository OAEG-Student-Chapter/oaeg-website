import ReactNode from "react";

// function split a string by '\n' and return an array of strings
export function splitByNewLine(str: string): string[] {
    let temp: string[] = [];
    temp = str.split('\n\n');
    // remove empty strings
    temp = temp.filter((item) => item !== '');
    return temp;
}

export function splitByDoubleNewline(str: string): any[] {
    return splitByNewLine(str).map((line, index) => (
        <span key={index}>
            {line}
    {index < splitByNewLine(str).length - 1 ? (<><br/><br/></>) : ""}
        </span>
    ));
}