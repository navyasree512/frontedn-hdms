import React from  'react';
function Device(){

    return(

        <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                        
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Device Name: </label>
                                            <input placeholder="enter crop name..." name="firstName" className="form-control" />
                                        </div>
                                        <div className = "form-group">
                                            <label> quantity: </label>
                                            <input placeholder="enter quatity..." name="lastName" className="form-control"/>
                                        </div>
                                        <div className = "form-group">
                                            <label> price (per 1Quital): </label>
                                            <input placeholder="Enter price..." name="emailId" className="form-control" />
                                        </div>

                                        <button className="btn btn-success" >Save</button>
                                        <button className="btn btn-danger"  style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
    )
}
export default Device;