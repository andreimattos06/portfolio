import { ReactElement, ReactEventHandler} from 'react'
import { useEffect } from 'react'
import './App.css'
import './components/Header'
import { Header } from './components/Header'
import { Atom, DotOutline, EnvelopeSimple, Fire, GithubLogo, InstagramLogo, LinkedinLogo, FileTs, Triangle, Hexagon, Equals, Seal, FileJs, MagnifyingGlassPlus, TagSimple, GraduationCap, RocketLaunch, Wrench, Certificate } from '@phosphor-icons/react'


interface ferramentasETecnologias{
  nome: string,
  marcacao: ReactElement,
  icone_tecnologia: ReactElement,
  icone_pericia: ReactElement
}

function App() {

const tecnologias: ferramentasETecnologias[] = [
  {
  nome: "React", marcacao: <DotOutline size={28}/>, icone_tecnologia: <Atom size={28} className='text-defyellow'/>, icone_pericia: <Fire size={28} className='bg-red-600 rounded-full p-1'/>
  },
  {
    nome: "Next.js", marcacao: <DotOutline size={28}/>, icone_tecnologia: <Triangle size={28} className='text-defyellow'/>, icone_pericia: <Fire size={28} className='bg-red-600 rounded-full p-1'/>
  },
  {
    nome: "TypeScript", marcacao: <DotOutline size={28}/>, icone_tecnologia: <FileTs size={28} className='text-defyellow'/>, icone_pericia: <Fire size={28} className='bg-red-600 rounded-full p-1'/>
  },
  {
    nome: "JavaScript", marcacao: <DotOutline size={28}/>, icone_tecnologia: <FileJs size={28} className='text-defyellow'/>, icone_pericia: <Fire size={28} className='bg-red-600 rounded-full p-1'/>
  },
  {
    nome: "HTML / CSS", marcacao: <DotOutline size={28}/>, icone_tecnologia: <FileJs size={28} className='text-defyellow'/>, icone_pericia: <Fire size={28} className='bg-red-600 rounded-full p-1'/>
  },
  {
    nome: "Node", marcacao: <DotOutline size={28}/>, icone_tecnologia: <Hexagon size={28} className='text-defyellow'/>, icone_pericia: <Equals size={28} className='bg-yellow-500 rounded-full p-1'/>
  },
  {
    nome: "Jasmine", marcacao: <DotOutline size={28}/>, icone_tecnologia: <Seal size={28} className='text-defyellow'/>, icone_pericia: <Equals size={28} className='bg-yellow-500 rounded-full p-1'/>
  }
]

let div_animadas: string[] = []
let div_animadas_slide_left: string[] = []
let div_animadas_slide_right: string[] = []
let texto_animado: string[] = []

function hideElement(elemento: HTMLElement | null){
  if(elemento){
    elemento.style.display = 'none'
  }
}

function moreOpacity(elemento: HTMLElement | null, tempo: number){ //Função para setar a opacidade até 100 gradualmente
  let flag = 0;
  let cont = Number(elemento?.style.opacity)
  
  flag = setInterval(contarTempo, tempo)

  function contarTempo(){
    if(cont >= 100)
    {
      clearInterval(flag)
    }
    else if(elemento){
      elemento.style.opacity = cont.toString()
      cont = cont + 0.05
    }
  }

}

function lrSlide(elemento: HTMLElement | null, tempo: number){
  let flag = 0;
  let cont = -24;
  console.log(elemento)
  
  flag = setInterval(contarTempo, tempo)

  function contarTempo(){
    if(cont > 0)
    {
      clearInterval(flag)
    }
    else if(elemento){
      elemento.style.left = cont.toString() + 'rem'      
      cont++
      console.log(cont)
    }
  }
}

function rlSlide(elemento: HTMLElement | null, tempo: number){
  let flag = 0;
  let cont = -24;
  console.log(elemento)
  
  flag = setInterval(contarTempo, tempo)

  function contarTempo(){
    if(cont > 0)
    {
      clearInterval(flag)
    }
    else if(elemento){
      elemento.style.right = cont.toString() + 'rem'      
      cont++
      console.log(cont)
    }
  }
}

function onShowVP(elementoID: string, funcao_exec: Function, tempo: number): ReactEventHandler<HTMLDivElement> | undefined{ //Função que executa outra função quando o elemento aparece na viewport
  const target = document.getElementById(elementoID)

  const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // The component is now visible in the viewport
        funcao_exec(target, tempo)
        
        // Perform actions or trigger events for the visible component
        
        // Stop observing once the component is visible (if needed)
        observer.unobserve(entry.target);
        }
      });
    });

    if(target){
      observer.observe(target);
    }

    return undefined;
}


useEffect(() => {
  document.body.style.overflowX = 'hidden' 
  document.body.style.overflowY = 'hidden' 
  let timer_inicial = 0
  let cont = 0
  let screen_width = window.innerWidth;

  const logo = document.getElementById('logo')
  const mae = document.getElementById('div_bg_mae')
  

  timer_inicial = setInterval(contarTempo, 1000)

  

  function contarTempo(){
    if (cont > 1){
      clearInterval(timer_inicial)
      cont = 1
      timer_inicial = setInterval(hideLogo, 40)
    }
    else{
      cont++
    }
  }

  function slide(){
    if (cont > screen_width){
      hideElement(mae)      
      clearInterval(timer_inicial)
      hideElement(document.getElementById('blur_bg'))
      document.body.style.overflowY = 'auto' 
      cont = 1

    }
    else if(mae){
      mae.style.gap = cont.toString() + 'px'
      cont = cont + 10
    }
  }

  function hideLogo(){
    if (cont < 0){
      clearInterval(timer_inicial)
      hideElement(logo)
      timer_inicial = setInterval(slide, 5)
      
    }
    else if (logo){
      logo.style.opacity = cont.toString()
      cont = cont - 0.1
    }

  }
},[])

useEffect(() => { //useEffect para carregar as animações e transições de divs
  div_animadas.map(cada => {
    onShowVP(cada, moreOpacity, 100)
  })

  texto_animado.map(cada => {
    onShowVP(cada, moreOpacity, 80)
  })

  div_animadas_slide_left.map(cada => {
    onShowVP(cada, lrSlide, 20)
  })

  div_animadas_slide_right.map(cada => {
    onShowVP(cada, rlSlide, 20)
  })

},[])


  return (
    
    <>
    
        <div className="z-10 w-full h-screen opacity-70 bg-neutral-900 absolute grid grid-cols-2 transform-gpu will-change-transform" id="blur_bg">             
        </div>

        <div className="absolute grid grid-cols-2 w-full h-screen z-20 transform-gpu will-change-transform" id="div_bg_mae">
            <div className="bg-black h-screen" id="esquerda"></div>
            <div className="bg-black h-screen" id="direita"></div>
        </div>

        <div className="absolute w-full h-full z-30 flex items-center justify-center blur-[1px] transform-gpu" id="logo">
            <div className='w-1/5 rounded-full animate-pulse'>
              <img src="logo2.svg"></img>
            </div>
            
        </div>
        
      <Header />

      <div className='bg-black h-screen mb-[-64px]'>
        <div className='flex flex-col items-center justify-center mt-20 gap-10'>
          <div className='text-defyellow font-bold text-7xl tracking-tighter'>
            <span>Bem Vindo</span>
          </div>

          <div className='flex items-center justify-center'>
            <img src='andrei.jpg' className='rounded-full w-3/12'/>
          </div>

          <div className='flex flex-col items-center justify-center w-2/4 font-medium gap-5'>
            <span className=' border-l-defyellow border-l-2 pl-3'>Meu nome é Andrei Mattos, sou desenvolvedor Front-End, atualmente resido em Goiás - Brasil.               
            </span>
            <div className='flex justify-center items-center gap-7'>
              <a className="hover:text-defyellow" target="_blank" href='https://www.linkedin.com/in/andrei-mattos-8aa873163/'> <LinkedinLogo size={32} /> </a>
              <a className="hover:text-defyellow" target="_blank" href='https://www.instagram.com/mattosandrei/'> <InstagramLogo size={32} /> </a>
              <a className="hover:text-defyellow" target="_blank" href='https://github.com/andreimattos06'> <GithubLogo size={32} /> </a>
              <a className="hover:text-defyellow" target="_blank" href='mailto:andreimattos06@gmail.com?subject=E mail de Andrei Mattos - Portfoliot'> <EnvelopeSimple size={32} /> </a>
            </div>
          </div> 
          

        </div>        
      </div>

      <div className='flex justify-center items-center mb-28'>

        <div className='flex flex-col justify-center items-start w-4/6'>

          <span className='text-defyellow text-5xl font-bold tracking-tighter pb-12'>Ferramentas e Tecnologias</span>

          <div className='border-l-[1px] border-defyellow pl-3' id="tecnologias">

            {tecnologias.map((cada, index) => {
              return (
                <div className='flex flex-row justify-start items-center w-full text-white text-xl font-medium gap-3 pb-3 opacity-0' id={'tecnologia' + index.toString()}
                     /* @ts-ignore */
                     onLoad={div_animadas.push('tecnologia' + index.toString())}>
                  {cada.marcacao}
                  {cada.icone_tecnologia}
                  {cada.nome}                
                  {cada.icone_pericia}
                </div>
                )
                
            })}

          </div>

        </div>

      </div>

      <div className='flex justify-center items-center w-full'>
        <img className="w-5/12" src="desktop.svg"/>
      </div>

      <div className='bg-defyellow w-full flex justify-center'>
        <div className='flex flex-col items-center justify-center text-black py-64 w-6/12 gap-10 text-justify'>
            <span className='text-5xl font-bold'>Projetos</span>
            <span>Os projetos abaixo não foram realizados para fins comerciais, os mesmo foram elaborados e desenvolvidos apenas para fins de estudo e aperfeiçoamento na utilização de tecnologias diferentes. </span>    
        </div>
      </div>

      <div className='w-full flex px-16 mb-96'>
            <div className='bg-black flex rounded-xl border-[1px] border-gray-600 -mt-40 drop-shadow-2xl'>
              
              <div className='border-r-[1px] border-gray-700 px-20 py-14 grid grid-rows-{15} place-items-center w-2/6 h-full gap-7'>

                <span className='text-3xl font-semibold text-defyellow row-span-2'>LF Receitas</span>

                <span className='text-xl font-medium text-justify pt-5 row-span-5'>Sistema Web para cadastro de receitas sem a necessidade de cadastro, é gerado um código único no momento do cadastro da receita, código esse que é usado para futuras alterações. Trás consigo a possibilidade de buscar receitas, através de ingredientes individuais facilitando a busca para o usuário.</span>

                <div className='place-self-start flex flex-row justify-center'>
                  <span className='text-xl font-semibold text-defyellow'>Front End: </span>
                  <Triangle size={24} className='text-white'/> 
                  <span className='text-xl font-medium'> Next.js</span>
                </div>

                <div className='place-self-start flex flex-row justify-center'>
                  <span className='text-xl font-semibold text-defyellow'>Back End: </span>
                  <Hexagon size={24} className='text-green-600'/> 
                  <span className='text-xl font-medium'> Node</span>
                </div>

                <div className='place-self-start flex flex-row justify-center text-lg font-medium row-span-2'>
                  <ul className='list-disc list-inside'>
                    <li>Tailwind</li>
                    <li>Typescript</li>
                    <li>Prisma</li>
                  </ul> 
                </div>

                <div className='flex place-self-start justify-center hover:text-defyellow'>
                  <a className="hover:text-defyellow flex flex-row justify-center" target="_blank" href='https://github.com/andreimattos06/LookingForRecipes'>
                    <span className='text-lg font-medium'>Git: </span>
                    <GithubLogo size={23} /> 
                  </a>
                 
                </div>
                

                <div className='h-full flex justify-center items-end row-span-3'>
                  <button className='hover:bg-white rounded-2xl p-4 text-black bg-defyellow hover:text-defyellow transition-all duration-700 mt-5'>
                    <MagnifyingGlassPlus size={40} className=''/>
                  </button>
                </div>

              </div>
                      
              <div className='border-r-[1px] border-gray-700 px-20 py-14 grid grid-rows-{15} place-items-center w-2/6 h-full gap-7'>

                <span className='text-3xl font-semibold text-defyellow row-span-2'>Shop Guns</span>

                <span className='text-xl font-medium text-justify row-span-5'>Sistema Web feito para criação de anúncios de vendas de armamentos, dentro da sua devida legalidade. O sistema conta com suporte a criação de cadastro, criação de anúncios, busca de anúncios, filtro de anúncios, edição de anúncio, etc.</span>

                <div className='place-self-start flex flex-row justify-center'>
                  <span className='text-xl font-semibold text-defyellow'>Front End: </span>
                  <Atom size={24} className='text-blue-400'/> 
                  <span className='text-xl font-medium'> React</span>
                </div>

                <div className='place-self-start flex flex-row justify-center'>
                  <span className='text-xl font-semibold text-defyellow'>Back End: </span>
                  <Hexagon size={24} className='text-green-600'/> 
                  <span className='text-xl font-medium'> Node</span>
                </div>

                <div className='place-self-start flex flex-row justify-center text-lg font-medium row-span-2'>
                  <ul className='list-disc list-inside'>
                    <li>Tailwind</li>
                    <li>Typescript</li>
                    <li>Prisma</li>
                  </ul> 
                </div>

                <div className='flex justify-self-start justify-center hover:text-defyellow'>
                  <a className="hover:text-defyellow flex flex-row justify-center" target="_blank" href='https://github.com/andreimattos06/ShopGuns'>
                    <span className='text-lg font-medium'>Git: </span>
                    <GithubLogo size={23} /> 
                  </a>
                 
                </div>
                


                <div className='h-full flex justify-center items-end row-span-3'>
                  <button className='hover:bg-white rounded-2xl p-4 text-black bg-defyellow hover:text-defyellow transition-all duration-700'>
                    <MagnifyingGlassPlus size={40} className=''/>
                  </button>
                </div>

              </div>

              <div className='px-20 py-14 grid grid-rows-{15} place-items-center w-2/6 h-full gap-7'>

                <span className='text-3xl font-semibold text-defyellow row-span-2'>KF Beauty</span>

                <span className='text-xl font-medium text-justify row-span-5'>Página Web simples apenas para divulgação dos procedimentos estéticos realizados por uma esteticista, página apenas com informações de cada procedimento, possibilidade de agendar atendimentos através de site com redirecionamento para o whatsapp.</span>

                <div className='place-self-start flex flex-row justify-center'>
                  <span className='text-xl font-semibold text-defyellow'>Front End: </span>
                  <TagSimple size={24} className='text-blue-400 rotate-90'/> 
                  <span className='text-xl font-medium'>HTML e CSS</span>
                </div>


                <div className='flex justify-self-start justify-center hover:text-defyellow'>
                  <a className="hover:text-defyellow flex flex-row justify-center" target="_blank" href='https://github.com/andreimattos06/KFBeauty'>
                    <span className='text-lg font-medium'>Git: </span>
                    <GithubLogo size={23} /> 
                  </a>                  
                 
                </div>
                
                <div className='h-full flex justify-center items-end row-span-6'>
                  <button className='hover:bg-white rounded-2xl p-4 text-black bg-defyellow hover:text-defyellow transition-all duration-700'>
                    <MagnifyingGlassPlus size={40} className=''/>
                  </button>
                </div>
                

              </div>

            </div>
      </div>

      <div>
        <div className='w-full flex-row flex text-defyellow text-5xl tracking-tighter font-bold justify-center items-center gap-5'>
          <hr className='grow border-defyellow border-2'/>
          <div>
           {/* @ts-ignore */}
            <span className='opacity-0' id="For"  onLoad={texto_animado.push("For")}>For</span>
            <span className=''>mações</span>
             {/* @ts-ignore */}
            <span className='opacity-0' id="e"  onLoad={texto_animado.push("e")}> e </span>
            <span className=''>Partici</span>
             {/* @ts-ignore */}
            <span className='opacity-0' id="pacoesem"  onLoad={texto_animado.push("pacoesem")}>pações em</span>
            <span className='' > Even</span>
             {/* @ts-ignore */}
            <span className='opacity-0'id="tos"  onLoad={texto_animado.push("tos")}>tos</span>
          </div>
          
          <hr className='grow border-defyellow border-2'/>
        </div>



        <div className='grid grid-cols-9 justify-center place-items-center mt-48 gap-20 relative'>


          <div className='col-span-4 bg-defyellow w-full rounded-r-md -left-96 relative' id="esquerda1">
            <div className='flex items-center justify-start py-5 px-5 gap-5'>
              <GraduationCap size={80} className='text-black'/>
              <div className='flex flex-col justify-center items-center text-xl text-black font-semibold w-full'>
                <span>Bacharel</span>
                <span>Sistemas de Informação</span>
                <span>UFGD - Universidade Federal da Grande Dourados</span>

              </div>
            </div>
          </div>
          <div className='col-span-1 text-4xl font-bold'>
            2019
          </div>
          <div className='col-span-4'>
          </div>
             {/* @ts-ignore */}
          <div className='col-span-9' onLoad={div_animadas_slide_left.push("esquerda1")}/>



          <div className='col-span-4 bg-defyellow w-full rounded-r-md -right-96 relative' id="esquerda2">         
            <div className='flex items-center justify-start py-5 px-5 gap-5'>
              <Certificate size={80} className='text-black'/>
              <div className='flex flex-col justify-center items-center text-xl text-black font-semibold w-full'>
                <span>Cursos</span>
                <span>Desenvolvimento Web</span>
                <span>HTML, CSS, JavaScript e TypeScript</span>
              </div>
              
            </div>
          </div> 
           {/* @ts-ignore */}
          <div className='col-span-1 text-4xl font-bold'>
            2022
          </div>
          <div className='col-span-4 bg-defyellow w-full rounded-l-md -right-96 relative' id="direita1">         
            <div className='flex items-center justify-start py-5 px-5 gap-5'>
              
              <div className='flex flex-col justify-center items-center text-xl text-black font-semibold w-full'>
                <span>Evento</span>
                <span>Rocketseat - Next Level Week</span>
                <span>E-Sports</span>
              </div>
              <RocketLaunch size={80} className='text-black'/>
            </div>
          </div> 
           {/* @ts-ignore */}
          <div className='col-span-9' onLoad={div_animadas_slide_right.push("direita1"), div_animadas_slide_left.push("esquerda2")}/>



          <div className='col-span-4 bg-defyellow w-full rounded-r-md -left-96 relative' id="esquerda3">
            <div className='flex items-center justify-start py-5 px-5 gap-5'>
              <Wrench size={80} className='text-black'/>
              <div className='flex flex-col justify-center items-center text-xl text-black font-semibold w-full'>
                <span>Evento</span>
                <span>Rocketseat - Next Level Week</span>
                <span>Setup</span>

              </div>
            </div>
          </div>
          <div className='col-span-1 text-4xl font-bold'>
            2023
          </div>
          <div className='col-span-4'>
          </div>
             {/* @ts-ignore */}
          <div className='col-span-9' onLoad={div_animadas_slide_left.push("esquerda3")}/>

        </div>
      </div>

      <div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
      
      
    </>
  )
}




export default App
