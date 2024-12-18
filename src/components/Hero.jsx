import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { heroIcons } from "../constants";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero"
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
    const parallaxRef = useRef(null);
  
    return (
    <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" 
    customPaddings id="hero">
        <div className="container relaitive" ref={parallaxRef}>
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20
                lg:mb-[6rem]">
               <h1 className="h1 mb-6">
                Explore the Possibilities&nbsp;of My Mind&nbsp; with <span className="inline-block relative">Strive</span>
                <img src={curve} alt="curve" className="h-3 relative z-1 top-full left-1/2 transform -translate-x-1/2 w-[60%]"/>
                </h1>
                <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus debitis omnis cumque dolorum veritatis culpa fuga harum dolorem atque? Magnam voluptates nobis commodi, dignissimos illum voluptatum delectus ut aliquid perferendis?
                </p>
                <Button href="/pricing" white>Get Started</Button>
            </div>

            <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                {/* Robot Image Container*/}
                <div className="z-10 rounded-2xl bg-conic-gradient p-0.5 relative">
                    <div className="relative bg-n-8 rounded-[1rem]">
                        <div className="bg-n-10 rounded-t-[0.9rem] h-[0.8rem]" />
                        <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                            <img src={robot} width={1024} height={490} alt="robot" 
                            className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[20%]" />
                        
                            <Generating className="absolute bottom-5 left-4 right-4 lg:w-[18rem] md:left-1/2 md:right-auto md:bottom-8
                                md:w-48 md:-translate-x-1/2" text="Generating" />

                            <ScrollParallax isAbsolutelyPositioned>
                                <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem]
                                px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 xl:flex rounded-2xl">
                                    {heroIcons.map((icon, index) => (
                                        <li className="p-5" key={index}>
                                            <img src={icon} width={24} alt={"star"}height={24} />
                                        </li>
                                    )) }
                                </ul>
                            </ScrollParallax>

                            <ScrollParallax isAbsolutelyPositioned>
                                <Notification className="hidden absolute -right-[5.5rem] bottom-[11rem]
                                    w-[18rem] xl:flex" title="Code Generation" />
                            </ScrollParallax>
                        </div>
                    </div>
                    <Gradient  />
                </div>

                {/* Background Image */}
                <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[134%] lg:-top-[104%] z-0">
                    <img src={heroBackground} alt="background" className="w-full" width={1440} height={1800} />
                </div>

                <BackgroundCircles />
            </div>

            <CompanyLogos className="max-sm:hidden relative z-60 mt-20 lg:block"/>
        </div>
        <BottomLine />
    </Section>
  )
}

export default Hero
