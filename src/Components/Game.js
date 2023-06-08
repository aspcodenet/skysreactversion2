import React, {useEffect, useState} from 'react'

export const Game = () => {
    const [activeAction, setActiveAction] = useState('ShowSelection');
    const [selected, setSelected] = useState('');
    const [computerSelection, setComputerSelection] = useState(null)
    const [winner, setWinner] = useState(null)

    const PlayAgain = () =>{
        setWinner(null)
        setComputerSelection(null)
        setSelected("")
        setActiveAction("ShowSelection")
    }
    
    const SetSelection = async (sel) =>{
        setSelected(sel)
        setActiveAction('Sending')
        let id = sel.toUpperCase()                
        const data = await (await fetch( window.appEnv.REACT_APP_BACKEND_URL +  `/api/play?yourSelection=${id}`)).json()
        //setResultat(data)
        console.log(data.computerSelection)
        setComputerSelection(data.computerSelection)
        setWinner(data.winner)
}

  return (
    <>
    <section className="home" id="products">
        { activeAction == "ShowSelection" &&
            <div>
            <h1 className="heading"> <span>Make your</span> selection </h1>
        
            <a onClick={()=>SetSelection("Stone")} className="ctabutton" href="#">Stone</a>
            <a onClick={()=>SetSelection("Scissor")} className="ctabutton" href="#">Scissor</a>
            <a onClick={()=>SetSelection("Bag")} className="ctabutton" href="#">Bag</a>
            </div>
        }
        { activeAction == "Sending" &&
            <div>
            <h1 >Your choice:</h1>
            <a className="ctabutton" href="#">{selected}</a>
            <h1>Computer selected</h1>
            <br/>
            <h1>
            {computerSelection &&                 
            <a className="ctabutton" href="#">{computerSelection}</a>
            }
            </h1>
            {winner &&                 
            <>
            <h1>RESULT: {winner} </h1>
            <a onClick={()=>PlayAgain()} className="ctabutton" href="#">Play again</a>
            </>
            }
           

            
            
            </div>
        }



        
        </section>
        </>
  )
}
