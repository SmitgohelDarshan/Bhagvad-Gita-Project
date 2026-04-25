import { Link } from 'react-router-dom';
import './common.css';
export default function Donate(){
    return(
        <>
            <main className="container-xxl my-2 my-md-2">
    <div className="hero-card">
      <img className="hero-img" src="https://bhagavadgita.io/_next/image?url=/banner2.png&w=1920&q=75" alt="Mahabharata scene" />
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="w-100 w-lg-75 ms-lg-3 ms-xl-4">
          <h1 className="hero-title mb-4">
            <span className="line-1 text-center">DONATE</span>
          </h1>
        </div>
      </div>
    </div>
  </main>


<section className="py-4 py-lg-5">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12 col-xl-10 mx-auto">
        <h2 className="ms-3 me-3 ms-md-5 me-md-5 mb-3 fw-bold text-center">Support the Digital Revival of Ancient Wisdom</h2>
        <p className="fs-5 lh-lg  ms-3 me-3 ms-md-5 me-md-5 mb-3">
          Your generous support enables the Ved Vyas Foundation to offer a suite of spiritual resources entirely free of charge and devoid of distractions. By donating, you help us maintain and expand our offerings, such as the ad-free <a href="https://bhagavadgita.io/">Bhagavad Gita website</a>, <a href="https://bhagavadgita.io/app">mobile apps</a> and <a href="https://bhagavadgita.io/gitagpt">GitaGPT AI chatbot</a>, ensuring that the essence of Sanatana Dharma reaches the hands and hearts of seekers around the world without any barriers.
        </p>
        <p className="fs-5 lh-lg  ms-3 me-3 ms-md-5 me-md-5 mb-3">
            Our dedication is to the digitization and modern presentation of the Ramayan, Mahabharat, Vedas, Puranas, and other precious Indian scriptures. With your contribution, we continue to create and innovate—providing state-of-the-art applications for state-of-the-art spirituality, accessible to all, anytime and anywhere.
        </p>
        <img className="rounded mx-auto d-block" width="25%" src="https://bhagavadgita.io/_next/image?url=%2Fupi_qr_radhakrishna.png&w=640&q=75" alt="Donate to Ved Vyas Foundation"/>
        <p className="fw-bold text-center lh-lg  ms-3 me-3 ms-md-5 me-md-5 mb-3">Scan the QR code with any UPI app to make your donation.</p>
        <p className="fw-bold text-center lh-lg  ms-3 me-3 ms-md-5 me-md-5 mb-3"><span>UPI ID: </span><span className="color-orange">vedvyasfoundation@icici</span></p>
    </div>
    </div>
    </div>
    </section>

        </>
    )
}