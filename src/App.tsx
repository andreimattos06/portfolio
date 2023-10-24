import { ReactElement, ReactEventHandler, useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import './components/Header'
import { Header } from './components/Header'
import { Atom, DotOutline, EnvelopeSimple, Fire, GithubLogo, InstagramLogo, LinkedinLogo, FileTs, Triangle, Hexagon, Equals, Seal, FileJs, MagnifyingGlassPlus, TagSimple, GraduationCap, RocketLaunch, Wrench, Certificate, User, TextAlignJustify, PaperPlaneTilt, Broom } from '@phosphor-icons/react'
import { Input } from './components/Input'
//import * as Dialog from '@radix-ui/react-dialog'


interface ferramentasETecnologias {
  nome: string,
  marcacao: ReactElement,
  icone_tecnologia: ReactElement,
  icone_pericia: ReactElement
}

interface textos {
  [key: string]: string;
}

function App() {

  const tecnologias: ferramentasETecnologias[] = [
    {
      nome: "React", marcacao: <DotOutline size={28} />, icone_tecnologia: <Atom size={28} className='text-defyellow' />, icone_pericia: <Fire size={28} className='bg-red-600 rounded-full p-1' />
    },
    {
      nome: "Next.js", marcacao: <DotOutline size={28} />, icone_tecnologia: <Triangle size={28} className='text-defyellow' />, icone_pericia: <Fire size={28} className='bg-red-600 rounded-full p-1' />
    },
    {
      nome: "TypeScript", marcacao: <DotOutline size={28} />, icone_tecnologia: <FileTs size={28} className='text-defyellow' />, icone_pericia: <Fire size={28} className='bg-red-600 rounded-full p-1' />
    },
    {
      nome: "JavaScript", marcacao: <DotOutline size={28} />, icone_tecnologia: <FileJs size={28} className='text-defyellow' />, icone_pericia: <Fire size={28} className='bg-red-600 rounded-full p-1' />
    },
    {
      nome: "Tailwind CSS", marcacao: <DotOutline size={28} />, icone_tecnologia: <Broom size={28} className='text-defyellow' />, icone_pericia: <Fire size={28} className='bg-red-600 rounded-full p-1' />
    },
    {
      nome: "HTML / CSS", marcacao: <DotOutline size={28} />, icone_tecnologia: <FileJs size={28} className='text-defyellow' />, icone_pericia: <Fire size={28} className='bg-red-600 rounded-full p-1' />
    },
    {
      nome: "Node", marcacao: <DotOutline size={28} />, icone_tecnologia: <Hexagon size={28} className='text-defyellow' />, icone_pericia: <Equals size={28} className='bg-yellow-500 rounded-full p-1' />
    },
    {
      nome: "Jasmine", marcacao: <DotOutline size={28} />, icone_tecnologia: <Seal size={28} className='text-defyellow' />, icone_pericia: <Equals size={28} className='bg-yellow-500 rounded-full p-1' />
    }
  ]

  const [send_nomecompleto, setSendNomeCompleto] = useState("")
  const [send_email, setSendEmail] = useState("")
  const [send_texto, setSendTexto] = useState("")


  const [array_textos, setArrayTextos] = useState<textos>({})
  const texto_ingles: textos = {}
  const texto_portugues: textos = {}
  /** Começo dos textos, os valores são estáticos e podem variar de linguagem, portanto são armazenados em arrays */
  texto_portugues["titulo_inicial"] = "Bem-Vindo"
  texto_ingles["titulo_inicial"] = "Welcome"

  texto_portugues["texto_inicial"] = "👋 Olá 👋, meu nome é Andrei Mattos, tenho 28 anos e sou um entusiasta da tecnologia 💻😎❗\n\n🤵🏼 Atuo como desenvolvedor web 🌐 com foco no frontend mas também possuo experiência em desenvolvimento backend ❗\n\n🏆 Vamos construir juntos o futuro da web ❗"
  texto_ingles["texto_inicial"] = "👋 Hello 👋, my name is Andrei Mattos, im 28 years old and a technology enthusiast 💻😎❗\n\n🤵🏼 I work as a web developer 🌐 focusing on the frontend but i also have experience in backend development ❗\n\n🏆 Let's build the future of web together ❗"

  texto_portugues["titulo_tecnologia"] = "Ferramentas e Tecnologias"
  texto_ingles["titulo_tecnologia"] = "Tools and Technologies"

  texto_portugues["titulo_projetos"] = "Projetos"
  texto_ingles["titulo_projetos"] = "Projects"

  texto_portugues["texto_projetos"] = "Os projetos abaixo não foram realizados para fins comerciais, os mesmo foram elaborados e desenvolvidos apenas para fins de estudo e aperfeiçoamento na utilização de tecnologias diferentes. "
  texto_ingles["texto_projetos"] = "The projects below were not carried out for commercial purposes, they were designed and developed only for study purposes and improving the use of different technologies."

  texto_portugues["titulo_lfreceitas"] = "LF Receitas"
  texto_ingles["titulo_lfreceitas"] = "LF Receitas"

  texto_portugues["texto_lfreceitas"] = "Sistema Web para cadastro de receitas sem a necessidade de cadastro, é gerado um código único no momento do cadastro da receita, código esse que é usado para futuras alterações. Trás consigo a possibilidade de buscar receitas, através de ingredientes individuais facilitando a busca para o usuário."
  texto_ingles["texto_lfreceitas"] = "Web system for registering recipes without necessity of register, a unique code is generated when registering the recipe, this code is used for future changes. It brings the possibility of searching the recipes through individual ingredients, making the search easier for the user"

  texto_portugues["titulo_shopguns"] = "Shop Guns"
  texto_ingles["titulo_shopguns"] = "Shop Guns"

  texto_portugues["texto_shopguns"] = "Sistema Web feito para criação de anúncios de vendas de armamentos, dentro da sua devida legalidade. O sistema conta com suporte a criação de cadastro, criação de anúncios, busca de anúncios, filtro de anúncios, edição de anúncio, etc."
  texto_ingles["texto_shopguns"] = "Web system made for creation weapons sale advertisements, within its due legality. The system supports the creation of advertisements, search of advertisements, filter of advertisements, edition of advertisement, and other things."

  texto_portugues["titulo_kfbeauty"] = "KF Beauty"
  texto_ingles["titulo_kfbeauty"] = "KF Beauty"

  texto_portugues["texto_kfbeauty"] = "Página Web simples apenas para divulgação dos procedimentos estéticos realizados por uma esteticista, página apenas com informações de cada procedimento, possibilidade de agendar atendimentos através de site com redirecionamento para o whatsapp."
  texto_ingles["texto_kfbeauty"] = "Simple web page only for disclosing the aesthetic procedures realized by a beautician, page only with information of each procedure, possibility to schedule appointments through the website with redirect to whatsapp."

  texto_portugues["titulo_reservaveiculo"] = "Reserva de Veiculo"
  texto_ingles["titulo_reservaveiculo"] = "Vehicle Reservation"
  
  texto_portugues["texto_reservaveiculo"] = "Sistema web desenvolvido para facilitar o processo de reserva de veículo em uma determinada empresa, um administrador deve cadastrar os veículos e os usuários e com isso o usuário poderia acessar o calendário escolher a data e hora de partida e retorno que o sistema mostraria apenas os veículos disponíveis. Logo ele poderia fazer a reserva e isso garantiria que nenhum outro usuário reservasse o mesmo veículo, causando algum conflito de agenda."
  texto_ingles["texto_reservaveiculo"] = "Web system developed to facilitate the vehicle reservation process in a given company, an administrator must register the vehicles and users and with this the user could access the calendar choose the date and time of departure and return, and the system would only show the vehicles available. So he could make the reservation and this would ensure that no other user reserved the same vehicle, causing some schedule conflict."

  texto_portugues["titulo_fpe1"] = "For"
  texto_ingles["titulo_fpe1"] = "Trai"
  texto_portugues["titulo_fpe2"] = "mações"
  texto_ingles["titulo_fpe2"] = "nings"
  texto_portugues["titulo_fpe3"] = "e"
  texto_ingles["titulo_fpe3"] = "and"
  texto_portugues["titulo_fpe4"] = "Partici"
  texto_ingles["titulo_fpe4"] = "Partici"
  texto_portugues["titulo_fpe5"] = "pações em "
  texto_ingles["titulo_fpe5"] = "pations in "
  texto_portugues["titulo_fpe6"] = "Even"
  texto_ingles["titulo_fpe6"] = "Even"
  texto_portugues["titulo_fpe7"] = "tos"
  texto_ingles["titulo_fpe7"] = "ts"

  texto_portugues["tipo_fpe1"] = "Bacharel"
  texto_ingles["tipo_fpe1"] = "Bachelor"
  texto_portugues["nome_fpe1"] = "Sistemas de Informação"
  texto_ingles["nome_fpe1"] = "Information Systems"
  texto_portugues["lugar_fpe1"] = "UFGD - Universidade Federal da Grande Dourados"
  texto_ingles["lugar_fpe1"] = "UFGD - Federal University of Grande Dourados"

  texto_portugues["tipo_fpe2"] = "Cursos"
  texto_ingles["tipo_fpe2"] = "Courses"
  texto_portugues["nome_fpe2"] = "Desenvolvimento Web"
  texto_ingles["nome_fpe2"] = "Web Development"
  texto_portugues["lugar_fpe2"] = "HTML, CSS, JavaScript e TypeScript"
  texto_ingles["lugar_fpe2"] = "HTML, CSS, JavaScript e TypeScript"

  texto_portugues["tipo_fpe3"] = "Evento"
  texto_ingles["tipo_fpe3"] = "Event"
  texto_portugues["nome_fpe3"] = "Rocketseat - Next Level Week"
  texto_ingles["nome_fpe3"] = "Rocketseat - Next Level Week"
  texto_portugues["lugar_fpe3"] = "E-Sports"
  texto_ingles["lugar_fpe3"] = "E-Sports"

  texto_portugues["tipo_fpe4"] = "Evento"
  texto_ingles["tipo_fpe4"] = "Event"
  texto_portugues["nome_fpe4"] = "Rocketseat - Next Level Week"
  texto_ingles["nome_fpe4"] = "Rocketseat - Next Level Week"
  texto_portugues["lugar_fpe4"] = "Setup"
  texto_ingles["lugar_fpe4"] = "Setup"

  texto_portugues["titulo_contato"] = "Contato"
  texto_ingles["titulo_contato"] = "Contact"

  texto_portugues["nome_placeholder"] = "Nome Completo"
  texto_ingles["nome_placeholder"] = "Full Name"

  texto_portugues["email_placeholder"] = "Assunto"
  texto_ingles["email_placeholder"] = "Subject"

  texto_portugues["mensagem_placeholder"] = "Mensagem..."
  texto_ingles["mensagem_placeholder"] = "Message..."

  texto_portugues["bottao_enviar"] = "Enviar"
  texto_ingles["bottao_enviar"] = "Send"


  /** --------------------------Fim dos Textos -------------------------------- */



  let div_animadas: string[] = []
  let div_animadas_slide_left: string[] = []
  let div_animadas_slide_right: string[] = []
  let texto_animado: string[] = []

  const [linguagem, setLinguagem] = useState(true)
  const updateLinguagem = (newLinguagem: boolean) => {
    setLinguagem(newLinguagem)
  }

  function hideElement(elemento: HTMLElement | null) {
    if (elemento) {
      elemento.style.display = 'none'
    }
  }

  function moreOpacity(elemento: HTMLElement | null, tempo: number) { //Função para setar a opacidade até 100 gradualmente
    let flag = 0;
    let cont = Number(elemento?.style.opacity)

    flag = setInterval(contarTempo, tempo)

    function contarTempo() {
      if (cont >= 100) {
        clearInterval(flag)
      }
      else if (elemento) {
        elemento.style.opacity = cont.toString()
        cont = cont + 0.05
      }
    }

  }

  function lrSlide(elemento: HTMLElement | null, tempo: number) {
    let flag = 0;
    let cont = -24;

    flag = setInterval(contarTempo, tempo)

    function contarTempo() {
      if (cont > 0) {
        clearInterval(flag)
      }
      else if (elemento) {
        elemento.style.left = cont.toString() + 'rem'
        cont++
      }
    }
  }

  function rlSlide(elemento: HTMLElement | null, tempo: number) {
    let flag = 0;
    let cont = -24;

    flag = setInterval(contarTempo, tempo)

    function contarTempo() {
      if (cont > 0) {
        clearInterval(flag)
      }
      else if (elemento) {
        elemento.style.right = cont.toString() + 'rem'
        cont++
      }
    }
  }

  function onShowVP(elementoID: string, funcao_exec: Function, tempo: number): ReactEventHandler<HTMLDivElement> | undefined { //Função que executa outra função quando o elemento aparece na viewport
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

    if (target) {
      observer.observe(target);
    }

    return undefined;
  }

  function deepCopy(obj: any): any {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    const copy: any = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }

    return copy;
  }


  useEffect(() => {
    setArrayTextos(deepCopy(texto_portugues))

    fetch('https://ipapi.co/json')
      .then(response => response.json())
      .then(data => {
        const client_country = data.country
        if (client_country != "BR") {
          setArrayTextos(deepCopy(texto_ingles))
          setLinguagem(false)
        }
      })
      .catch(error => {
        console.error('Erro ao obter o IP:', error);
      });

    document.body.style.overflowX = 'hidden'
    document.body.style.overflowY = 'hidden'
    let timer_inicial = 0
    let cont = 0
    let screen_width = window.innerWidth;

    const logo = document.getElementById('logo')
    const mae = document.getElementById('div_bg_mae')


    timer_inicial = setInterval(contarTempo, 1000)

    function contarTempo() {
      if (cont > 1) {
        clearInterval(timer_inicial)
        cont = 1
        timer_inicial = setInterval(hideLogo, 40)
      }
      else {
        cont++
      }
    }

    function slide() {
      if (cont > screen_width) {
        hideElement(mae)
        clearInterval(timer_inicial)
        hideElement(document.getElementById('blur_bg'))
        document.body.style.overflowY = 'auto'
        cont = 1

      }
      else if (mae) {
        mae.style.gap = cont.toString() + 'px'
        cont = cont + 10
      }
    }

    function hideLogo() {
      if (cont < 0) {
        clearInterval(timer_inicial)
        hideElement(logo)
        timer_inicial = setInterval(slide, 5)

      }
      else if (logo) {
        logo.style.opacity = cont.toString()
        cont = cont - 0.1
      }

    }
  }, [])

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

  }, [])

  useEffect(() => {

    if (linguagem) {
      setArrayTextos(deepCopy(texto_portugues))

    }
    else {
      setArrayTextos(deepCopy(texto_ingles))
    }
  }, [linguagem])

  return (

    <>

      <div className="z-10 w-screen h-screen opacity-70 bg-neutral-900 absolute grid grid-cols-2 transform-gpu will-change-transform" id="blur_bg">
      </div>

      <div className="absolute grid grid-cols-2 w-screen h-screen z-20 transform-gpu will-change-transform" id="div_bg_mae">
        <div className="bg-black h-screen" id="esquerda"></div>
        <div className="bg-black h-screen" id="direita"></div>
      </div>

      <div className="absolute w-screen h-screen z-30 flex items-center justify-center blur-[1px] transform-gpu" id="logo">
        <div className='w-1/5 rounded-full animate-pulse'>
          <img src="logo2.svg"></img>
        </div>

      </div>

      <Header lingua={linguagem} updateLinguagem={updateLinguagem} />

      <div className='bg-black h-screen mb-[-64px]'>
        <div className='flex flex-col items-center justify-center mt-20 gap-10'>
          <div className='text-defyellow font-bold xl:text-7xl lg:text-5xl tracking-tighter'>
            <span>{array_textos!['titulo_inicial']}</span>
          </div>

          <div className='flex items-center justify-center'>
            <img src='andrei.jpg' className='rounded-full w-3/12' />
          </div>

          <div className='flex flex-col items-center justify-center w-2/4 font-medium gap-5'>
            <span className='border-l-defyellow border-l-2 pl-3 text-justify whitespace-pre-line xl:text-base lg:text-sm'>{array_textos!['texto_inicial']}
            </span>
            <div className='flex justify-center items-center gap-7 xl:text-3xl lg:text-2xl'>
              <a className="hover:text-defyellow" target="_blank" href='https://www.linkedin.com/in/andrei-mattos-8aa873163/'> <LinkedinLogo /> </a>
              <a className="hover:text-defyellow" target="_blank" href='https://www.instagram.com/mattosandrei/'> <InstagramLogo /> </a>
              <a className="hover:text-defyellow" target="_blank" href='https://github.com/andreimattos06'> <GithubLogo /> </a>
              <a className="hover:text-defyellow" target="_blank" href='mailto:andreimattos06@gmail.com?subject=E mail de Andrei Mattos - Portfoliot'> <EnvelopeSimple /> </a>
            </div>
          </div>


        </div>
      </div>

      <div className='flex justify-center items-center mb-28'>

        <div className='flex flex-col justify-center items-start w-4/6'>

          <span className='text-defyellow xl:text-5xl lg:text-3xl font-bold tracking-tighter pb-12'>{array_textos!['titulo_tecnologia']}</span>

          <div className='border-l-[1px] border-defyellow pl-3' id="tecnologias">

            {tecnologias.map((cada, index) => {
              return (
                <div className='flex flex-row justify-start items-center w-full text-white xl:text-xl lg:text-base font-medium gap-3 pb-3 opacity-0' id={'tecnologia' + index.toString()}
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
        <img className="w-5/12" src="desktop.svg" />
      </div>

      <div className='bg-defyellow w-full flex justify-center'>
        <div className='flex flex-col items-center justify-center text-black xl:py-64 lg:pb-48 lg:pt-24 w-6/12 gap-10 text-justify'>
          <span className='xl:text-5xl lg:text-3xl font-bold'>{array_textos["titulo_projetos"]}</span>
          <span className='xl:text-xl lg:text-sm'>{array_textos["texto_projetos"]}</span>
        </div>
      </div>

      <div className='w-full flex px-16'>

        <div className='bg-black flex rounded-xl border-[1px] border-gray-600 -mt-40 drop-shadow-2xl flex-wrap '>

          <div className='border-r-[1px] border-gray-700 px-20 py-14 grid grid-rows-{15} place-items-center w-2/6 h-full gap-7'>

            <span className='xl:text-3xl lg:text-xl font-semibold text-defyellow row-span-2'>{array_textos["titulo_lfreceitas"]}</span>

            <span className='xl:text-xl lg:text-base font-medium text-justify pt-5 row-span-5'>{array_textos["texto_lfreceitas"]}</span>

            <div className='place-self-start flex flex-row justify-center'>
              <span className='xl:text-xl lg:text-base font-semibold text-defyellow'>Front End: </span>
              <Triangle size={24} className='text-white' />
              <span className='xl:text-xl lg:text-base font-medium'> Next.js</span>
            </div>

            <div className='place-self-start flex flex-row justify-center'>
              <span className='xl:text-xl lg:text-base font-semibold text-defyellow'>Back End: </span>
              <Hexagon size={24} className='text-green-600' />
              <span className='xl:text-xl lg:text-base font-medium'> Node</span>
            </div>

            <div className='place-self-start flex flex-row justify-center xl:text-lg lg:text-sm font-medium row-span-2'>
              <ul className='list-disc list-inside'>
                <li>Tailwind</li>
                <li>Typescript</li>
                <li>Prisma</li>
              </ul>
            </div>

            <div className='flex flex-col place-self-start justify-start items-start'>
              <a className="hover:text-defyellow flex flex-row justify-between gap-3" target="_blank" href='https://github.com/andreimattos06/LF-Receitas'>
                <span className='xl:text-lg lg:text-sm font-medium'>Git - Frontend: </span>
                <GithubLogo size={23} />
              </a>
              <a className="hover:text-defyellow flex flex-row justify-between shrink-0 w-full" target="_blank" href='https://github.com/andreimattos06/lfreceitasback'>
                <span className='xl:text-lg lg:text-sm font-medium'>Git - Backend: </span>
                <GithubLogo size={23} />
              </a>
            </div>

            {/*
            <Dialog.Root>
              <div className='h-full flex justify-center items-end row-span-3'>
                <Dialog.Trigger>
                  <button className='hover:bg-white rounded-2xl p-4 text-black bg-defyellow hover:text-defyellow transition-all duration-700 mt-5'>
                    <MagnifyingGlassPlus size={40} className='' />
                  </button>
                </Dialog.Trigger>
              </div>
              <Dialog.Portal>
                <Dialog.Overlay className='bg-black fixed inset-0 opacity-40' />
                <Dialog.Content className='fixed w-8/12 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center'>
                  <div className='bg-black w-full flex border-2 border-defyellow rounded-md justify-center items-center'>
                    {//<img src="teste.gif" className='w-full'/> }
                    <iframe src="https://www.youtube.com/embed/aFpdO-0vrzs?autoplay=1&mute=1" width="1280" height="720" allow="autoplay">

                    </iframe>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            
          */}

          </div>

          <div className='border-r-[1px] border-gray-700 px-20 py-14 grid grid-rows-{15} place-items-center w-2/6 h-full gap-7'>

            <span className='xl:text-3xl lg:text-xl font-semibold text-defyellow row-span-2'>{array_textos["titulo_shopguns"]}</span>

            <span className='xl:text-xl lg:text-base font-medium text-justify row-span-5'>{array_textos["texto_shopguns"]}</span>

            <div className='place-self-start flex flex-row justify-center'>
              <span className='xl:text-xl lg:text-base font-semibold text-defyellow'>Front End: </span>
              <Atom size={24} className='text-blue-400' />
              <span className='xl:text-xl lg:text-base font-medium'> React</span>
            </div>

            <div className='place-self-start flex flex-row justify-center'>
              <span className='xl:text-xl lg:text-base font-semibold text-defyellow'>Back End: </span>
              <Hexagon size={24} className='text-green-600' />
              <span className='xl:text-xl lg:text-base font-medium'> Node</span>
            </div>

            <div className='place-self-start flex flex-row justify-center xl:text-lg lg:text-sm font-medium row-span-2'>
              <ul className='list-disc list-inside'>
                <li>Tailwind</li>
                <li>Typescript</li>
                <li>Prisma</li>
              </ul>
            </div>

            <div className='flex justify-self-start justify-center hover:text-defyellow'>
              <a className="hover:text-defyellow flex flex-row justify-between gap-3" target="_blank" href='https://github.com/andreimattos06/ShopGuns'>
                <span className='xl:text-lg lg:text-sm font-medium'>Git - Frontend/Backend: </span>
                <GithubLogo size={23} />
              </a>

            </div>


            {/*
            <div className='h-full flex justify-center items-end row-span-3'>
              <button className='hover:bg-white rounded-2xl p-4 text-black bg-defyellow hover:text-defyellow transition-all duration-700'>
                <MagnifyingGlassPlus size={40} className='' />
              </button>
            </div>
            */}

          </div>

          <div className='px-20 py-14 grid grid-rows-{15} place-items-center w-2/6 h-full gap-7'>

            <span className='xl:text-3xl lg:text-xl font-semibold text-defyellow row-span-2'>{array_textos["titulo_kfbeauty"]}</span>

            <span className='xl:text-xl lg:text-base font-medium text-justify row-span-5'>{array_textos["texto_kfbeauty"]}</span>

            <div className='place-self-start flex flex-row justify-center'>
              <span className='xl:text-xl lg:text-base font-semibold text-defyellow'>Front End: </span>
              <TagSimple size={24} className='text-blue-400 rotate-90' />
              <span className='xl:text-xl lg:text-base font-medium'>HTML e CSS</span>
            </div>


            <div className='flex justify-self-start justify-center hover:text-defyellow'>
              <a className="hover:text-defyellow flex flex-row justify-center gap-3" target="_blank" href='https://github.com/andreimattos06/KFBeauty'>
                <span className='xl:text-lg lg:text-sm font-medium'>Git: </span>
                <GithubLogo size={23} />
              </a>

            </div>

            {/* 
            <div className='h-full flex justify-center items-end row-span-6'>
              <button className='hover:bg-white rounded-2xl p-4 text-black bg-defyellow hover:text-defyellow transition-all duration-700'>
                <MagnifyingGlassPlus size={40} className='' />
              </button>
            </div>
            */}

          </div>
        </div>
      </div>

      <div className='w-full flex px-16 mb-96 mt-10 justify-center'>
        <div className='border-[1px] rounded-lg border-gray-700 px-20 grid grid-rows-{15} place-items-center w-2/6 h-full gap-7 py-14'>

          <span className='xl:text-3xl lg:text-xl font-semibold text-defyellow row-span-2'>{array_textos["titulo_reservaveiculo"]}</span>

          <span className='xl:text-xl lg:text-base font-medium text-justify row-span-5'>{array_textos["texto_reservaveiculo"]}</span>

          <div className='place-self-start flex flex-row justify-center'>
            <span className='xl:text-xl lg:text-base font-semibold text-defyellow'>Front End: </span>
            <Triangle size={24} className='text-white' />
            <span className='xl:text-xl lg:text-base font-medium'> Next.js</span>
          </div>

          <div className='place-self-start flex flex-row justify-center'>
            <span className='xl:text-xl lg:text-base font-semibold text-defyellow'>Back End: </span>
            <Hexagon size={24} className='text-green-600' />
            <span className='xl:text-xl lg:text-base font-medium'> Node</span>
          </div>

          <div className='place-self-start flex flex-row justify-center xl:text-lg lg:text-sm font-medium row-span-2'>
            <ul className='list-disc list-inside'>
              <li>Tailwind</li>
              <li>Prisma</li>
              <li>Next Auth</li>
              <li>JWT Token and Refresh Token</li>
            </ul>
          </div>

          <div className='flex flex-col place-self-start justify-start items-start'>
            <a className="hover:text-defyellow flex flex-row justify-between gap-3" target="_blank" href='https://github.com/andreimattos06/Reserva_de_Veiculo'>
              <span className='xl:text-lg lg:text-sm font-medium'>Git - Frontend: </span>
              <GithubLogo size={23} />
            </a>
            <a className="hover:text-defyellow flex flex-row justify-between shrink-0 w-full" target="_blank" href='https://github.com/andreimattos06/Reserva_veiculo_server'>
              <span className='xl:text-lg lg:text-sm font-medium'>Git - Backend: </span>
              <GithubLogo size={23} />
            </a>
          </div>



          <div className='flex justify-center items-end row-span-3'>
            <a className='hover:bg-white rounded-2xl p-4 text-black bg-defyellow hover:text-defyellow transition-all duration-700' target='_blank' href='https://reserva-de-veiculo.vercel.app/'>
              <MagnifyingGlassPlus className='xl:text-4xl lg:text-2xl'/>
            </a>
          </div>


        </div>
      </div>



      <div>
        <div className='w-full flex-row flex text-defyellow xl:text-5xl lg:text-3xl tracking-tighter font-bold justify-center items-center gap-5'>
          <hr className='grow border-defyellow border-2' />
          <div>
            {/* @ts-ignore */}
            <span className='opacity-0' id="For" onLoad={texto_animado.push("For")}>{array_textos["titulo_fpe1"]}</span>
            <span className=''>{array_textos["titulo_fpe2"]}</span>
            {/* @ts-ignore */}
            <span className='opacity-0' id="e" onLoad={texto_animado.push("e")}> {array_textos["titulo_fpe3"]} </span>
            <span className=''>{array_textos["titulo_fpe4"]}</span>
            {/* @ts-ignore */}
            <span className='opacity-0' id="pacoesem" onLoad={texto_animado.push("pacoesem")}>{array_textos["titulo_fpe5"]}</span>
            <span className='' >{array_textos["titulo_fpe6"]}</span>
            {/* @ts-ignore */}
            <span className='opacity-0' id="tos" onLoad={texto_animado.push("tos")}>{array_textos["titulo_fpe7"]}</span>
          </div>

          <hr className='grow border-defyellow border-2' />
        </div>



        <div className='grid grid-cols-9 justify-center place-items-center mt-48 gap-20 relative'>


          <div className='col-span-4 bg-defyellow w-full rounded-r-md -left-96 relative' id="esquerda1">
            <div className='flex items-center justify-start py-5 px-5 gap-5'>
              <GraduationCap className='lg:text-7xl text-black' />
              <div className='flex flex-col justify-center items-center xl:text-xl lg:text-base text-black font-semibold w-full'>
                <span>{array_textos["tipo_fpe1"]}</span>
                <span>{array_textos["nome_fpe1"]}</span>
                <span>{array_textos["lugar_fpe1"]}</span>

              </div>
            </div>
          </div>
          <div className='col-span-1 xl:text-4xl lg:text-2xl font-bold'>
            2019
          </div>
          <div className='col-span-4'>
          </div>
          {/* @ts-ignore */}
          <div className='col-span-9' onLoad={div_animadas_slide_left.push("esquerda1")} />



          <div className='col-span-4 bg-defyellow w-full rounded-r-md -right-96 relative' id="esquerda2">
            <div className='flex items-center justify-start py-5 px-5 gap-5'>
              <Certificate className='lg:text-7xl text-black' />
              <div className='flex flex-col justify-center items-center xl:text-xl lg:text-base text-black font-semibold w-full'>
                <span>{array_textos["tipo_fpe2"]}</span>
                <span>{array_textos["nome_fpe2"]}</span>
                <span>{array_textos["lugar_fpe2"]}</span>
              </div>

            </div>
          </div>
          {/* @ts-ignore */}
          <div className='col-span-1 xl:text-4xl lg:text-2xl font-bold'>
            2022
          </div>
          <div className='col-span-4 bg-defyellow w-full rounded-l-md -right-96 relative' id="direita1">
            <div className='flex items-center justify-start py-5 px-5 gap-5'>

              <div className='flex flex-col justify-center items-center xl:text-xl lg:text-base text-black font-semibold w-full'>
                <span>{array_textos["tipo_fpe3"]}</span>
                <span>{array_textos["nome_fpe3"]}</span>
                <span>{array_textos["lugar_fpe3"]}</span>
              </div>
              <RocketLaunch className='lg:text-7xl text-black' />
            </div>
          </div>
          {/* @ts-ignore */}
          <div className='col-span-9' onLoad={div_animadas_slide_right.push("direita1"), div_animadas_slide_left.push("esquerda2")} />



          <div className='col-span-4 bg-defyellow w-full rounded-r-md -left-96 relative' id="esquerda3">
            <div className='flex items-center justify-start py-5 px-5 gap-5'>
              <Wrench className='lg:text-7xl text-black' />
              <div className='flex flex-col justify-center items-center xl:text-xl lg:text-base text-black font-semibold w-full'>
                <span>{array_textos["tipo_fpe4"]}</span>
                <span>{array_textos["nome_fpe4"]}</span>
                <span>{array_textos["lugar_fpe4"]}</span>

              </div>
            </div>
          </div>
          <div className='col-span-1 xl:text-4xl lg:text-2xl font-bold'>
            2023
          </div>
          <div className='col-span-4'>
          </div>
          {/* @ts-ignore */}
          <div className='col-span-9' onLoad={div_animadas_slide_left.push("esquerda3")} />

        </div>
      </div>

      <div className='w-full flex-row flex text-defyellow xl:text-5xl lg:text-3xl tracking-tighter font-bold items-center gap-5 mt-48'>
        <hr className='border-defyellow border-2 w-1/12' />
        <span className='text-defyellow xl:text-5xl lg:text-3xl'>{array_textos["titulo_contato"]}</span>
        <hr className='grow border-defyellow border-2' />
      </div>

      <div className='w-full flex justify-center items-center'>
        <div className='w-6/12 grid grid-cols-1 mt-20 gap-5'>
          <Input value={send_nomecompleto} Evento={setSendNomeCompleto} placeholder={array_textos["nome_placeholder"]} icon={<User size={32} />} />
          <Input value={send_email} Evento={setSendEmail} placeholder={array_textos["email_placeholder"]} icon={<EnvelopeSimple size={32} />} />
          <Input value={send_texto} Evento={setSendTexto} placeholder={array_textos["mensagem_placeholder"]} icon={<TextAlignJustify size={32} />} />

          <a href={"mailto:andreimattos06@gmail.com?subject=" + send_nomecompleto + " - " + send_email +  "&body=" + send_texto}>
            <button className='lg:text-base xl:text-lg flex items-center gap-3 border-2 py-2 px-1 border-defyellow text-defyellow justify-center bg-black w-2/12 hover:bg-defyellow hover:text-black duration-700'><PaperPlaneTilt className='lg:text-lg xl:text-2xl'/>
              {array_textos["bottao_enviar"]}
            </button>
          </a>
        </div>
      </div>

      <div className='w-full mt-28 flex items-center justify-center text-white text-xs'>
        <span>Andrei dos Santos Mattos - 2023</span>
      </div>


    </>
  )
}




export default App
