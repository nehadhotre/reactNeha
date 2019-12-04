import React from "react";
const Discard =(props) => {
    console.log (props);
    return(
    <div>
        {props.children}
        <div className="row">
        <div className="col-md-12" >
            <button type="button"class="btn btn-outline-danger" style={{margin:"10px"}}>VIEW  MORE</button>
            <button type="button"class="btn btn-outline-primary">READ MORE</button>

            </div>

        </div>
        </div>

    )
}
export default Discard;