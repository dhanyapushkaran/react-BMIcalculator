function BmiScore({bmiNo , bmiName , weightChange}) {
    console.log("weightChanges", weightChange)
    // const {bmiNo, bmiName} = props;

  return (
    <div className="text-center shadow rounded p-4">
      <div>Your BMI score</div>
      <div className="row justify-content-md-center">
      <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">{bmiNo}</div>
      </div>
      <div className="fa-3 fw-bold text-primary">{bmiName}</div>
      {weightChange.type  === "positive" && <div className="fa-4"> You need to lose <span className="fw-bold">{weightChange.weight}</span></div>}
      {weightChange.type  === "negative" && <div className="fa-4"> You need to gain <span className="fw-bold">{weightChange.weight}</span></div>}
      {weightChange.type  === "normal" && <div className="fa-4"> Your weight is normal</div>}

    </div>
  )
}

export default BmiScore