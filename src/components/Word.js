import React from "react";

const Word = (props) => {
    //bu bir functional component, o yuzden this yok. sadece props ve variable adi var
    return(
        <div className="letterContainer">
            {/* answer:{props.answer}, guess: {props.guess} */}
            {props.guess.split("").map((letter,i)=>{

                let style="letterBox";

                if(props.answer[i] === letter){
                    style += " green" ;
                }
                else if(props.answer.includes(letter)){
                    style += " yellow";
                }

                return <div className={style}>{letter}</div>
                })
            }
{/* eger harf esit ise yesil goster
 eger harfin yeri yanlis ve harf  kelimenin icinde ise sari goster */}



        </div>



    )

}
export default Word;