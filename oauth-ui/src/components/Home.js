import React,{useState,useEffect} from 'react'
import DataService from '../services/data'


const Home = () => {

  const [content, setcontent] = useState("")

  useEffect(() => {
    DataService.getHome().then((response)=>{
      setcontent(response.data)
    },
    (error)=>{
      const _content = 
      (error.response && error.response.data) ||
       error.message || 
       error.toString();

      setcontent(_content);
     }
    )
  
  }, [])


  return (
    <div className='container'>
      <header className='jumbotron'>
        <h3>{content}</h3>
      </header>
        
    </div>
  )
}

export default Home