import { useState } from 'react'

function Form({getData}) {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [alert, setAlert] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault()
        if(isNaN(weight) || isNaN(height)){
           setAlert(true);
        } else {
            setAlert(false);
            getData(weight,height)
        };
    }
    // let alertMessage;
    // if(alert){
    //     alertMessage = <div className='alert alert-danger'>Please enter valid data</div>;
    // } else { alertMessage = ""};

    return (
        <div className="col-sm-4 shadow rounded px-5">
            <h1>BMI Calculator</h1>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col col-sm-6">
                        <label className="form-label">Weight(kg)</label>
                        <input type="text" required value={weight} onChange={(e) => setWeight(e.target.value)} className="form-control" />
                    </div>
                    <div className="col col-sm-6">
                        <label className="form-label">Height(m)</label>
                        <input type="text" required value={height} onChange={(e) => setHeight(e.target.value)} className="form-control" id="exampleInputPassword1" />
                    </div>
                </div>
                <div className="py-2">
                    <button type="submit" className="btn btn-primary">Get BMI</button>
                </div>
            </form>
            {/* {alert ? <div className='alert alert-danger'>Please enter valid data</div> : ''} */}
            {alert && <div className='alert alert-danger'>Please enter valid data</div>}

        </div>
    )
}

export default Form