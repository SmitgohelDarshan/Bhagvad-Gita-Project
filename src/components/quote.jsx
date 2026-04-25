import { Link } from "react-router-dom";

export default function Quote(){
    return(
        <>
            <main className="container-xxl my-2 my-md-2">
    <div className="hero-card">
      <img className="hero-img" src="https://bhagavadgita.io/_next/image?url=/_next/static/media/quotes-bg.1a3ed553.png&w=3840&q=75" alt="Mahabharata scene" />
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="w-100 w-lg-75 ms-lg-3 ms-xl-4">
          <h1 className="hero-title mb-4">
            <span className="line-1 text-center">Bhagavad Gita Quotes By<br/>Lord Krishna</span>
          </h1>
        </div>
      </div>
    </div>
  </main>

   {/* <!-- Middle (centered) --> */} 
    <main className="container-xxl py-5">
        <div className="row align-items-center">
          <Link href="#" className="pager-btn inside left">
            <i className="bi bi-chevron-left"></i>
          </Link> 

          <div className="col-12 col-lg-10 col-xl-8 mx-auto text-center position-relative">
              <h1 className="fw-bold my-4 color-orange">Quote 1</h1>
              <p className="mb-2 fs-4">
                  Whenever dharma declines and the purpose of life is forgotten, I manifest myself on earth.
                  I am born in every age to protect the good, to destroy evil, and to reestablish dharma.
              </p>
          </div>
        
          <Link to="#" className="pager-btn inside right">
              <i className="bi bi-chevron-right"></i>
          </Link>
        </div>
    </main>

        </>
    )
}