import { useNavigate } from 'react-router-dom';
import "./next.css"

function NextButton({title, link}){

    const navigate = useNavigate();

    return(
        <div className='footer'>
            <div className="nextButton" onClick={() => navigate(link)}>{title}</div>
            <div className='mailFooter'>
                <div className='mailFooterMail'>
                    <a href="mailto:joudinaud.thomas@hotmail.fr" target="_blank" rel="noopener noreferrer">Contactez moi !!</a>
                </div>
            </div>
        </div>
    )
}

export default NextButton