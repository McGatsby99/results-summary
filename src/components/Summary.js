import memoryIcon from '../images/icon-memory.svg'
import reactionIcon from '../images/icon-reaction.svg'
import verbalIcon from '../images/icon-verbal.svg'
import visualIcon from '../images/icon-visual.svg'


function Summary() {
  return (
    <div className="summary-container">
        <div className='summary-content'>
            <h4>Summary</h4>
            <div className='categories'>
                <article className='reaction-article'>
                    <div className="wrapper">
                        <img src={reactionIcon}></img>
                        <p className='reaction'>
                        Reaction 
                        </p>
                        <span><strong>80 </strong>/ 100</span>
                    </div>
                </article>
                <article className='memory-article'>
                    <div className="wrapper">
                        <img src={memoryIcon}></img>
                        <p className='memory'>
                        Memory 
                        </p>
                        <span><strong>92 </strong>/ 100</span>
                    </div>
                </article>
                <article className='verbal-article'>
                    <div className="wrapper">
                        <img src={verbalIcon}></img>
                        <p className='verbal'>
                        Verbal 
                        </p>
                        <span><strong>61 </strong>/ 100</span>
                    </div>
                </article>
                <article className='visual-article'>
                    <div className="wrapper">
                        <img src={visualIcon}></img>
                        <p className='visual'>
                        Visual 
                        </p>
                        <span><strong>72 </strong>/ 100</span>
                    </div>
                </article>
                <button>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default Summary