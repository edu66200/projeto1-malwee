import style from './home.module.css'
export function Home () {
    return(
        <div>
            <div className={style.fundo}> 
                <div className={style.retangulo}>
                    <div className={style.texto}>
                        <h3>New Arrival</h3>
                        <h1 className={style.title}>Discover Our New Collection</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</h3>
                    </div>
                        <button>BUY NOW</button>          
                </div>
            </div>
            <div className={style.retangulo2}>
                <h1 className={style.title2}>Browse The Range</h1>
                <h3 className={style.texto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </div>
            <ul className={style.retangulo3}>
                    
            </ul>
        </div>      
    )
}