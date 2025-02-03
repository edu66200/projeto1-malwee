

export function Footer ()
{
    return(
        <div>
            <hr className='mt-20'></hr>
        <div>
        <div className='pt-14 pl-12 pr-40 pb-20 flex justify-between itens-center'>
                <div className='flex flex-col '>
                    <button className='font-bold text-4xl pb-14 pr-20'>Funiro.</button>
                    <h1>400 University Drive Suite 200 Coral Gables,
                    FL 33134 USA</h1>
                </div>
                <div className=' flex flex-col pl-60 pt-3 pr-8'>
                    <h1 className='pb-14'> Links </h1>
                    <button className='pb-14 font-medium'> Home </button>
                    <button className='pb-14 pr-2 font-medium'> Shop </button>
                    <button className='pb-14 font-medium'> About </button>
                    <button className='pb-14 pr-2 font-medium'> Links </button>
                </div>
                <div className='flex flex-col  pl-36 pr-20 pt-3'>
                    <h1 className='pb-14 pr-28'> Help </h1>
                    <button className='pb-14 pr-6 font-medium'> Payment Options </button>
                    <button className='pb-14 pr-24 font-medium'> Returns </button>
                    <button className='pb-14 pr-10 font-medium'> Privacy Policies </button>
                    
                </div>
                <div className='flex flex-col pt-3'>
                    <button className='pb-14 pr-60' >Newsletter</button>
                    <div className='flex flex-betwen pb-14' >
                        <div>
                            <p>Enter Your Email Address</p>
                            <hr className='w-48'></hr>
                        </div>
                        <div className="pl-5">
                            <button>SUBSCRIBE</button>
                            <hr className='w-20'></hr>
                        </div>
                    </div>
                    
                </div>
                
        </div>
        </div> 
        </div>
    )
}