import { List, X } from "@phosphor-icons/react";
import { LogoAnimado } from "./LogoAnimado";
import { useEffect, useState } from "react";
import { deepCopy } from '../utils/DeepCopy'
import clsx from "clsx";

interface HeaderProps{
    lingua: boolean
    updateLinguagem: (newLinguagem: boolean) => void
}

interface textos {
    [key: string]: string;
  }

export function Header(props: HeaderProps){

const [isMenuOpen, setIsMenuOpen] = useState(false)
const [buttonMenuDiv, setButtonMenuDiv] = useState(true)
const [divMenuOriPos, setdivMenuOriPos] = useState(0) 
const [opcoesMenu, setOpcoesMenu] = useState(false)
const [array_textos, setArrayTextos] = useState<textos>({})
const texto_ingles: textos = {}
const texto_portugues: textos = {}

texto_portugues['primeiro'] = "Sobre Mim"
texto_ingles['primeiro'] = "About Me"

texto_portugues['segundo'] = "Ferramentas e Tecnologias"
texto_ingles['segundo'] = "Tools and Technologies"

texto_portugues['terceiro'] = "Projetos"
texto_ingles['terceiro'] = "Projects"

texto_portugues['quarto'] = "Formações e Participações em Eventos"
texto_ingles['quarto'] = "Trainings and Participations is Events"

texto_portugues['quinto'] = "Contato"
texto_ingles['quinto'] = "Contact"

/*useEffect(() => {
    if (isMenuOpen){
        //document.body.style.overflowY = 'hidden'
    }
},[isMenuOpen])
*/

useEffect(() => {

    if (props.lingua) {
      setArrayTextos(deepCopy(texto_portugues))

    }
    else {
      setArrayTextos(deepCopy(texto_ingles))
    }
  }, [props.lingua])



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
            //document.body.style.overflowY = 'auto'
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

function scrollToSectionAndCloseMenu(section: string){
    clickMenu();
    document.getElementById(section)!.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


    return(
        <>          
            <div className={clsx("w-full bg-transparent flex flex-col items-center px-12 py-8 lg:px-24 lg:py-16 z-0 transform-gpu will-change-transform", {'border-b-[1px] border-white/20' : isMenuOpen})} id='buttondiv'>
                <div className="flex justify-between items-center w-full">
                    <div>
                        <LogoAnimado />
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="fixed">
                            <button onClick={clickMenu} id="menuButton" className="p-1 xl:p-3 text-sm xl:text-3xl lg:text-xl transition ease-in duration-200 hover:bg-defyellow w-full rounded-full border-2 border-defyellow">
                                {isMenuOpen ?  <X/> : <List/>}
                            </button>
                            
                        </div>
                    </div>  
                </div>
                <div id="opcoes_menu" className="opacity-0">
                    {opcoesMenu ? 
                        <div className="grid grid-cols-1 pt-8 lg:pt-32 text-base md:text-xl xl:text-4xl lg:text-2xl gap-10 font-semibold content-center place-items-center text-center" >
                                <button className="hover:text-defyellow" onClick={() =>{scrollToSectionAndCloseMenu("profile")}}>{array_textos['primeiro']}</button>
                                <button className="hover:text-defyellow" onClick={() =>{scrollToSectionAndCloseMenu("technologies")}}>{array_textos['segundo']}</button>
                                <button className="hover:text-defyellow" onClick={() =>{scrollToSectionAndCloseMenu("projects")}}>{array_textos['terceiro']}</button>
                                <button className="hover:text-defyellow" onClick={() =>{scrollToSectionAndCloseMenu("formations")}}>{array_textos['quarto']}</button>
                                <button className="hover:text-defyellow" onClick={() =>{scrollToSectionAndCloseMenu("contact")}}>{array_textos['quinto']}</button>                                
                                <div className="flex flex-row w-full gap-3 items-center justify-center">
                                    <button className={clsx('w-6 xl:w-[3.24rem] lg:w-[2.5rem] hover:opacity-100 duration-700', {'opacity-40' : !props.lingua})} onClick={() => props.updateLinguagem(true)}>
                                        <img src="brasil.svg" />
                                    </button>
                                    <button className={clsx('w-6 xl:w-14 lg:w-[2.5rem] hover:opacity-100 duration-700', {'opacity-40' : props.lingua})} onClick={() => props.updateLinguagem(false)}>
                                        <img src="english.svg" />
                                    </button>                                    
                                </div>                                
                        </div> 
                        : 
                        <></>
                    }
                </div>
                

            </div>
        </>
    )
}