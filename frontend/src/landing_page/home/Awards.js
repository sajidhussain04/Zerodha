import React from 'react';


function Awards () {
    return ( 
        <div className="container mt-5">
              <div className="row">
                  <div className="col-6 p-5">
                       <img src="media/images/largestBroker.svg"/>
                  </div>
                  <div className="col-6 p-5 mt-5">
                       <h1>Largest stock broker in india</h1>
                       <p class="mb-5">2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                       <div class="row">
                            <div class="col-6">
                                 <ul>
                                     <li>Future and Options</li>
                                     <li>Commodity derivatives</li>
                                     <li>Currency derivatives</li>
                                 </ul>
                            </div>
                            <div class="col-6">
                                <ul>
                                    <li>Stock & IPOs</li>
                                    <li>Direct mutual funds</li>
                                    <li>Bonds and Govt. Securities</li>
                                </ul>
                            </div>
                       </div>
                       <img src="media\images\pressLogos.png" style={{width:"90%"}}/>
                  </div>
              </div>
        </div>
     );
}

export default Awards;