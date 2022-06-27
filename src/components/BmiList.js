 function BmiList({range,bmi}) {
  console.log(range, bmi)
  return (
    <div className="text-center shadow-sm rounded">
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-4 fw-bold">Type</div>
            <div className="col-4 fw-bold">BMI</div>
            <div className="col-4 fw-bold">WEIGHT</div>
          </div>
        </li>
        <li className= {bmi < 18.5 ? "border border-danger border-3 list-group-item" : "list-group-item"} >
          <div className="row">
            <div className="col-4">Underweight</div>
            <div className="col-4">&lt; 18.5</div>
            <div className="col-4"> &lt;{range.underweight.low}Kg</div>
          </div>
        </li>
        <li className={bmi >= 18.5 && bmi <= 24.9 ? "border border-danger border-3 list-group-item" : "list-group-item"}>
          <div className="row">
            <div className="col-4">Normal</div>
            <div className="col-4">18.5 - 24.9</div>
            <div className="col-4">{range.normal.low + 'Kg - ' + range.normal.high + 'Kg-'}</div>
          </div>
        </li>
        <li className={bmi >= 25 && bmi <= 29.9 ? "border border-danger border-3 list-group-item" : "list-group-item"}>
          <div className="row">
            <div className="col-4">Overweight</div>
            <div className="col-4">25-29.9</div>
            <div className="col-4">{range.overweight.low + 'Kg - ' + range.overweight.high + 'Kg-'}</div>
          </div>
        </li>
        <li className={bmi >= 30 ? "border border-danger border-3 list-group-item" : "list-group-item"}>
          <div className="row">
            <div className="col-4">Obesity</div>
            <div className="col-4">&gt; 30</div>
            <div className="col-4">&gt;{range.Obesity.high}Kg</div>
          </div>
        </li>
      </ul>
  
  </div>
  )
}

export default BmiList