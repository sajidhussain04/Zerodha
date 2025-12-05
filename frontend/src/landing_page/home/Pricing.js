import React from 'react';

function Pricing() {
    return ( 
       <div class="container">
            <div class="row">
                <div class="col-4">
                     <h1 class=" fs-2 mb-3">Unbeatable pricing</h1>
                     <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                     <a href="" class="mx-5" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div class="col-2"></div>
                <div class="col-6">
                      <div class="row text-center">
                        <div class="col p-3 border mb-5">
                             <h1 class="mb-3 fs-4">indian-rupee-sign0</h1>
                             <p>Free equity delivery and <br/>direct mutual funds</p>
                        </div>
                        <div class="col p-3 border">
                             <h1 class="fs-4"><i class="indian-rupee-sign"></i>20</h1>
                             <p>Intraday and F&O</p>
                        </div>
                      </div>
                </div>
            </div>
       </div>
     );
}

export default Pricing;