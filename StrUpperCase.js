
  const StrInUpperCase=(str)=>{
    return str.charAt(0).toUpperCase()+str.slice([1])                                                           //Avneesh singh yadav

    //  return str.split(" ").map((word)=> word.charAt(0).toUpperCase()+word.slice(1)).join(" ")              // Avneesh Singh Yadav
    //   return str.toUpperCase();                                                                           //AVNEESH SINGH YADAV
  }

  console.log("This is the stirng: "+StrInUpperCase("avneesh singh yadav"))
 