import { ReactNode } from 'react';

interface inputProps extends React.HTMLAttributes<HTMLDivElement> {
    placeholder: string,
    icon: ReactNode,
    value: string,
    Evento:(texto: string) => void
}



export function Input (props: inputProps){

    

    return(
        <div className="bg-black text-defyellow flex flex-row border-[1px] lg:border-2 border-defyellow">
            <span className='m-1 lg:m-2 text-xl lg:text-3xl'>{props.icon}</span>
            <input className="w-full bg-black border-l-[1px] lg:border-l-2 border-defyellow px-3 focus:outline-none text-white placeholder:text-xs lg:placeholder:text-xl" value={props.value} onChange={(e) => props.Evento(e.target.value)} placeholder={props.placeholder}>
            </input>
        </div>
    )
}