import { Link, useParams } from "react-router-dom";
import './v.css'
import { useState , useEffect} from "react";
export default function V1(){

    const{id}=useParams();
    const { index } = useParams();
    const apiKey = import.meta.env.VITE_GITAKEY;
    const apiChapterUrl = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/"+id+'/';

    const apiVersesUrl = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/"+id+'/verses/'+index+'/';
    const [verses,setVerses] = useState({});
    
    const[totalVerses,setTotalVerses]=useState(0);
    const[isVersesLoading,setIsVersesLoading]=useState(true);

    
    useEffect(()=>{
          fetch(apiVersesUrl,{
            method:"GET",
            headers:{
              "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
              "x-rapidapi-key": apiKey
            }
          }).then(res=>res.json()).then(res=>{
            setVerses(res);
            
          });

          fetch(apiChapterUrl,{
            method:"GET",
            headers:{
              "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
              "x-rapidapi-key": apiKey
            }
          }).then(res=>res.json()).then(res=>{
            setTotalVerses(res.verses_count);
            setIsVersesLoading(false);
            
          });
        },[index]);

        
    
        let myTranslation, myCommentary, myHindi;
    if(verses.translations)
    {
         myTranslation=((verses.translations).find((ele)=>(ele.author_name=="Swami Sivananda"))).description;
         myHindi = ((verses.translations).find((ele) =>(ele.author_name == 'Swami Ramsukhdas'))).description;
    }

    if(verses.commentaries)
    {
         myCommentary=((verses.commentaries).find((ele)=>(ele.language==='english'))).description;
    }

    return(
            <>
            <main className="container-xxl py-5">
            <div className="verse-wrap mx-auto">
                <div className="text-center">
                    <h1 className="fw-bold my-4">BG {verses.chapter_number}.{verses.verse_number}</h1>
                    <p className="devanagari sanskrit fs-2 fw-semibold mb-4">
                        {verses.text}
                    </p>
                <p className="mb-2 fs-5">{myHindi}</p>
                
            </div>
        <hr className="my-5"/>
        <h2 className="fw-bold mb-4 text-center">Translation</h2>
         <p className="mb-5 fs-5">
          {myTranslation}
         </p>
        <h2 className="fw-bold mb-4 text-center">Commentary</h2>
        <p className="fs-5">
            {myCommentary}
        </p>
        <hr className="my-5"/>
    </div>
  </main>

    { !isVersesLoading && <>
        <Link to={'/chapter/'+id+'/verses/'+(parseInt(index) > 1 ? parseInt(index) - 1 : 1)}><button className="pager-btn left"><i className="bi bi-chevron-left"></i></button></Link>
        <Link to={'/chapter/'+id+'/verses/'+(parseInt(index) > totalVerses ? parseInt(index) - 1 : totalVerses)}><button className="pager-btn right"><i className="bi bi-chevron-right"></i></button></Link>
    </>
    }
    </>
    )
}