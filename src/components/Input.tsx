import { ReactNode } from 'react';

interface inputProps{
    placeholder: string,
    icon: ReactNode,
}



export function Input (props: inputProps){

    

    return(
        <div className="bg-black text-defyellow flex flex-row border-2 border-defyellow">
            <span className='m-2 '>{props.icon}</span>
            <input className="w-full bg-black border-l-2 border-defyellow px-3 focus:outline-none text-white" placeholder={props.placeholder}>
            </input>
        </div>
    )
}