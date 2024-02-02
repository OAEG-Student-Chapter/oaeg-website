import ReactNode from "react";

// function split a string by '\n' and return an array of strings
function _splitByNewLine(str: string, separator:string = '\n'): string[] {
    let temp: string[] = [];
    temp = str.split(separator);
    // remove empty strings
    temp = temp.filter((item) => item !== '');
    return temp;
}

export function splitByNewLine(str: string): any[] {
    return _splitByNewLine(str).map((line, index) => (
        <span key={index}>
            {line}
    {index < _splitByNewLine(str).length - 1 ? (<><br/></>) : ""}
        </span>
    ));
}

export function splitByDoubleNewline(str: string): any[] {
    return _splitByNewLine(str, '\n\n').map((line, index) => (
        <span key={index}>
            {line}
    {index < _splitByNewLine(str).length - 1 ? (<><br/><br/></>) : ""}
        </span>
    ));
}