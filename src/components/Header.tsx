import { List, X } from "@phosphor-icons/react";
import { LogoAnimado } from "./LogoAnimado";
import { useEffect, useState } from "react";

export function Header(){

const [isMenuOpen, setIsMenuOpen] = useState(false)
const [buttonMenuDiv, setButtonMenuDiv] = useState(true)
const [divMenuOriPos, setdivMenuOriPos] = useState(0) 
const [opcoesMenu, setOpcoesMenu] = useState(false)

useEffect(() => {
    if (isMenuOpen){
        document.body.style.overflowY = 'hidden'
    }
},[isMenuOpen])

function clickMenu(){
    let id:any = null;
    let id2:any = null;
    const elem = document.getElementById('buttondiv')
    let elem_opcoes: HTMLElement | null
    let pos = 0
    let opacity = 0
    
    if (elem && buttonMenuDiv){
        setIsMenuOpen(!isMenuOpen)
        setButtonMenuDiv(false)

        if(!isMenuOpen){            
            setdivMenuOriPos(elem.getBoundingClientRect().bottom)
            window.scrollTo(1,1)
            pos = elem.getBoundingClientRect().bottom +  64            
            id = setInterval(upperResize, 1);
              
        }
        else{
            
            pos = elem.getBoundingClientRect().bottom
            elem_opcoes = document.getElementById('opcoes_menu')
            opacity = 1  
            id2 = setInterval(letterOpacityDown, 5)            
            
        }
    }
    else{} 

    
    

    function upperResize() {
        if (pos >= window.innerHeight) {
            setButtonMenuDiv(true)
            setOpcoesMenu(true)
            elem_opcoes = document.getElementById('opcoes_menu')  
            clearInterval(id);   
            id2 = setInterval(letterOpacityUpper, 5)        
        } else if (elem) {
            pos = pos + 4; 
            elem.style.height = pos + 'px';    
          
        }
   
    }  
      
    function downResize() {
        if (pos <= divMenuOriPos) {
            setButtonMenuDiv(true)
            document.body.style.overflowY = 'auto'
            clearInterval(id);          
        } else if (elem) {
            pos = pos - 4; 
            elem.style.height = pos + 'px';    
            
        }
    }   

    function letterOpacityUpper(){
        if (opacity > 1){
            clearInterval(id2)
        }
        else if (elem_opcoes){
            elem_opcoes.style.opacity = opacity.toString()
            opacity = opacity + 0.01
        }
        
    }

    function letterOpacityDown(){
        if (opacity < 0){
            clearInterval(id2)
            setOpcoesMenu(false)
            id = setInterval(downResize, 1);
        }
        else if (elem_opcoes){
            opacity = opacity - 0.01
            elem_opcoes.style.opacity = opacity.toString()
            
        }
        
    }


      


}




    return(
        <>
            

            <div className="w-full bg-transparent flex flex-col items-center px-24 py-16 z-0 transform-gpu will-change-transform" id='buttondiv'>
                <div className="flex justify-between items-center w-full">

                    <div>
                        <LogoAnimado />
                    </div>

                    <div className="flex justify-center items-center">

                        <div className="fixed">
                            <button onClick={clickMenu} id="menuButton" className="p-3 transition ease-in duration-200 hover:bg-defyellow w-full rounded-full border-2 border-defyellow">
                                {isMenuOpen ?  <X size={32}/> : <List size={32}/>}
                            </button>
                            
                        </div>
                    </div>   

                </div>

                <div id="opcoes_menu" className="opacity-0">
                    {opcoesMenu ? 
                        <div className="grid grid-cols-1 pt-32 text-6xl gap-10 font-semibold content-center place-items-center" >
                                <span className="text-defyellow">Home</span>
                                <span>Sobre</span>
                                <span>Contato</span>
                                

                        </div> 
                        : 
                        <></>
                    }
                </div>
                

            </div>
        </>
    )
}