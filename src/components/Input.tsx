import { ReactNode } from 'react';

interface inputProps extends React.HTMLAttributes<HTMLDivElement> {
    placeholder: string,
    icon: ReactNode,
    value: string,
    Evento:(texto: string) => void
}



export function Input (props: inputProps, ...rest: any){

    

    return(
        <div className="bg-black text-defyellow flex flex-row border-2 border-defyellow">
            <span className='m-2 '>{props.icon}</span>
            <input className="w-full bg-black border-l-2 border-defyellow px-3 focus:outline-none text-white" value={props.value} onChange={(e) => props.Evento(e.target.value)} placeholder={props.placeholder}>
            </input>
        </div>
    )
}