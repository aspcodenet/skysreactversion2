import React, {useEffect, useState} from 'react'

export const Stats = () => {
    const [antal, setAntal] = useState(null)
    const [vunna, setVunna] = useState(null)

    useEffect(() => {
        fetch( window.appEnv.REACT_APP_BACKEND_URL + `/api/stats`)
        .then((response) => 
        response.json().then(j=>{
            setAntal(j.totalGames)
            setVunna(j.wins)
        }
            )
        );
    }, []);    

  return (
    <>
    <section className="home" id="products">
            <div>
            <h1 className="heading"> <span>Statistik</span>  </h1>
        
            <a className="ctabutton" href="#">Totalt antal spel: {antal}</a>
            <a className="ctabutton" href="#">Totalt antal vunna: {vunna}</a>
            </div>
        </section>
        </>
  )
}
