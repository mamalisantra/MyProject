//ES Modules (ECMAScript Modules) allow us to divide JavaScript code into separate files and use that code in other files.
//A named export allows you to export multiple functions, variables, or classes from the same file,Imported using curly braces,Names normally need to match.
//Only one default export per module,Imported without curly braces,Local import name can differ.

export function Add(a,b)
{
    return a+b;
}
export function Subtraction(a,b)
{
    return a-b;
}
export function Multiplication(a,b)
{
    return a*b;
}
export default function Division(a,b)
{
    return a/b;
}