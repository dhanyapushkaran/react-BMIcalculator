import './App.css';
import BmiScore from './components/BmiScore';
import Form from './components/Form'
import BmiList from './components/BmiList';
import { useState } from 'react';

function App() {
  const [weightChange, setweightChange] = useState({weight:'', type: ''});
  const [bmi, setbmi] = useState("00");
  const [show, setShow] = useState(false);
  const [bmiType, setBmiType] = useState("Not Calculated")
  const [bmiRange, setBmiRange] = useState({
    underweight:{low:''},
    normal:{low:'', high:''},
    overweight:{low:'', high:''},
    Obesity:{high:''}
  })

  const onFormSubmit = (w, h) => {
    setShow(true)
    let b = calBmi(w , h);
    setbmi(b);
    setBmiType(weightType(b));
    const range = {
      underweight:{low:calWeight(18.5, h)},
      normal:{low:calWeight(18.5, h), high:calWeight(24.9, h)},
      overweight:{low:calWeight(24.9, h), high:calWeight(29.9, h)},
      Obesity:{high:calWeight(30, h)}
    }
    console.log("range", range)
    setBmiRange(range)
    let change = weightChanges(b,w,range)
    console.log("change app", change)

    setweightChange(change)
  }
  const weightChanges = (b,w,range)=>{
    console.log("params",b,w,range)
    let obj;
    if(b < 18.5){
      obj = {
        weight: (range.normal.low - w).toFixed(2),
        type: "negative"
      };
      return obj
    } else if(b > 24.9){
      obj = {
        weight: (w - range.normal.high).toFixed(2),
        type: "positive"
      };
      return obj
    } else {
      obj = {
        weight: 0,
        type: "normal"
      };
      return obj
    }
  }
   const calBmi = (w , h) =>  (w / (h * h)).toFixed(2);
  const calWeight = (b, h) => (b* h* h).toFixed(2);
  const weightType = (bmi) => {
    console.log("bmi type", bmi)
    if(bmi < 18.5) {
      return "Underweight"
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    }else if (24.9 < bmi && bmi < 29.9) {
      return "Over Weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity Class I"
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity Class II";
    } else if (bmi > 39.9) {
      return "Obesity Class III";
    }
  }
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center mt-5 mx-2'>
          <Form getData={onFormSubmit} />
        </div>
        { show && (
        <div className='row justify-content-center mt-5 mx-2'>
         
          <div className='col-12 col-sm-6 mb-5'>
            <BmiScore bmiNo = {bmi} bmiName = {bmiType} weightChange = {weightChange}/>
          </div>
          <div className='col-12 col-sm-6 mb-5'>
            <BmiList range = {bmiRange} bmi={bmi}/>
          </div>
        </div>
          )}
        </div>
    </>
  );
}

// function App() {
//   const [bmi, setbmi] = useState(18);
//   const [bmiType, setBmiType] = useState("overweight")
//   // const bmiCalculator = () => {
//   //   setbmi(bmi + 1)
//   // }
//   return (
//     <>
//     <div>My BMI is {bmi}</div>
//     {/* <button onClick={bmiCalculator}>Click</button> */}
//     <button onClick={()=> setbmi(bmi + 1)}>Click</button>
//     <Form/>
//     <BmiScore bmiNo = {bmi} bmiName = {bmiType}/>
//     <BmiList/>
//     </>
//   );
// }

export default App;
