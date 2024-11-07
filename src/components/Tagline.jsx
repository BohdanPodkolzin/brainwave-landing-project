import brackets from '../assets/svg/Brackets'

const Tagline = ({ className, children }) => {
  return <div className={`${className || ''} tagline flex items-center`}>
    {brackets('left')}
    <div className='mx-3 text-n-3'>{children}</div>
    {brackets('right')}
    </div>
}

export default Tagline; 
