import { Link } from "react-router-dom";
import './footer.css'
export default function Footer()
{       
      return(
          <>
          <footer className="footer-minimal pt-4">
        <div className="container-xxl">
            {/* <!-- Links row --> */}
            <nav className="d-flex justify-content-center flex-wrap gap-4 gap-lg-5 mb-3">
                <Link className="footer-link" to="/aboutUs">About Us</Link>
                {/* <Link className="footer-link" to="#">App</Link> */}
                {/* <Link className="footer-link" to="#">Bhagavad Gita AI</Link> */}
                <Link className="footer-link" to="/acknowledge">Acknowledgements</Link>
                <Link className="footer-link" to="/privacy">Privacy</Link>
                <Link className="footer-link" to="/terms">Terms</Link>
                {/* <Link className="footer-link" to="#">Blog</Link> */}
                <Link className="footer-link" to="/donate">Donate</Link>
                {/* <Link className="footer-link" to="#">API</Link> */}
                {/* <Link className="footer-link" to="#">Contact Us</Link> */}
            </nav>

            {/* <!-- Social icons --> */}
            <div className="d-flex justify-content-center align-items-center gap-4">
                <Link className="social-icon social-icon facebook" to="https://www.facebook.com/iiRadhaKrishnaii/" aria-label="Facebook"><i
                        className="bi bi-facebook"></i></Link>
                <Link className="social-icon" to="https://x.com/ShriKrishna?s=20&t=92c4he0cK-nq_Bo6WOx0ZQ" aria-label="X (Twitter)"><i className="bi bi-twitter-x"></i></Link>
                <Link className="social-icon" to="https://github.com/gita" aria-label="GitHub"><i className="bi bi-github"></i></Link>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-4">
                <p className="pt-4">© 2025 Copyright: <Link className="color-orange" to="https://vedvyas.org/">Ved Vyas Foundation.</Link> All rights reserved.</p>
            </div>
        </div>
    </footer>
          </>
      )
}