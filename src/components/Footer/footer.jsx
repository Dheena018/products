
import './footer.css'

const Footer = ()=>{
    return(
        <div className="footer-container">
            <div className="footer-title">
                <ul className="footer-ul">
                    <li><a href="4">Home</a></li>
                    <li><a href="3">About</a></li>
                    <li><a href="2">Contact Us</a></li>
                    <li><a href="1">Terms of Privacy</a></li>
                </ul>
            </div>
            <hr />
        <div className="footer-icon">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-twitter"></i>
        </div>
        <hr />

        </div>
    )
};
export default Footer;