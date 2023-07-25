import { useNavigate } from 'react-router-dom';
import "./next.css"

function NextButton({title, link}){

    const navigate = useNavigate();

    return(
        <div className='footer'>
            <div className="nextButton" onClick={() => navigate(link)}>{title}</div>
        </div>
    )
}

export default NextButton