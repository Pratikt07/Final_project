import React from "react";

function AddQ(){
    return(
        <div class="container-fluid p-0 m-0">
            <div class="row d-flex justify-content-center align-items-start" style={{height:'100vh'}}>
                <div class="col-12 col-md-6 " style={{backgroundColor: "#fff"}}>
                   
                    
                    <div class="row d-flex justify-content-center mt-3">
                        <div class="col-8 d-flex justify-content-center align-items-center"style={{height:'100px'}}>
                            <input type="text" class="form-control p-0" style={{height:'100px'}} placeholder="write your question here" aria-label="" aria-describedby="basic-addon1"></input>
                        </div>
                        <div class="col-4 d-flex">
                            <div class="row d-flex justify-content-start align-items-start">
                                <a href="#"><div class="col fas fa-images" style={{height:'25px',color:'gray'}}>image</div></a> 
                                <a href="#"><div class="col fas fa-microphone"  style={{height:'25px',color:'gray'}}>audio</div></a>
                            </div> 
                            <div class="row d-flex justify-content-start align-items-start">
                                <a href="#"><div class="col fas fa-video"  style={{height:'25px',color:'gray'}}>video</div></a>
                                <a href="#"><div class="col fas fa-calculator"  style={{height:'25px',color:'gray'}}>math</div></a>
                            </div> 
                        </div> 
                    </div> 
                    <div class="row d-flex justify-content-start align-items-center">
                        <div class="col-1 p-0"><a href="#"><i class="fas fa-check-circle" style={{fontSize:'40px', color:'gray'}}></i></a></div>
                        <div class="col-7 d-flex justify-content-center align-items-center mt-3" style={{height: '50px'}}>
                            <input type="text" class="form-control" placeholder="answer option 1" aria-label="" aria-describedby="basic-addon1"></input>
                        </div>
                        <div class="col-4 d-flex mt-3">
                            <div class="row d-flex justify-content-start align-items-start">
                                <div class="col"><a href="#" style={{fontSize:'25px',color:'gray'}}><i class="fas fa-images">image</i></a></div>
                                <div class="col"><a href="#" style={{fontSize:'25px',color:'gray'}}><i class="fas fa-calculator">math</i></a></div>
                            </div> 
                        </div>
                    </div>
                    <div class="row d-flex justify-content-start align-items-center">
                        <div class="col-1 p-0"><a href="#"><i class="fas fa-check-circle" style={{fontSize:'40px', color:'gray'}}></i></a></div>
                        <div class="col-7 d-flex justify-content-center align-items-center mt-3" style={{height: '50px'}}>
                            <input type="text" class="form-control" placeholder="answer option 2" aria-label="" aria-describedby="basic-addon1"></input>
                        </div>
                        <div class="col-4 d-flex mt-3">
                            <div class="row d-flex justify-content-start align-items-start">
                                <div class="col"><a href="#" style={{fontSize:'25px',color:'gray'}}><i class="fas fa-images">image</i></a></div>
                                <div class="col"><a href="#" style={{fontSize:'25px',color:'gray'}}><i class="fas fa-calculator">math</i></a></div>
                            </div> 
                        </div>
                    </div>
                    <div class="row d-flex justify-content-start align-items-center">
                        <div class="col-1 p-0"><a href="#"><i class="fas fa-check-circle" style={{fontSize:'40px', color:'gray'}}></i></a></div>
                        <div class="col-7 d-flex justify-content-center align-items-center mt-3" style={{height: '50px'}}>
                            <input type="text" class="form-control" placeholder="answer option 3" aria-label="" aria-describedby="basic-addon1"></input>
                        </div>
                        <div class="col-4 d-flex mt-3">
                            <div class="row d-flex justify-content-start align-items-start">
                                <div class="col"><a href="#" style={{fontSize:'25px',color:'gray'}}><i class="fas fa-images">image</i></a></div>
                                <div class="col"><a href="#" style={{fontSize:'25px',color:'gray'}}><i class="fas fa-calculator">math</i></a></div>
                            </div> 
                        </div>
                    </div>
                    <div class="row d-flex justify-content-start align-items-center">
                        <div class="col-1 p-0"><a href="#"><i class="fas fa-check-circle" style={{fontSize:'40px', color:'gray'}}></i></a></div>
                        <div class="col-7 d-flex justify-content-center align-items-center mt-3" style={{height: '50px'}}>
                            <input type="text" class="form-control" placeholder="answer option 4" aria-label="" aria-describedby="basic-addon1"></input>
                        </div>
                        <div class="col-4 d-flex mt-3">
                            <div class="row d-flex justify-content-start align-items-start">
                                <div class="col"><a href="#" style={{fontSize:'25px',color:'gray'}}><i class="fas fa-images">image</i></a></div>
                                <div class="col"><a href="#" style={{fontSize:'25px',color:'gray'}}><i class="fas fa-calculator">math</i></a></div>
                            </div> 
                        </div>
                    </div>
                    <div class="row d-flex justify-content-start align-items-center mt-3">
                        <div class="col-1"></div>
                        <div class="col-4 btn btn-success btn-lg btn-block">Add answer option</div>
                        <div class="col-7"></div>
                    </div>
                    <div class="row d-flex justify-content-start align-items-center mt-3">
                        <div class="col p-0 ">
                            Answer Explanation(optional)
                            <hr style={{width:'100%'}}></hr>     
                        </div>
                    </div>
                    <div class="row d-flex justify-content-start align-items-center">
                        <div class="col-8 border border-dark d-flex justify-content-center align-items-center mt-3"style={{height: '50px'}}>
                            <div class="row">
                                <div class="col-11">Add a fun fact or explanation of correct answer</div>
                                <div class="col-1" ><i class="fas fa-bolt" style={{fontSize:'40px'}}></i></div>
                            </div>  
                        </div>
                        
                        <div class="col-4 d-flex mt-3">
                            <div class="row d-flex justify-content-start align-items-start">
                                <div class="col"><a href="#" style={{fontSize:'25px',color:'gray'}}><i class="fas fa-images">image</i></a></div>
                                <div class="col"><a href="#" style={{fontSize:'25px',color:'gray'}}><i class="fas fa-calculator">math</i></a></div>
                            </div> 
                        </div>
                    </div>
                    <div class="row d-flex justify-content-start align-items-center">
                        <div class="col-3 p-0 mt-3 border border-dark">
                            <button type="button" class="btn btn-dark btn-block">tag topic</button>   
                        </div>
                        <div class="col-7"></div>
                    </div>
                    <div class="row d-flex justify-content-start align-items-center d-flex justify-content-start align-items-center mt-3 p-0">
                        <div class="col-4 p-0 border border-dark" style={{height: '40px'}}>
                            <div class="row p-0 m-0 d-flex justify-content-center align-items-center">
                                <div class="col-1 d-flex justify-content-center align-items-center">
                                    <i class="far fa-clock "></i>
                                </div>   
                                <div class="col-6">30 Seconds </div>
                                  
                                <div class="col-1 d-flex justify-content-center align-items-center"><i class="fas fa-caret-down"></i></div> 
                            
                                <div class="col-3"> </div>
                            </div>
                        </div>
                        <div class="col-4"></div>
                        <div class="col-2">
                            <button type="button" class="btn btn-light btn-sm btn-block">cancel</button>   
                        </div>
                        <div class="col-2">
                            <button type="button" class="btn btn-success btn-sm btn-block">save</button>   
                        </div>
                       
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AddQ;