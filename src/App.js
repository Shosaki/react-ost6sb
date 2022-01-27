import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return <React.Fragment>
               	<h1>Product Line</h1>
			<div className="container">
  				<div className="row">
    					<div className="col-sm">
    					  <div class="card">
  <img class="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap" height="300px"/>
  <div class="card-body">
    <h5 class="card-title">Nike Shoes</h5>
    <a href="#" class="btn btn-primary">4995</a>
  </div>
</div>
    					</div>
    					<div className="col-sm">
    					  <div class="card">
  <img class="card-img-top" src="https://picsum.photos/200/301" alt="Card image cap" height="300px"/>
  <div class="card-body">
    <h5 class="card-title">Ray-ban Glasses</h5>
    <a href="#" class="btn btn-primary">12999</a>
  </div>
</div>
    					</div>
    					<div className="col-sm">
    				  	<div class="card">
  <img class="card-img-top" src="https://picsum.photos/200/302" alt="Card image cap" height="300px"/>
  <div class="card-body">
    <h5 class="card-title">Amazon Echo</h5>
    <a href="#" class="btn btn-primary">2995</a>
  </div>
</div>
    					</div>
  				</div>
			</div>
      <div className="container">
  				<div className="row">
    					<div className="col-sm">
    					  <div class="card">
  <img class="card-img-top" src="https://picsum.photos/200/303" alt="Card image cap" height="300px"/>
  <div class="card-body">
    <h5 class="card-title">Chanel Perfume</h5>
    <a href="#" class="btn btn-primary">18999</a>
  </div>
</div>
    					</div>
    					<div className="col-sm">
    					  <div class="card">
  <img class="card-img-top" src="https://picsum.photos/200/304" alt="Card image cap" height="300px"/>
  <div class="card-body">
    <h5 class="card-title">Sony Headphones</h5>
    <a href="#" class="btn btn-primary">24999</a>
  </div>
</div>
    					</div>
    					<div className="col-sm">
    				  	<div class="card">
  <img class="card-img-top" src="https://picsum.photos/200/305" alt="Card image cap" height="300px"/>
  <div class="card-body">
    <h5 class="card-title">Motorola Smart Watch</h5>
    <a href="#" class="btn btn-primary">14995</a>
  </div>
</div>
    					</div>
  				</div>
			</div>
	       </React.Fragment>;
			
};

export default App;