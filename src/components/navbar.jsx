import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import './navbar.css'
export default function NavBar(){

  const [data, setData] = useState([]);
  const apiKey = import.meta.env.VITE_GITAKEY;
  const apiUrl = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/";
  
  useEffect(()=>{
        fetch(apiUrl,{
            method:"GET",
            headers:{
                "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
                "x-rapidapi-key": apiKey
            }
        }).then(res=>res.json()).then(res=>setData(res));
    },[]);


    return (<>
     <nav className="navbar navbar-expand-lg sticky-top border-0" id='navbar'>
    <div className="container-xxl py-2">
      <Link className="navbar-brand me-3 pe-5" to="/">Bhagavad Gita</Link>

      <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav me-auto mb-2 ps-5 mb-lg-0 gap-lg-2">
          <li className="nav-item dropdown pe-2">
            <Link to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Chapters
            </Link>
            <ul className="dropdown-menu">
              {
                data.map((e, eId)=>(
                  <li><Link className="dropdown-item" to={'/chapter/'+(eId+1)}>Chapter {eId+1}</Link></li>
                ))
              }
            
            </ul>
          </li>
          <li className="nav-item pe-2"><Link className="nav-link" to="/quote">Quotes</Link></li>
          <li className="nav-item pe-2"><Link className="nav-link" to="/aboutUs">About Gita</Link></li>
          <li className="nav-item pe-2"><Link className="nav-link" to="#">Gita AI</Link></li>
          <li className="nav-item pe-2"><Link className="nav-link" to="/donate">Donate</Link></li>
        </ul>

        <div className="d-flex align-items-center gap-2">
          <div className="position-relative search-wrap d-none d-md-block">
            <i className="bi bi-search"></i>
            <input className="form-control search-input shadow-sm" type="search" placeholder="Search" aria-label="Search"/>
          </div>

          <button id="themeToggle" className="btn icon-btn" type="button" title="Toggle theme">
            {/* {dark ? (
            <i className="bi bi-sun"></i> // light mode
          ) : (
            <i className="bi bi-moon-stars"></i> // dark mode
          )} */}
          <i className="bi bi-moon-stars"></i>
          </button>

          <div className="dropdown">
            <button className="btn d-flex align-items-center gap-1" data-bs-toggle="dropdown" aria-expanded="false" title="Language">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACCCAMAAACXSEZJAAAAolBMVEXIEC7///8BIWnICyz++/vIGjEAAF3MzdjEAA/MO0r35ucAAFcAAGGvr8H09PbvzM7EAADHACcAGmbGACAAFmXFABYAC2IAEmTh4+rEAAfEx9X88vRlbJTy09bdhY3SU2HqtrvPRVT13N4+SH1vdprX2eJZYo2Nkq3MMEPVYm4pN3TorrSEiaffjZW2usvLJTs0QHkAAEgAAE7jn6XswMTYbngORZsVAAAGJklEQVR4nO3da1fbOBAGYDkJqUlYsIGwDRQa0tKSZVn2kv7/v7auIY51ndFoJIcezSdOw3GS57wzdrEti826sNfDp/nliK1Ofttt93gszFXO3n7jdM73vufTP/7avfPtppbfcbwQT6KuPrsYPjIyDIPQEFx3BPdVrRAcrYqi+SEZwxAICIIWAcEwZWFIj4AieENIlIbUCACBWO1e7P4xAUNaBGkc6gQvq/2X670QvSlSIvQJzu6XLgIJIXoa0iHIBNZZ0CHIH6dhuI2WhlQI/VmgE5QvK/VriaOFxhArDWkQ3ARaClqE4knoDHHSkALhfPq3qxH0FLwiFMkY4iPIKQDGoYxAYaA0RWwEoBFsBDuEhsEwG7jTEBehaQS/cdhDeNj99DSOzRATgdgIr+8l5t8+dgyR0xAPwZ0CgOD7VIwu59/2adAYlowMsRBkAjUF5SNAcDUSzUbcDGAafh8WgTwOdwSjFkFheInVFDEQgHEIp2DUITQMU9dsAJsClQZ+BHcjQCk4uXrbjOg22E/Dyj8NCAZuBGAc4lIgI7RpcDRFeBp4EaBxuHUSnFz1NiWkDUtp8B2RXyEGTgRGAhUhcEQCDHwI59MvYTtFuVQEuSn02QA0hZOBCwEYh34pMCPEG5E8CCw7RRghVho4EMKODg0psCMEpsHCEI7gJKiBcfinhcCOEGNEhiJA49A9C4yNACHwN0UYQp9ge1/6jUN7CiAE7qYIQZBToIzDGtojOFIAI/CmgY4gE5TqLDgOSAEGgZOBiuCcBVAKYAIMgvJ/ike9Kc6QDDQEN0FwCrAIXGmgIERPAR5BYTCkAcPgjyDvETQCdwpsh0Z0BJWh1NIAN4UvgnOnyNMIvghwU0AMfghAI/AR+CFAaYBG5NwH4Z9+CtTjAigFwHFBGAI0G4A0fPBA6E6r6o3AmgIKAjwiXQx4hD1BlJ1iKELYiPRDSELQIEwpNf/3Sxft1eOylKqqjrcTBoTJ9qWq5E27CZqpMyd9HfGBWNfdaYriTKutmmoKwnqrbdd1NFJMrq+J30W4Nhut8DMhSWWEIiO0lRGKjNBWRigyQltiMkDZERazYoDPI46GKJuBGA/yccR4iLIZiEP7OLly5cqVK1euXLly5cqVK1euXLly5cqVKxe6Duxv3MN8nEHOdhzayZcBznod3mm4IU6AHtwJ2SHeNCP8rIxQZIS2MkKREdo6NASGy3oNtdav9O1f9k1FuNGv9D272b14Sr+sN/gCbxPBD+W67LJaPt/0foGchNkP7Zrvi27L9Au8Ay/1NxOo9/DW/8mXvQe0w+xucSFv/WLPQL3UfwCCwJkwuyuZGUJu/zERbBZ2AtrtP0YG3jTQbwQzEbhSQL8RzMjgTEPEG8H8UzDuEYTcEmioGz0NC2oaaDeHmgj0FMgEYTeHGopvNlBuE8YR1ApB6G3C3gzctwmDjQCmgIYAMhiagpAG1NIB8/AUUBFCmwI1Iv0WkTAR4FJAR0CkQWPwHJE+y4mYCOBxGI5AYfCaDfiFZUwEegrMjRCKEMoQsLAMpRF2L8ZdYsjIoB833CHTgFtsCktgT0E4AoJhSWwK67JjbOOQD4E0IjFpgBeg4yLgWoDOrykEhgFaihBH4BqHvAiUpugzIJci9E+BcI5DbgR5LT4jg++IdC1PiiPApYATwT8Nwp0GdaHaT66/n6432lqg2BTwIlBGZGlPg7xkMUDgeVwQE8GfwTEi+4tX+6ag9iKIsXg1U1OYljHHEfg0QhwExIjU0rBviom6jPnlHCAIbIRYCExpEBgCLQUUgniPNvBNw1JNgyDMgvFTR+DxdIc0D7nAMSh7CuGdAt9xGB8BwVC5GKbCfWikj0NiCuIihDXFqePUvCkFfYIDfgSSkcGeBivCeqM9NaI/Cw7zYVgAg7anqF4ZLAjsKUiBQG4KI4IhBeEEyR6Q59kUDYMBYf2ZvRHSIciPRMKlYaEhALPgfTw00zMNCkK0FKREQKRBGZEeBO/1Qbowg5OgZktBagQEQ68pkCl4pw/XdjFM9mlApeBXeMy6Kw0IAo4U/Kz0CDDDc8uQpBFeawgEkGHy3DTFrUogxvvnCD0wEgyFAM+G5/8B+NmDsOM+foAAAAAASUVORK5CYII=" width="32px" height="25px" alt=""/>
              <i className="bi bi-caret-down-fill small"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><Link className="dropdown-item" to="#"><img src="data:image/png;base64,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" width="30px" height="25px" alt="U.k. flag"/> English</Link></li>
              <li><Link className="dropdown-item" to="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACtCAMAAABhsvGqAAAAk1BMVEX/mTMSiAf/////ly7/qFixzKgAggAAAIcAAIQAAH4AAIHn5/P5+f3U1ObY2On9/f+SksAAAHnOzuLw8Pfe3uzExN6mps29vdlbW6RwcK0AAHJ8fLSLi7tWVqEREYqCgrghIY2ystFOTp8nJ5AbG4tmZqubm8KamsdHR5yurtMzM5QtLZNCQpyoqMkLC4x4eLY3N5IJq37yAAAGNklEQVR4nO2a6XKjOBCAQ88hIW6JM4Ax2Bhw7HHe/+m2JTuVeYJmd6u/mmIU2z9aHzpbentjGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIb5j/CD+fH2k/n5BgywBGAJDpYALMGxs4Rcj4jO941iRwlB2Qv1QvSXYL9IdpMwTr4SiFRK2v+VP417xbKThOLoY/3909lvyrLxzycfTfjHYp9odpFgeqtADRryIQnDZMhBD7ZBqN7sEc8eEgohhT89pIEY/8rtqBiDkY/JF1Lu0Rh2kLBhMziOoS3aUSCOXwUIxyP2iY0+InoJJb5v1YBObBkfUQSQlPhHoqHBPuGX5CGRSxh9oYYhAmNffoUCCuwAUWW/MRANgy988lmCWkJsHbhSiQuDIMW6Y51TW362gEEJPyIOilhCiL1+gtgujJIZH9NTworF2faPIIYJR4yQNipiCQ98zxLHRjsjlFj7Oob7HeIaXdiGkOOoKLGtPGijopWQ46BYWQGLxsfJwCWFFP9dwJzwA73Y31Q4ONJuJmgl1FKlz1KDQ+HWgz7BMMBJQ49toGqe36VK1qRhkUrAhvAH37Tt/DBh8xdF8h60bfCeFAK7x2Q/T7ClCOKmQCphkELmEC5uVXDtYJTh8d6292MoR0ivbuWwhJDjzwbKuCglJGchTnZiiFccExPRgBzSpuuadJDQCpwSxtXOjsFJiHNCGBilhOi7r6eHEYyqIz9ax/EW+1GtDFSH7vU1jh2UawVKCYtSZZA/X3H+cagCuSxlM47NPV1kUJxPr4EgD0qlFsLAKCXM0g8g2IalsBvmMluDtWq3rtvaCouZHSmMXoYtwBFUzoSBUUr4I6SbBINyPc9lHHSquAxCKTFcCtUF+X0+rRfXGhqJ0wgdlBJwpdS/imZbs2yIyodLsanHJeqy7FZ+pVR6XC8RBkYowfhi/fvPouyGq3Bch64s/k4qrcInzDHRSuhDXW3po65vRyEPU7McnhIOS9MfpDh/9vXc3bfCTP9jCRMkSBiaPNK60lH5knAutS601rkJQ/sL6P+vEhJfHL5zZ9V8lp2+uXS7vOlOnufvZMp2ED7haolyYMQKH13BjFN2baq4bYoPHBnVR9E0cdF+ZtP4fP9HFEMYGKWE1eWMzDg3lyiEsM7u21AO64qPbct6A2F0aWZcJkBkew4dlBIGqaq8Kp7nbWU2xd1Vt+k4pq2+dnmfPfNrQVHklSLdQVFKwKq1r2LwiVulOQsU7h2qNZJBNkO0Xr820C3qIgyMUoLBSfC5JUhXbVOqZp6qernU1TQbhX70+ky5LGchKY+iSPMJuBDMsPZRY5NryyHM3+Mpbdt0it/z8GAF6Nkm4bPvpSUJpBIqH6eHcHMnbds1hHqALGrbKIOhhuTTjQl6C3Fy8Cl7A3GOEWv3GhcLfNWxwu2izTH6OagYG8rzHDIo/NdUSgWthFGJqztTiOwIOWkYG+g6aEbQE37Q2m4C4YdQtIdQxOcOVyGP2AZy2/Ij3Fc/CrhcoHjg7tmmkkqcHvqjFFfaqIglxLidvoFxPb7GNnFL7AlUcsP37zJvlQFcSdu+QQn1WeSCFiI3LGg0YR7PY7gHToiV6wtBJIVPmVqzkJ9K1wotxLg7sjW1IqrqJQA/SGJ0oGhPXmCP+wmTFNJvIXZ5RnxoFGBcfjGC1scvJ/KQ6CUkE24c+9B1CbuzdjdV3BY7CHvcUk6UJw5P9rizNNu7SaPuErALA3dnqYCk06PE8YAyy/zFLrfXNqytkpnNKuYQGHyAKTKprJs94tnnHmNQZzbJfEvn98qY6n1OV2nvNdb7XGvd60Zr1Nt7i7ZF2Eu90pbVRH1N54v97jbn6YdS0lVfSqWO6X63vHe95R5UadNPU9+k1Y7Xu3e/6v/vgCUAS3CwBGAJjrdfzK+338zvN4/xWILHEhwswWMJDpbgsQQHS/BYgoMleCzBwRI8luBgCR5LcLAEjyU4WILHEhwswWMJDpbgsQQHS/BYgoMleCzBwRI8luBgCR5LcLAEjyU4WILHEhwswWMJDpbgsQQHS/BYgoMleCzBwRI8luBgCR5LcLAEjyU4WILHEhwswWMJDpbgsQQHS0D+ARSDGZ++bKhpAAAAAElFTkSuQmCC" width="30px" height="25px" alt="India Flag"/> हिन्दी</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
    </>
    )
}