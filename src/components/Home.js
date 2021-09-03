import React from 'react';
import Cart from './Cart';
import product from './Product';


const Home = () => {
    
    return (
        <>
            <h1 className="text-center mt-3">All items</h1>
            
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {product.productData.map((item, index) => {
                        return(
                            <Cart 
                            img={item.img} 
                            title ={item.title}
                            desc={item.desc} 
                            price={item.price} 
                            item={item} 
                            key={index}
                            />
                        )

                    })}
                    

                </div>
            </section> 
        </>
    )
}

export default Home
