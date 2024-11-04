import { notification1 } from "../assets"
import { notificationImages } from "../constants"

const Notification = ({ className, title }) => {
  return (
    <div className={`${className || ''} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur 
        rounded-2xl border-n-1/10 border gap-5`}>
        
        <img src={notification1} alt="notify" width={62} height={62} className="rounded-xl" />

        <div className="flex-1">
            <h6 className="mb-1 font-semibold justify-base">{title}</h6>
        
            <div className="flex items-center justify-between">
                <ul className="flex -m-0.5">{notificationImages.map((img, index) => (
                    <li key={index} className="flex w-6 h-6 border-2 border-n-12 
                        rounded-full overflow-hidden">
                        <img src={img} alt={index} className="w-full" 
                        height={20} width={20} />
                    </li>
                ))}</ul>
                <div className="text-gray-500 body-2">1m ago</div>
            </div>
        </div>
    </div>
  )
}

export default Notification
