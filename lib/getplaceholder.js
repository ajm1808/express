const fetch=require('node-fetch');

const url='https://thesimpsonsquoteapi.glitch.me/quotes';

const getPlaceholder=async()=>{
    let data=await fetch(url);
    return await data.json();
}
module.exports=getPlaceholder;