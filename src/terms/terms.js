import React, { Component } from 'react';
import './terms.css'
class Terms extends Component {
    render() { 
        return ( 
            <div>
                <div className="main">
                    <h2>Swimming Pool WAIVER</h2>
                    <p className="center"><strong>WAIVER AND REALEASE OF LIABILITY FORM<br/>
                    RELEASE OF LIABILITY, WAIVE OF CLAIMS,<br/>
                    ASSUMPTION OF RISK AND INDEMNITY AGREEMENT</strong></p>
                    <p className="center"><strong>BY SIGNING THIS DOCUMENT YOU WILL WAIVE CERTAIN LEGAL <br/>
                    RIGHTS, INCLUDING THE TIGHT TO SUE</strong></p>
                    <strong>ASSUMPTION OF RISK:</strong>
                    <ol>
                        <li>I, the undersigned, wish to use the Moskovitz Pool; I recognize that playing 
                            at the Moskovitz Pool involves certain risks. Those risks include, but are not 
                            limited to, the risk of injury resulting from possible malfunction of the equipment used in the 
                            pool and injuries resulting from tripping or falling over obsticles in the pool areas.</li>
                    </ol>
                    <p>
                        RELEASE OF LIABILITY, WAIVER OF CLAIMS AND INDEMNITY AGREEMENT inconsideration of my families' participation in this passtime, I hereby agree as follows:
                    </p>
                    <ol>
                        <li> <strong>TO WAIVE ANY AND ALL CLAIMS</strong> that I have or may have in the future against the 
                        Moskovitz family, their officers, employees, agents and representatives (all of whom are 
                        hereinafter referred to as "the Releasees").
                        </li><br/>
                        <li><strong>TO RELEASE THE RELEASEES</strong> from any and all liability for any loss, damage, injury or 
                        expense that I may suffer or that my next of kin may suffer from as a result of my families' 
                        participation at the Moskovitz Swimming Pool due to any cause whatsoever, <strong>INCLUDING 
                        NEGLIGENCE ON THE PART OF THE RELEASEES</strong>;
                        </li><br/>
                        <li><strong>TO HOLD HARMLESS AND INDEMNIFY THE RELEASEES</strong> from any and all liability
                        from any damage to property of, or personal injury to, any third party, resulting from my 
                        participation at the Swimming Pool.
                        </li><br/>
                        <li>That this Agreement shall be effective and bindingupon mt heirs, and their next of kin, executors, 
                        administrators and assigns, in the event of any death.  
                        </li>
                    </ol>
                </div>
            </div>
         );
    }
}
 
export default Terms;