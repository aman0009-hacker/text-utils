import React, { useState } from 'react'



export default function TextForm(props) {

    props.continue();
    const changeFunction = (event) =>
    {
        settext(event.target.value);

      
    }

    const clickUpFunction = (event) =>
    {

      let texted=text.toUpperCase();
        settext(texted);
        props.alert('Text converted to uppercase successfully','success');
    }
    const clickSpaceFunction = (event) =>
    {
     let data=document.getElementById('space').innerHTML;
     let regex = /[a-zA-Z0-9]/g;
     if(text!==''&& text!==null)
     {

         document.getElementById('space').innerHTML=text.match(regex).length;

    }
    else
    {
        document.getElementById('space').innerHTML='';
    }

    }
    const clickLoFunction = (event) =>
    {

      let texted=text.toLocaleLowerCase();
        settext(texted) ;
    }
    const clickCopyFunction=()=>{
       let  a=document.getElementById('floatingTextarea');
       a.select();
        navigator.clipboard.writeText(a.value);
        if((a.value).length>0)
        {

          props.alert('Your text has been copied successfully','success');
        }
        else
        {
          props.alert('Please write something to copy the text','danger');
        }

    }
    const RemoveExtraSpaceFunction=()=>{
      let  a=document.getElementById('floatingTextarea').value;
        let ab=text.split(/[ ]+/);
        settext(ab.join(' '));

    }
    const  FirstLetterCapitalFunction=()=>{
      let d=  text.split(/[ ]+/);
      let empty='';
      d.forEach(element => {
       empty+= element.charAt(0).toUpperCase()+element.slice(1)+' ';
      });
      settext(empty);

    }

    function countWords(sentence) {
      // Remove leading and trailing whitespaces
      sentence = sentence.trim();

      // If the string is empty, there are no words
      if (sentence === "") {
        return 0;
      }

      // Split the string into words using whitespaces as delimiters
      const words = sentence.split(/\s+/);


      // Return the number of words
      return words.length;
    }

    const[text,settext]=useState('');
  return (
    <div>



            <div className="mb-3 form-floating ">
               <h1 className={`text-${props.mode==='dark'?'dark':'light'}`}>{props.header}</h1>
                <textarea className="form-control h-100"  value={text} onChange={changeFunction} style={{backgroundColor:props.mode==='dark'?'white':'#063b8a',color:props.mode==='dark'?'black':'white'}}placeholder="Leave a comment here" id="floatingTextarea" rows="8"></textarea>

            <button disabled={text.length===0} className={`btn btn-primary mt-4 ${text.length===0?'btn-danger':''}`} onClick={clickUpFunction}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mt-4 mx-2" onClick={clickLoFunction}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mt-4 mx-2" onClick={clickSpaceFunction}>Without space characters</button>
            <button disabled={text.length===0} className="btn btn-primary mt-4 mx-2" onClick={clickCopyFunction}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mt-4 mx-2" onClick={FirstLetterCapitalFunction}>First Letter Capital</button>
            <button disabled={text.length===0} className="btn btn-primary mt-4 mx-2" onClick={RemoveExtraSpaceFunction}>Remove Extra Spaces</button>

            </div>
            <div className="my-2">
                <h1 className={`text-${props.mode==='dark'?'dark':'light'}`}>Your text summary</h1>
                <p className={`text-${props.mode==='dark'?'dark':'light'}`}>{(text.split(' ').filter((element)=>{return element.length!==0})).length} words and {text.length} characters</p>
                <p className={`text-${props.mode==='dark'?'dark':'light'}`}>{0.008*text.split(' ').filter((element)=>{return element.length!==0}).length} words per minutes</p>
                <p id="space" className={`text-${props.mode==='dark'?'dark':'light'}`}></p>
            </div>


    </div>
  )
}
TextForm.defaultProps={
  header:'header'

}
