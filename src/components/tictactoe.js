import React, {useState} from 'react';

function Tic(){
    function reset(){
        // var button = document.getElementsByTagName('button');
        // document.addEventListener('onclick', function(){
            console.log('inside the function');
            for(let i=1;i<10;i++){
                document.getElementById(`btn-${i}`).disabled = false;
                document.getElementById(`btn-${i}`).innerHTML = `${i}`;
                console.log('Insite loop');
                
            }
            console.log('outside loop');
                document.getElementById('reset').disabled = true;
            }
        // })

    const [person, setperson] = useState('X');
    const [No , setNo] = useState(8);
    function click(e){
        e.target.innerHTML = person;
        e.target.disabled = true;
        
            if(person === 'X'){
                setperson('O');
            }else{
                setperson('X');
            }
        if(document.getElementById('btn-1').innerHTML === document.getElementById('btn-2').innerHTML && document.getElementById('btn-2').innerHTML === document.getElementById('btn-3').innerHTML){
            alert('Winner is '+ document.getElementById('btn-1').innerHTML);
            document.getElementById('reset').disabled = false;
        }else if(document.getElementById('btn-4').innerHTML === document.getElementById('btn-5').innerHTML && document.getElementById('btn-5').innerHTML === document.getElementById('btn-6').innerHTML){
            alert('Winner is '+ document.getElementById('btn-4').innerHTML);
            document.getElementById('reset').disabled = false;
        }else if(document.getElementById('btn-7').innerHTML === document.getElementById('btn-8').innerHTML && document.getElementById('btn-8').innerHTML === document.getElementById('btn-9').innerHTML){
            alert('Winner is '+ document.getElementById('btn-7').innerHTML);
            document.getElementById('reset').disabled = false;
        }else if(document.getElementById('btn-4').innerHTML === document.getElementById('btn-1').innerHTML && document.getElementById('btn-4').innerHTML === document.getElementById('btn-7').innerHTML){
            alert('Winner is '+ document.getElementById('btn-4').innerHTML);
            document.getElementById('reset').disabled = false;
        }else if(document.getElementById('btn-2').innerHTML === document.getElementById('btn-5').innerHTML && document.getElementById('btn-5').innerHTML === document.getElementById('btn-8').innerHTML){
            alert('Winner is '+ document.getElementById('btn-5').innerHTML);
            document.getElementById('reset').disabled = false;
        }else if(document.getElementById('btn-3').innerHTML === document.getElementById('btn-6').innerHTML && document.getElementById('btn-9').innerHTML === document.getElementById('btn-6').innerHTML){
            alert('Winner is '+ document.getElementById('btn-3').innerHTML);
            document.getElementById('reset').disabled = false;
        }else if(document.getElementById('btn-1').innerHTML === document.getElementById('btn-5').innerHTML && document.getElementById('btn-5').innerHTML === document.getElementById('btn-9').innerHTML){
            alert('Winner is '+ document.getElementById('btn-1').innerHTML);
            document.getElementById('reset').disabled = false;
        }else if(document.getElementById('btn-3').innerHTML === document.getElementById('btn-5').innerHTML && document.getElementById('btn-5').innerHTML === document.getElementById('btn-7').innerHTML){
            alert('Winner is '+ document.getElementById('btn-3').innerHTML);
            document.getElementById('reset').disabled = false;
        }else if(No == 0){
            alert('Match Draw');
            document.getElementById('reset').disabled = false;
        }else {
            setNo(No - 1);
        }
    

    }
    
    return(
        <div id='tictactoe' className="tictactoe">
            <div id="row1" className="row">
                <button id="btn-1" className="btn" onClick={(e) =>click(e)}>1</button>
                <button id="btn-2" className="btn" onClick={(e) =>click(e)}>2</button>
                <button id="btn-3" className="btn" onClick={(e) =>click(e)}>3</button>
            </div>
            <div id="row2" className="row">
                <button id="btn-4" className="btn" onClick={(e) =>click(e)}>4</button>
                <button id="btn-5" className="btn" onClick={(e) =>click(e)}>5</button>
                <button id="btn-6" className="btn" onClick={(e) =>click(e)}>6</button>
            </div>
            <div id="row3" className="row">
                <button id="btn-7" className="btn" onClick={(e) =>click(e)}>7</button>
                <button id="btn-8" className="btn" onClick={(e) =>click(e)}>8</button>
                <button id="btn-9" className="btn" onClick={(e) =>click(e)}>9</button>
            </div>
            <div id="row4" className="row">
                <button id="reset"  onClick={reset} >RESET</button>
                
            </div>
        </div>
    )
}
export default Tic;