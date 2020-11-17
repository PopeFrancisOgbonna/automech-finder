import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'

const LoaderButton = () =>{

    return(
        <div>
           <Loader
         type="ThreeDots"
         color="#00BFFF"
         height={100}
         width={100}
      />
        </div>
    )
}
export default LoaderButton;