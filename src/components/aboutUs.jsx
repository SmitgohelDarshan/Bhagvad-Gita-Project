import './common.css';
import { Link } from 'react-router-dom';
function ImageSection()
{
    return (<>
        <main className="container-xxl my-2 my-md-2">
    <div className="hero-card">
      <img className="hero-img" src="https://bhagavadgita.io/_next/image?url=/_next/static/media/quotes-bg.1a3ed553.png&w=3840&q=75" alt="Mahabharata scene" />
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="w-100 w-lg-75 ms-lg-3 ms-xl-4">
          <h1 className="hero-title mb-4">
            <span className="line-1 text-center">About Bhagwat Gita</span>
          </h1>
        </div>
      </div>
    </div>
  </main>
    </>)
}

export default function About()
{
    return (<>
    {/* <!-- Hero --> */}
    <ImageSection/>

  <section className="py-4 py-lg-5">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12 col-xl-10 mx-auto">
        <p className="fs-5 lh-lg ms-3 me-3 ms-md-5 me-md-5 mb-5">
          Bhagavad Gita, also known as the Gita - "The Song of The Lord" is a practical guide to one's life that guides
          one to re-organise their life, achieve inner peace and approach the Supreme Lord (the Ultimate Reality).
          It is a 700-verse text in Sanskrit which comprises chapters 23 through 40 in the Bhishma-Parva section of the
          Mahabharata.
        </p>

        <p className="fs-5 lh-lg  ms-3 me-3 ms-md-5 me-md-5 mb-0">
          The Bhagavad Gita is a dialogue between Arjuna, a supernaturally gifted warrior and his guide and charioteer
          Lord Krishna on the battlefield of Kurukshetra. As both armies stand ready for the battle, the mighty warrior
          Arjuna, on observing the warriors on both sides becomes overwhelmed with grief and compassion due to the fear
          of losing his relatives and friends and the consequent sins attributed to killing his own relatives. So, he
          surrenders to Lord Krishna, seeking a solution. Thus, follows the wisdom of the Bhagavad Gita. Over 18 chapters,
          Gita packs an intense analysis of life, emotions and ambitions, discussion of various types of yoga, including
          Jnana, Bhakti, Karma and Raja, the difference between Self and the material body as well as the revelation of the
          Ultimate Purpose of Life.
        </p>
      </div>
    </div>
    </div>
    </section>
    </>)
}