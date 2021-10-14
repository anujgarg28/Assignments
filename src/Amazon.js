import { useEffect, useState } from "react";
import slides from "./data";

const Amazon = (props) => {
    const slides = props.slides;
    const [slide, setSlide] = useState({});
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        setSlide(slides[slideIndex]);
    }, []);

    const nextSlide = () => {
        setSlide(slides[slideIndex + 1]);
        setSlideIndex(slideIndex + 1);
    }
    
    const previousSlide = () => {
        setSlide(slides[slideIndex - 1]);
        setSlideIndex(slideIndex - 1);
    }

    const restart = () => {
        setSlide(slides[0]);
        setSlideIndex(0);
    }

    return(
        <>
        <h1> Hello Amazon Prime!</h1>
            <div style={{border: '2px solid black'}}>
                <h1> {slide.title}</h1>
                <p> {slide.text}</p> 
            </div>
            <button onClick={previousSlide} disabled={slideIndex == 0}>Previous</button>
            <button onClick={nextSlide} disabled={slideIndex == slides.length - 1}>Next</button>
            <button data-testid="button-restart" onClick={restart} disabled={slideIndex == 0}>Restart</button>
        </>
    )
}

export default Amazon;