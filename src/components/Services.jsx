import Heading from "./Heading"
import Section from "./Section"
import { check, service1, service2, service3 } from "../assets"
import { brainwaveServices, brainwaveServicesIcons } from "../constants"
import Generating from "./Generating"
import { PhotoChatMessage, VideoBar, VideoChatMessage } from "./design/Services"
import { Gradient } from "./design/Services"

const Services = () => {
  return (
    <Section crosses id="how-to-use">
        <div className="container">
            <Heading title="Generative AI made for creators" 
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aperiam." />

            <div className="relative mt-2">

                {/* service1 */}
                <div className="relative z-1 mb-5 flex items-center h-[31rem] p-9 border border-n-1/10 
                rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none
                        md:w-3/5 xl:w-auto">
                        <img className="w-full h-full object-cover md:object-right" 
                            src={service1} width={800} height={730} alt="service1" />
                    </div>

                    <div className="relative z-1 max-w-[17rem] ml-auto">
                        <h4 className="h4 mb-4">Smartest Ai</h4>
                        <p className="body-2 mb-[3rem] text-n-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit exercitationem fugit.
                        </p>
                        <ul className="body-2">
                            {brainwaveServices.map((service, index) => (
                                <li className="flex items-start py-4 border-t rounded-2xl border-n-6" key={index}>
                                    <img width={24} height={24} src={check} alt="check" />
                                    <p className="ml-4">{service}</p >
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Generating className="absolute bottom-5 left-4 right-4" text="Generating Generating Generating Generating" />
            </div>

            {/* grid for service 2 & 3 */}
            <div className="relative">
                
                <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                    {/* service 2 */}
                    <div className="relative min-h-[39rem] border-n-1/10 rounded-2xl 
                        border overflow-hidden">
                        <div className="absolute inset-0">
                            <img src={service2} className="h-full w-full object-cover"
                            width={630} height={750} alt="robobot" />  
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-end p-8 
                        bg-gradient-to-b from-n-8/0 to-n-8/90">
                            <h4 className="h4 mb-4">Photo Editing</h4>
                            <p className="body-2 mb-[3rem] text-n-3">
                                Lorem ipsum dolor sit amet. Lorem, ipsum dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit exercitationem fugit.
                            </p>
                        </div>
                        <PhotoChatMessage />
                    </div>
                    {/* service3 */}
                    <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                        <div className="py-12 px-4 xl:px-6">
                            <h4 className="h4 mb-4">Video Generator</h4>
                            <p className="body-2 mb-[2rem] text-n-3">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores fugit voluptatibus ipsum!
                            </p>

                             <ul className="flex items-center justify-between">
                                {brainwaveServicesIcons.map((service, index) => (
                                    <li className={`flex rounded-2xl justify-center items-center ${index === 2 ? 'w-[3rem] h-[3rem] p-0.25 bg-conic-gradient rounded-2xl md:w-[4.5rem] md:h-[4.5rem]' 
                                    : 'flex h-10 w-10 bg-n-6 md:w-15 md:h-15'}`} key={index}>
                                        <div className={`${index === 2 ? 'flex items-center h-full w-full justify-center rounded-[1rem] bg-n-7' : ''} `}>
                                            <img src={service}
                                            alt="icon"
                                            width={24}
                                            height={24} />
                                        </div>
                                    </li>
                                ))}
                             </ul>
                        </div>

                        <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden
                            md:h-[25rem]">
                            <img src={service3} 
                            className="w-full h-full object-cover" 
                            alt="super-icon"
                            height={400}
                            width={520} />
                            <VideoBar />
                            <VideoChatMessage />
                        </div>
                    </div>
                </div>
                <Gradient />
            </div>
        </div>
    </Section>
  )
}

export default Services
