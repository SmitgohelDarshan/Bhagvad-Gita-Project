import { useEffect, useState } from 'react';
import './home.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
export default function Home() {
    
    const apiKey = import.meta.env.VITE_GITAKEY;
    const apiUrl = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18";

    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch(apiUrl,{
            method:"GET",
            headers:{
                "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
                "x-rapidapi-key": apiKey
            }
        }).then(res=>res.json()).then(res=>setData(res));

        
    },[]);

    let ch1;
    const chapter = data.find(
        (ele) => ele.name_translated === "Arjuna Visada Yoga"
    );
    if (chapter) {
        ch1 = chapter.id;
    }


  return (
    <>
      <main className="container-xxl my-2 my-md-2">
            <div className="hero-card">
            <img style={{objectFit: "cover"}} height={"100%"} width={"100%"} src="https://cdn.dollsofindia.com/images/p/krishna-pictures/partha-sarathi-and-arjuna-in-kurukshetra-war-QC14_l.jpg" alt="Mahabharata scene" />
            
            <div className="hero-content">
                <div className="w-100 w-lg-75 ms-lg-3 ms-xl-4">
                <h1 className="hero-title mb-4">
                    <span className="line-1">Experience the Gita</span>
                    <span className="line-2">Anywhere, Anytime</span>
                </h1>
                <Link to={'/chapter/'+ ch1} className="btn-cta text-decoration-none">
                    Read now
                </Link>
                </div>
            </div>
            </div>
        </main>


        <div className="d-flex justify-content-center">
            <div className=" w-75 card shadow p-3 m-5 bg-body-tertiary rounded">
                <div className="card-body">
                    <h5 className="card-title fs-5 color-orange">Verse of the day - BG 5.22</h5>
                    <p className="card-text">The enjoyments that arise from contact are only sources of pain, for they have a beginning and an end, O Arjuna; the wise do not rejoice in them.</p>
                    <Link to="#" className="btn btn-white fw-bold">See more</Link>
                </div>
            </div>
        </div>



        <section className="subscribe-section py-5 py-lg-6" style={{backgroundColor: "rgb(255, 230, 207)"}}>
        <div className="container-xxl position-relative">
            <div className="row justify-content-center">
            <div className="col-12 col-xl-10 text-center">
                <h2 className="fw-bold display-6 display-md-5 mb-4">
                Have the Shloka of the Day delivered to your<br className="d-none d-md-inline"/>
                inbox each morning
                </h2>

                <form id="subscribeForm" className="mt-3" noValidate>
                <div className="row g-3 justify-content-center align-items-center subs-form">
                    <div className="col-12 col-md-5 col-lg-4">
                    <input type="text" id="subsName" className="form-control form-control-lg rounded-3 shadow-sm"
                            placeholder="Enter Your Name"/>
                    </div>
                    <div className="col-12 col-md-5 col-lg-4">
                    <input type="email" id="subsEmail" className="form-control form-control-lg rounded-3 shadow-sm"
                            placeholder="Enter Your Email"/>
                    </div>
                    <div className="col-12 col-md-2 col-lg-2 d-grid">
                    <button className="btn btn-subscribe btn-lg rounded-3 bg-orange text-white" type="submit">Subscribe</button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        </section>

        <div className="container-xxl mt-5">
        <div>
            <h1>Chapters</h1>
        </div>

        <div className="row row-cols-1 row-cols-md-2 mt-4 py-3">
            
        {data.map((ele)=>{
            return (
              <>
                  <div className="col-4 pb-4">
                    <div className="card h-100">
                      <h5 className="card-header color-orange fw-bold">
                        Chapter {ele.id}
                      </h5>
                      <div className="card-body">
                        <h5 className="card-title">{ele.name_translated}</h5>
                        <p className="card-text">
                            {ele.chapter_summary && (ele.chapter_summary.length > 300 ? ele.chapter_summary.substring(0,300) + "..." : ele.chapter_summary)}
                        </p>
                        <Link to={'/chapter/'+ele.id} className="btn btn-primary">{ele.verses_count} Verses</Link>

                      </div>
                    </div>
                  </div>
              </>
            );
        })}
        </div>

        </div>
    </>
  )
}
