import style from './home.module.css'
import { Footer } from '../../components/footer/footer';

export function Home () {
    return(
        <div>
            <div className={style.fundo}> 
                <div className={style.retangulo}>
                    <div className={style.texto}>
                        <h3>New Arrival</h3>
                        <h1 id={style.title}>Discover Our New Collection</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</h3>
                    </div>
                        <button><link></link>BUY NOW</button>          
                </div>
            </div>
            <div className={style.retangulo2}>
                <h1 className={style.title2}>Browse The Range</h1>
                <h3 className={style.texto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </div>
            <div className={style.retangulo3}>
                    <div>
                        <img className={style.imagem} src="src/assets/img/Mask Group.svg"/>
                        <h1 className={style.texto2}>Dining</h1>
                    </div>
                    <div>
                        <img className={style.imagem} src="src/assets/img/foto-home-venda2.svg"/>
                        <h1 className={style.texto2}>Living</h1>
                    </div>
                    <div>
                        <img className={style.imagem} src="src/assets/img/foto-home-venda3.svg"/>
                        <h1 className={style.texto2}>Bedroom</h1>
                    </div>
            </div>
            <h1 className={style.title3}>Our Products</h1>
                
            <div className={style.retangulo4}>
                <div className={style.retangulo5}>
                        <img className={style.imagem2} src="src/assets/img/4bdba3a6bef9d68df2d9a06e32e96c61.png"/>
                        <div className={style.space}>
                            <h1 className={style.texto3}>Backpack</h1>
                            <h3 className={style.texto4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                            <h1 className={style.texto5}>Rp 500,00</h1>
                        </div>

                </div>
                <div className={style.retangulo5}>
                <img className={style.imagem2} src="src/assets/img/4bdba3a6bef9d68df2d9a06e32e96c61.png"/>
                        <div className={style.space}>
                            <h1 className={style.texto3}>Weapon</h1>
                            <h3 className={style.texto4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                            <h1 className={style.texto5}>Rp 500,00</h1>
                        </div>

                </div>
                <div className={style.retangulo5}>
                <img className={style.imagem2} src="src/assets/img/4bdba3a6bef9d68df2d9a06e32e96c61.png"/>
                        <div className={style.space}>
                            <h1 className={style.texto3}>Barret 566.</h1>
                            <h3 className={style.texto4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                            <h1 className={style.texto5}>Rp 3.500,00</h1>
                        </div>

                </div>
                <div className={style.retangulo5}>
                <img className={style.imagem2} src="src/assets/img/4bdba3a6bef9d68df2d9a06e32e96c61.png"/>
                        <div className={style.space}>
                            <h1 className={style.texto3}>Car off Nascar</h1>
                            <h3 className={style.texto4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                            <h1 className={style.texto5}>Rp 10.000,00</h1>
                        </div>

                </div>
            </div>
            <div className={style.retangulo4}>
                <div className={style.retangulo5}>
                        <img className={style.imagem2} src="src/assets/img/4bdba3a6bef9d68df2d9a06e32e96c61.png"/>
                        <div className={style.space}>
                            <h1 className={style.texto3}>Tshirt</h1>
                            <h3 className={style.texto4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                            <h1 className={style.texto5}>Rp 700,00</h1>
                        </div>

                </div>
                <div className={style.retangulo5}>
                <img className={style.imagem2} src="src/assets/img/4bdba3a6bef9d68df2d9a06e32e96c61.png"/>
                        <div className={style.space}>
                            <h1 className={style.texto3}>Pump</h1>
                            <h3 className={style.texto4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                            <h1 className={style.texto5}>Rp 740,00</h1>
                        </div>

                </div>
                <div className={style.retangulo5}>
                <img className={style.imagem2} src="src/assets/img/4bdba3a6bef9d68df2d9a06e32e96c61.png"/>
                        <div className={style.space}>
                            <h1 className={style.texto3}>Closset</h1>
                            <h3 className={style.texto4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                            <h1 className={style.texto5}>Rp 2.500,00</h1>
                        </div>

                </div>
                <div className={style.retangulo5}>
                <img className={style.imagem2} src="src/assets/img/4bdba3a6bef9d68df2d9a06e32e96c61.png"/>
                        <div className={style.space}>
                            <h1 className={style.texto3}>Bedroom</h1>
                            <h3 className={style.texto4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                            <h1 className={style.texto5}>Rp 1.500,00</h1>
                        </div>
                </div>
                
            </div>
                <div className='flex items-center justify-center'> 
                    <button className='bg-brown border border-black p-3 px-14'>
                        Show More
                    </button>
                </div>
        <Footer />
            
        </div>      
    )
}