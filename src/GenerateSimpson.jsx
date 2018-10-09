import  React  from  'react';

const  GenerateSimpson = ({ SelectSimpson }) => {
    return (
        <div  className="GenerateSimpson">
               <button  onClick={SelectSimpson}>Generate Simpson</button>

        </div>
    );
};


export  default  GenerateSimpson;