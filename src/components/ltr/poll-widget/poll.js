import {useState,useEffect} from 'react';
import axios from 'axios';
import {useRouter} from 'next/navigation'

const PollWidget = () => {

const [data,setData]=useState([])
const router = useRouter()

console.log(data,"77777722222");

const fetchData = () => {
    axios.get('https://free-domain.in/Sreeja/api/newsarticle.php').then((resp)=>{
        setData(resp.data)
    }).catch((err)=>{
        console.log(err);
    })
}



useEffect(() => {

    fetchData()

}, [])



    return (

<>
     {   

data.slice(0,1).map((res)=>(

    <div className="panel_inner poll-widget">
    <div className="panel_header">
        <h4>
            <strong>{res.category}</strong>
        </h4>
    </div>
    <div className="panel_body poll-content">
        <form method="get" id="home_poll">
            <h6  onClick={()=> router.push(`/newssetailpage/${res.title.split(' ').join('-')}`)}>
               {res.title}
            </h6>
            <ul>
                <li>
                    <input
                        id="poll_5444"
                        defaultValue={5444}
                        name="poll"
                        type="radio"
                    />
                    <label htmlFor="poll_5444" >
                    {res.title}
                    </label>
                </li>
                <li>
                    <input
                        id="poll_5445"
                        defaultValue={5445}
                        name="poll"
                        type="radio"
                    />
                    <label htmlFor="poll_5445">
                    {res.subtitle}
                    </label>
                </li>
            </ul>
            <a href="#" className="btn btn-news">
                Submit
            </a>
        </form>
    </div>
</div>


))

      
}

        </>

    );
};

export default PollWidget;