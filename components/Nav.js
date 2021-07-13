import request from "../utils/request"

function Nav() {
    return (
        <nav>
            <div className="overflow-x-scroll scrollbar-hide flex px-10 sm:px-20 text-2xl space-x-10 sm:space-x-20 whitespace-nowrap  ">
                {Object.entries(request).map(([key, {title,url}]) =>(
                    <h2 key={key} 
                        className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125
                                    hover:text-white active:text-red-500">{title}</h2>
                ))}
            </div>
        </nav>
    )
}

export default Nav
