import React from 'react'

function Home() {
  return (
    <div className="layout">
    <form className="form" controlId="formBasicEmail" action="">
        <div className=""><br />
            <h2 className="brand-title"><center>Find Available Buses</center></h2>
            <div className="inpt ms-4"> <br /><br />
                <div className="row">
                    <div class="col-0.5"></div>
                    <div class="col-4"><label className="label">Start Location</label></div>
                    <div class="col-7"><input className="inputs" type="city" name="startLocation" required  placeholder='Enter Start Location' /><br /><br /></div>
                </div>
                <div className="row">
                    <div class="col-0.5"></div>
                    <div class="col-4"><label className="label">Destination Location</label></div>
                    <div class="col-7"><input className="inputs" type="city" name="startLocation" required  placeholder='Enter Destination' /><br /><br /></div>
                </div>
            </div>
            <div>
                <div className="" style={{textAlign: 'right'}}><br />
                <button className="btnPink me-5" type="submit" >View</button></div> <br />
            </div>
        </div>
    </form>



</div>
  )
}

export default Home