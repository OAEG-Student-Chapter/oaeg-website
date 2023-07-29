import {FaEnvelope, FaPhone} from "react-icons/fa6";

export const AppFooter = () => {
    return (
        <footer className="footer">
            <div className="main">
                {/*<img src={footerImage} alt="Footer Image" className="imgMain"/>*/}
                <div className="tableContainer">
                    <table className="table">
                        <tr>
                            <th id="th0"></th>
                            <th id="th1">OAEG</th>
                            <th id="th2">Pages</th>
                            <th id="th3">Utility</th>
                            <th id="th4">Subscribe</th>
                            <th id="th5"></th>
                        </tr>
                        <tr>
                            <td id="td0"></td>
                            <td id="td1">
                                <div className="rowspanDiv">
                                    <p className="aboutText">Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</p>
                                    <div className="contactContainer">
                                        <div className="circleIcon">
                                            <FaEnvelope/>
                                        </div>
                                        <p>Email<br/>
                                            oaeg@gmail.com</p>
                                    </div>
                                    <div className="contactContainer">
                                        <div className="circleIcon">
                                            <FaPhone/>
                                        </div>
                                        <p>Call Us<br/>
                                            (00) 112 365 489</p>
                                    </div>
                                </div>
                            </td>
                            <td id="td2">
                                <div className="rowspanDiv1">
                                    <ul className="linkslist">
                                        <li>About Us</li>
                                        <li>Our Team</li>
                                        <li>Our Project</li>
                                        <li>Pricing</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </td>
                            <td id="td3">
                                <div className="rowspanDiv1">
                                    <ul className="linkslist">
                                        <li>Style Guide</li>
                                        <li>Changelog</li>
                                        <li>Licenses</li>
                                        <li>Protected</li>
                                        <li>Not Found</li>
                                    </ul>
                                </div>
                            </td>
                            <td id="td4">
                                <div className="rowspanDiv2">
                                    <input type="text" placeholder="Email here*" className="inputBox" />
                                    <div className="colspanDiv">
                                        <button className="sendButton">Send Now</button>
                                        {/*<a href="https://www.linkedin.com">*/}
                                        {/*    <FontAwesomeIcon icon={faLinkedin} className="image-class"/>*/}
                                        {/*</a>*/}
                                        {/*<a href="https://www.twitter.com">*/}
                                        {/*    <FontAwesomeIcon icon={faTwitter} className="image-class"/>*/}
                                        {/*</a>*/}
                                        {/*<a href="https://www.facebook.com">*/}
                                        {/*    <FontAwesomeIcon icon={faFacebook} className="image-class"/>*/}
                                        {/*</a>*/}
                                    </div>
                                </div>
                            </td>
                            <td id="td5"></td>
                        </tr>
                    </table>
                </div>
                <div>
                    <p className="copyrightText">Copyright © Old Anandian Engineers Guild | Designed and by OAEG Student Chapter</p>
                </div>
            </div>
        </footer>
    );
}

