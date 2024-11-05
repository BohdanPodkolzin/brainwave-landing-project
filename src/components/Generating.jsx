import { loading } from "../assets"

 const Generating = ({ className, text }) => {
  return (
    <div className={`flex items-center h-[2.7rem] px-6 bg-n-6/90 
        rounded-[1.7rem] ${className || ''} text-base`}>
        <img src={loading } className="w-5 h-5 mr-4" alt="Loading" />
        <p className="font-code tracking-wider lg:text-2xl max-md:text-[1rem] flex-grow text-center" style={{ wordSpacing: '0.5rem' }}>
            {text}
        </p>
    </div>
  )
}

export default Generating
