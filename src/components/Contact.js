import React from 'react';
import ImageOne from './IMAGES/ImageOne.png'
import ImageThree from './IMAGES/ImageThree.png'
import ImageSix from './IMAGES/ImageSix.png'
//import React, {Component} from 'react';



const Contact =()=>{
        return(
            <div>
                <h1>Hi</h1>
            
             <div class="images">
               <img id="imagesS"src={ImageOne} alt="image1"/>
               <img id="imagesS" src={ImageThree} alt="image1"/>
               <img id="imagesS" src={ImageSix} alt="image1"/>
             </div>


            </div>
    
        );
    }
    


export default Contact;