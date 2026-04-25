import { Link, useParams } from "react-router-dom";
import './v.css'
import { useEffect, useState } from "react";
export default function C1(){

  const {id} = useParams();
  const apiKey = import.meta.env.VITE_GITAKEY;
  const apiChapterUrl = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/"+id+'/';
  const [data,setData] = useState({});

  const apiVersesUrl = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/"+id+'/verses/';
  const [verses,setVerses] = useState([]);

  useEffect(()=>{
      fetch(apiChapterUrl,{
        method:"GET",
        headers:{
          "X-Rapidapi-Host": "bhagavad-gita3.p.rapidapi.com",
          "X-Rapidapi-Key": apiKey
        }
      }).then(res=>res.json()).then(res=>setData(res));

      fetch(apiVersesUrl,{
        method:"GET",
        headers:{
          "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
          "x-rapidapi-key": apiKey
        }
      }).then(res=>res.json()).then(res=>setVerses(res));
    },[id]);

    return (
      <>
        <Link to={'/chapter/'+(parseInt(id) > 1 ? parseInt(id) - 1 : 1)}>
          <button className="pager-btn left">
            <i className="bi bi-chevron-left"></i>
          </button>
        </Link>
        <Link to={'/chapter/'+(parseInt(id) < 18 ? parseInt(id) + 1 : 18)}>
          <button className="pager-btn right">
            <i className="bi bi-chevron-right"></i>
          </button>
        </Link>

        {/* <!-- Floating chat/avatar button --> */}
        <Link className="chat-fab" to="#" title="Ask Gita">
          <img
            src="https://images.unsplash.com/photo-1655577480801-2781cb89d628?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGtyaXNobmF8ZW58MHx8MHx8fDA%3D"
            alt="chat"
          />
        </Link>

        <div className="container-xxl mt-5">
          <div className="row">
            <div className="col-12 col-xl-10 mx-auto">

              <h4 className="ms-3 me-3 ms-md-5 me-md-5 mb-3 text-center color-orange">
                CHAPTER {data.id}
              </h4>
              <h1 className="ms-4 me-4 ms-md-5 me-md-5 mb-4 text-center">
                {data.name}
              </h1>
              <p className="fs-5 lh-lg  ms-3 me-3 ms-md-5 me-md-5 mb-4">
                {data.chapter_summary}
              </p>

              <div className="border-top border-bottom py-3 ms-4 me-4 ms-md-5 me-md-5 mb-4">
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="mb-0 fs-4 fw-bold">
                    {data.verses_count} Verses
                  </h6>

                  <div className="input-group" style={{ maxWidth: "360px" }}>
                    <select
                      id="gotoVerse"
                      className="form-select text-secondary"
                    >
                      <option value="" selected disabled>
                        Go To Verse
                      </option>
                      <option value="1">Verse 1</option>
                      <option value="2">Verse 2</option>
                      <option value="3">Verse 3</option>
                    </select>

                    <button
                      className="btn btn-outline-secondary toolbar-sort dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-sliders2"></i>
                      <span className="ms-1">Sort</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <button className="dropdown-item" type="button">
                          Ascending (1 → {data.verses_count})
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          Descending ({data.verses_count} → 1)
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="ms-4 me-4 ms-md-2 me-md-2 mb-4">
                {verses.map((d, verseID) => (
                  <Link to={'/chapter/'+id+'/verses/'+(verseID+1)} className="fs-5 text-decoration-none">
                    <section className="d-flex align-items-center justify-content-between pb-4">
                      <div className="color-orange">VERSE {verseID+1}</div>
                      <div className="text-dark">
                        <p className="">{d.text}</p>
                      </div>
                    </section>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}