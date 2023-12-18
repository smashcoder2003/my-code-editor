
export default function CarouselWindow({ children }) {
   return(
      <>

         <div className="carouselWindow">
            <div className="leftArrow">
               <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="rgb(255, 255, 255, 0.4)"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
            </div>

            { children }

            <div className="rightArrow">
               <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="rgb(255, 255, 255, 0.4)"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </div>
         </div>
      </>
   )
}