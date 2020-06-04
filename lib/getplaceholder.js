const fetch=require('node-fetch');

const url='https://thesimpsonsquoteapi.glitch.me/quotes?count=10';

const getPlaceholder=async()=>{
    let data=await fetch(url);
    return await data.json();
    // console.log(await data.json())
}
// getPlaceholder();
module.exports=getPlaceholder;