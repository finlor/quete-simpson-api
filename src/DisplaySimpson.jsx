import  React  from  'react';

const  DisplaySimpson = ({ simpson }) => {
    return (
        <div  className="DisplaySimpson">
            <img  src={simpson.image}  alt="simpson lambda"  />
            <ul>
                <li>character : {simpson.character}</li>
                <li>
                    quote : {simpson.quote}  
                </li>
                
            </ul>
        </div>
    );
};


export  default  DisplaySimpson;