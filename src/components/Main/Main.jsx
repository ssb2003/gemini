import React,{useContext} from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
import { Context } from '../context/Context'

const Main = () => {
    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)
  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src ={assets.user_icon} alt=''/>
        </div>
        <div className="main-container">
            {!showResult
            ?<>
            <div className="greet">
                <p><span>Hello,Sruthi.</span></p>
                <p>How Can I Help You Today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places for an upcoming road trip</p>
                    <img src={assets.compass_icon} alt=''/>
                </div>
                <div className="card">
                    <p>Breifly summarize this concept:urban planning</p>
                    <img src={assets.bulb_icon} alt=''/>
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat </p>
                    <img src={assets.message_icon} alt=''/>
                </div>
                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.code_icon} alt=''/>
                </div>
            </div>
            </>
            :<div className='result'style={{ overflowY: 'scroll', height: 'fit-content' }}>
                <div className="result-title">
                    <img src={assets.user_icon} alt=""/>
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt=""/>
                    {loading
                    ?<div className='loader'>
                        <hr/>
                        <hr/>
                        <hr/>
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}} style={{ whiteSpace: 'pre-wrap' }}></p>
                    }
                    
                </div>
                </div>

            }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) =>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt=''/>
                        <img src={assets.mic_icon} alt=''/>
                        {input?<img onClick={() =>onSent()} src={assets.send_icon} alt="" /> : null}
                    </div>
                </div>
                <p className='bottom-info'>
                Gemini may display inaccurate info, including about people, so double-check its responses.
                </p>
            </div>
        </div>


    </div>
  )
}

export default Main