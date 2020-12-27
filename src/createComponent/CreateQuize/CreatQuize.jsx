import  React from "react";
import './createquizee.css'
import createaquiz from "../../img/createaquiz.png";
import {Row,Col,grid,Button} from "react-bootstrap"
function CreateQuize (){

return (
    <div classNameName="container-fluid">
    <Row>
<div className="row  align-items-center  mt-2" style={{height:"100vh"}}>

<div className="col-3 "></div>
<div className="col-6  ">

    <div className="form-create-body row align-items-center">
        <div className="banner row m-2 align-items-center ">
            <div className="imag-wraper col-2">
                <img id="imgwraper" src={createaquiz} alt="createaquiz"/>
            </div>
            <div className="title col-4">
                <h3>Create a quiz</h3>
            </div>
            <div className="col-6"></div>
        </div>
        <div className="form">
            <div className="quiz-name-wrapper">
                <div clas="quize-name-input">

                    <label>1. Name this quiz</label> <br/>

                    <input type="text " className="form-control " placeholder="Quiz name "/>
                </div>


            </div>
            <div className="quiz-subject-wraper">
                <div className="label">2. Choose relevant subjects </div>
                <div className="subjects ">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Mathematics
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            English
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Science
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Computers
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Geography
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            World Languages
                        </label>
                    </div>


                </div>

            </div>

            <div className="hr"></div>
            <div className="action-button  m-2">
                <button type="button" className="cancel-btn btn  btn-danger btn-sm">Cancel</button>
                <button type="button" className="save-nexbtnt btn btn-primary  btn-sm">Next</button>
               
            </div>


        </div>
    </div>

    <div className="col-3"></div>
</div>

</div>
</Row>
    
    </div>


);

}

export default CreateQuize;