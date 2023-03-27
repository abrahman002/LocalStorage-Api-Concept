const addToDb=id=>{
    let ShoppingCart={};

    const storeCart=localStorage.getItem('Shopping-cart');
    if(storeCart){
        ShoppingCart=JSON.parse(storeCart)
    }

    const quantity=ShoppingCart[id]
    if(quantity){
        const newQuantity=quantity+1;
        ShoppingCart[id]=newQuantity
    }
    else{
        ShoppingCart[id]=1
    }


    localStorage.setItem('Shopping-cart',JSON.stringify(ShoppingCart))
}

const removeDb=id=>{
    // console.log('remove',id)
       const storeCart=localStorage.getItem('Shopping-cart')
       if(storeCart){
        const ShoppingCart=JSON.parse(storeCart)
        if(id in ShoppingCart){
            delete ShoppingCart[id];

            localStorage.setItem('Shopping-cart',JSON.stringify(ShoppingCart))
        }
       }
}

const getTotral=product=>{
    const reducer=(previous,current)=>previous+current.price;
    const total=product.reduce(reducer,0)
    return total
}
export {addToDb,
    removeDb,
    getTotral
}