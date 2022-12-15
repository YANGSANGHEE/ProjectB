import {useEffect} from 'react'
// const {kakao} = window; 


 declare global{
    interface window{
        kakao: any;
    }
 }

const Test= () => {  

    useEffect(()=> {
        const container = document.getElementById("map");
        const options ={
           center: new window.kakao.maps.LatLng(33.450701,126.570667), 
           level:3 
        };
     let map = new window.kakao.maps.Map(container,options)

    },[])



    return( 
       <div id='map' style={{width:"100vw", height:"100vh"}}></div>

    )


}

export default Test;