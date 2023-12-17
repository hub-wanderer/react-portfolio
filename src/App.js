import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import { useRef } from 'react';


function App() {
  function preventing(e){
    e.preventDefault();
  }


  const ref = useRef();
  return (
    <div className="bg-mbgcl overflow-x-hidden font-body">
        <Parallax pages={3} ref={ref}>
        <div ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}  className="flex flex-col gap-gbe mb-[3rem] mt-[2rem]">

            <ParallaxLayer speed={2.5} onScroll={() => ref.current.scrollTo(1)} offset={0}>
            <div className="border-2 mx-8 my-8 border-textc border-solid flex flex-col">

                <div className="flex border-b-2 border-textc justify-between text-textc bg-topnavbar items-center">
                    <div className="mx-4">
                        <a className="text-2xl font-bold" href="">Fluent</a>
                    </div>
                    <div className="flex items-center gap-7 h-16 mx-4">
                        <a onClick={preventing} className="transition-all duration-100 hover:mb-[9px]" href="">Home</a>
                        <a onClick={preventing} className="transition-all duration-100 hover:mb-[9px]" href="">About</a>
                        <a onClick={preventing} className="transition-all duration-100 hover:mb-[9px]" href="">Work</a>
                        <a onClick={preventing} className="transition-all duration-100 hover:mb-[9px]" href="">Contact</a>
                    </div>
                </div>
        
                <div className="flex h-128">
                    <div className="flex bg-fsbgcl border-r-2 border-textc w-1/2">
                        <div className="flex mx-4 flex-col gap-7 justify-center">
                            <i className="fa-solid fa-code-fork"></i>
                            <motion.p className="cursor-default text-5xl">
                                - Hello, I'm Fluent,<br/> a front-end<br/> developer...
                            </motion.p>
                            <p className="cursor-default">
                                with a passion for crafting engaging and
                                user-friendly web experiences.
                            </p>
                            <a className="font-bold" href="">
                                <button onClick={preventing} className="prevent transition-all duration-100 border-2 active:relative active:top-0.5 active:shadow-btnshhov h-12 w-40 shadow-btnsh rounded-full border-textc bg-topnavbar">Get in touch</button>
                            </a>
                        </div>
                    </div>
                    <div className="bg-ssbgcl overflow-hidden w-1/2 flex justify-center items-center">
                        <motion.div className="w-96 h-picf relative z-10">
                            <div className="overflow-hidden absolute w-96 z-10 h-picf rounded-picf border-2 border-textc">
                                <img className="object-cover w-full h-full" src="collage-with-mountains-city.jpg" alt=""/>
                            </div>
                            <div className="absolute right-[-50px] top-[8px] h-adtpf z-0 w-adtpf bg-adtp rounded-picf border-2 border-textc">
                                <div className="intm flex flex-col h-full items-center w-full justify-between pl-pl">
                                    <div className="my-space">
                                        <p className="vertical cursor-default font-bold">FOLLOW ME</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 text-xl my-space">
                                        <a target="_blank" href="https://vk.com/j_ask" className="cursor-grab border-2 active:relative active:top-0.5 active:shadow-btnshhov shadow-btnsh h-[37px] w-[37px] relative flex justify-center items-center p-[6px] border-solid border-textc rounded-full">
                                            <i className='absolute fa-brands fa-vk'></i>
                                        </a>
                                        <a href="https://discord.gg/tzd5C93Adr" target="_blank" className="cursor-grab border-2 active:relative active:top-0.5 active:shadow-btnshhov shadow-btnsh h-[37px] w-[37px] relative flex justify-center items-center border-solid border-textc rounded-full p-[6px]">
                                            <i className="absolute fa-brands fa-discord"></i>
                                        </a>
                                        <a target="_blank" href="https://github.com/mefluent" className="cursor-grab border-2 active:relative active:top-0.5 active:shadow-btnshhov shadow-btnsh h-[37px] w-[37px] relative flex justify-center items-center border-solid border-textc rounded-full p-[6px]">
                                            <i className="absolute fa-brands fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
        
            </div>
            </ParallaxLayer>

            <ParallaxLayer speed={1.25} offset={1}>
            <div className="border-2 flex flex-col gap-14 justify-center items-center h-129 mx-8 my-8 border-textc border-solid flex flex-col">
                <i className="text-2xl fa-solid fa-code-commit"></i>
                <p className="text-3xl font-bold">
                    Hello! I'm an experienced front-end 
                    developer<br/> from Russia with a deep 
                    understanding of web<br/> technologies.
                    My expertise includes creating
                    modern<br/> and responsive interfaces.
                </p>
                <a className="transition-all duration-300" href="">
                    <button onClick={preventing} className="prevent font-bold border-2 active:relative active:top-0.5 active:shadow-btnshhov h-12 w-40 shadow-btnsh rounded-full border-textc bg-topnavbar">Learn more</button>
                </a>
            </div>
            </ParallaxLayer>

            <ParallaxLayer speed={0.55} offset={2}>
            <div className="border-2 flex flex-col h-129 mx-8 my-8 border-textc border-solid flex flex-col">
                <div className="overflow-hidden flex flex-col justify-center h-[50%] border-b-2 w-full border-textc">
                    <div className="flex flex-col mx-4 gap-7">
                        <div>
                            <p className="text-5xl">My numbers:</p>
                        </div>
                        <div className="flex gap-space">
                            <span className="text-center">
                                <p className="text-7xl font-bold">1<span className="text-gi">+</span></p>
                                <p>YEARS OF EXPERIENCE</p>
                            </span>
                            <span className="text-center">
                                <p className="text-7xl font-bold">50<span className="text-gi">+</span></p>
                                <p>PROJECTS DONE</p>
                            </span>
                            <span className="text-center">
                                <p className="text-7xl font-bold">00</p>
                                <p>UNHAPPY CLIENTS</p>
                            </span>
                            <span className="text-center">
                                <div className="flex gap-3">
                                    <p className="text-7xl font-bold">English,</p>
                                    <p className="text-7xl font-bold">Russian</p>
                                </div>
                                <p>LANGUAGES</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex h-1/2 w-full overflow-hidden">
                    <div className="flex flex-col justify-center bg-ssbgcl w-1/2 border-r-2 border-textc h-full">
                        <div className="flex mx-4 flex-col gap-7">
                            <div className="flex gap-3">
                                <p className="text-5xl">Why</p>
                                <p className="text-5xl">Hire</p>
                                <p className="text-5xl">Me</p>
                            </div>
                            <div className="flex flex-col text-lg gap-4">
                                <span className="flex items-center font-bold gap-3">
                                    <i className="fa-solid fa-ranking-star"></i>
                                    <p>Best quality work</p>
                                </span>
                                <span className="flex items-center font-bold gap-3">
                                    <i className="fa-solid fa-gauge-simple-high"></i>
                                    <p>Rapid Execution</p>
                                </span>
                                <span className="flex items-center font-bold gap-3">
                                    <i className="fa-solid fa-shield"></i>
                                    <p>Ensured Security</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-adtp flex flex-col justify-center w-1/2 border-r-2 h-full">
                        <div className="flex mx-4 gap-7 flex-col">
                            <p className="text-5xl">Services</p>
                            <div className="flex gap-7">
                                <div className="flex flex-col text-lg gap-3">
                                    <div className="flex font-bold items-center">
                                        <span className="flex gap-3 items-center">
                                            <i className="fa-solid fa-arrows-turn-right"></i>
                                            <p>Web Design</p>
                                        </span>
                                    </div>
                                    <div className="flex font-bold items-center">
                                        <span className="flex gap-3 items-center">
                                            <i className="fa-solid fa-arrows-turn-right"></i>
                                            <p>Front end</p>                                
                                        </span>
                                    </div>
                                    <div className="flex font-bold items-center">
                                        <span className="flex gap-3 items-center">
                                            <i className="fa-solid fa-arrows-turn-right"></i>
                                            <p>Logo Design</p>                                
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col text-lg gap-3">
                                    <div className="flex font-bold items-center">
                                        <span className="flex gap-3 items-center">
                                            <i className="fa-solid fa-arrows-turn-right"></i>
                                            <p>JavaScript</p>
                                        </span>
                                    </div>
                                    <div className="flex font-bold items-center">
                                        <span className="flex gap-3 items-center">
                                            <i className="fa-solid fa-arrows-turn-right"></i>
                                            <p>React</p>                                
                                        </span>
                                    </div>
                                    <div className="flex font-bold items-center">
                                        <span className="flex gap-3 items-center">
                                            <i className="fa-solid fa-arrows-turn-right"></i>
                                            <p>Responsive Design</p>                                
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            </ParallaxLayer>
        
        
        </div>
        </Parallax>
    </div>

  );
}



export default App;
