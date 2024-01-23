
import {useEffect,useState} from 'react'

import Footer from "./footer";
import Header from "./header";
import MyContext from '../../../app/hooks/MyContext';
import axios from 'axios';
import { error } from 'jquery';


export default function Layout({ children }) {
  const [data,setData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://free-domain.in/Sreeja/api/newsarticle.php');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error, display a message, or perform other actions
      }
    };
  
    fetchData();
  }, []);

  return (
    <MyContext.Provider value={data}>
      <>
        <Header />
        {children}
        <Footer />
      </>
    </MyContext.Provider>
  );
}
