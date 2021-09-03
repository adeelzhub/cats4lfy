import React from "react";

const Footer = () => {
    return (
       <div className="container">
            <div className="row">
                {/* Column1 */}
                <div className="col">
                    <h4>CONTACT</h4>
                    <ul className="list-unstyled">
                        <li>650-876-1212</li>
                        <li>St Petersburg, Russia</li>
                        <li>123 South Street</li>
                    </ul>
                </div>
                {/* Column2 */}
                <div className="col">
                    <h4>HELP</h4>
                    <ul className="list-unstyled">
                        <li>NO RETURNS</li>
                        <li>NO HUMANS WORK HERE</li>
                        <li>18 HOUR PHONE DELAYS</li>
                    </ul>
                </div>
                {/* Column3 */}
                <div className="col">
                    <h4>SOCIALS</h4>
                    <ul className="list-unstyled">
                        <li>Instagram</li>  
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
                <br />
                <hr />
                <hr />
                <hr />
                <br />
                <div className="row">
                    <p className="col-sm">
                    &copy;{new Date().getFullYear()} CATS 4 LYF | All Rights Reserved | Terms of Service | Privacy
                    </p>
                </div>
        </div>
       )

}

export default Footer