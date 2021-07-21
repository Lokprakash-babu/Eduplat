import React, {useState} from 'react'
import "./Modal.css";
const Modal = ({course, closeModal}) => {
    const [Link, setLink] = useState(`https://www.youtube.com/embed/${course.videoLink[0]}`);


    const changeLink = (ele)=>{
        setLink(ele);
    }
    const listUi = course.videoLink.map(
        (ele, idx)=>{
            return (
                <div className = "videoItem" key={idx}>
                    <button onClick={()=>{changeLink(`https://www.youtube.com/embed/${ele}`)}}>video {idx+1}</button>        
                </div>
            );
        }
    );
    return (
        <div className = "modalContainer">
            <div className = "modalContent">
                <div className = "closeButton" onClick = {closeModal}>
                    <i className="far fa-times-circle"></i>
                </div>
                <div className = "modalHeart">
                    <div className = "modalVideo">
                        <iframe src={Link}
                            frameBorder='0'
                            title='video'
                        />
                    </div>
                    <div className = "modalVideoList">
                        <div className = "modalTitle">
                            {course.title}
                        </div>
                        <div className = "videos">
                            {listUi}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
