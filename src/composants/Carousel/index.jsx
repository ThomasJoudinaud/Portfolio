import { useState } from "react"
import "./carousel.css"

function Carousel({images}) {
    const imageArray = images
    const [activeIndex, setActiveIndex] = useState(0)

    const imgShow = (index) => {
        if(index === activeIndex) {
            return "visible"
        } else {
            return ""
        }
    }

    const nextImg = () => {
        setActiveIndex((activeIndex + 1) % imageArray.length)
    }

    const prevImg = () =>  {
        const newActiveIndex = activeIndex -1
        if(newActiveIndex < 0) {
           return setActiveIndex(imageArray.length - 1)
        } else {
            return setActiveIndex(activeIndex - 1)
        }
    }

    return(
        <div className="carouselBlock">
            <div className="carouselImage">
                {(imageArray.map((pics, index) => {
                    return <img key={index} src={pics} alt={pics} className={imgShow(index)}/>
                }))}
            </div>
            <div>
                <div className="next" onClick={nextImg}>
                    <p> {'>'} </p>
                </div>
                <div className="prev" onClick={prevImg}>
                    <p> {'<'} </p>
                </div>
                <div className="infoArray">
                    {`${activeIndex + 1}/${imageArray.length}`}
                </div>
            </div>
        </div>
    )
}

export default Carousel