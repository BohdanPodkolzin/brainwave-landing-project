import { companyLogos } from "../constants"

const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Lorem ipsum dolor sit amet consectetur.
      </h5>

      <ul className="flex">
        {companyLogos.map((logo, index) => (
            <li className="flex items-center justify-center h-[8.5rem] flex-1" key={index}>
                <img src={logo} width={134} height={28} />
            </li>
        ))}
      </ul>
    </div>
  )
}

export default CompanyLogos
