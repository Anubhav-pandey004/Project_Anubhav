import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { FaBold, FaItalic } from "react-icons/fa";
import writeBold from "../helper/writeBold";
import writeItalic from "../helper/writeItalic";
import writeCode from "../helper/writeCode";
import { RiBracesFill } from "react-icons/ri";
import { FaImage } from "react-icons/fa6";
import ImageDilog from "../components/ImageDilog";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Answer = () => {
  const [close,setClose]=useState(false)
  const [profile,setProfile]=useState("")
  const navigate=useNavigate()

  const user=useSelector((state)=>{
    const user=state.user.user1
    return user 
  })

  const [formData, setFormData] = useState({
    answer: ""
  });
  const handleInput = (e) => {
    setFormData((currData) => ({
      ...currData,
      [e.target.name]: e.target.value,
    }));
  };
  const uploadPic = () => {
    setClose(true)
  };

  useEffect(() => {
    const previewElement = document.getElementById("preview");

    if (previewElement) {
      previewElement.innerHTML = formData.answer;
    }
  }, [formData.answer]);

  const handelSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    // formData.image=profile;
    // formData.userId=user
    // const Response = await fetch(SummaryApi.newPost.url,{
    //   method:SummaryApi.newPost.method,
    //   credentials:'include',
    //   headers:{
    //     "content-type" : "application/json"
    //   },
    //   body:JSON.stringify(formData)
    // }
    // )
    // const data=await Response.json()
    // console.log(data);
    // if(data.success){
    //   toast.success(data.message)
    //   navigate("/question/"+data.data._id)
    // }
    // if(data.error){
    //   toast.error(data.message)
    //   navigate("/login")
    // }
  };
  return (
    <div className='flex justify-center'>
      <div className='p-5 lg:w-[60%]'>
        <form onSubmit={handelSubmit} className='w-[90vw]'>
        <div className="flex w-full flex-wrap mt-6">
            <div className="w-full">
              <div className="flex">
                <span className="cursor-pointer p-1" onClick={writeBold}>
                  <FaBold />
                </span>
                <span className="cursor-pointer p-1" onClick={writeItalic}>
                  <FaItalic />
                </span>
                <span className="cursor-pointer p-1" onClick={writeCode}>
                  <RiBracesFill />
                </span>
                <span className="cursor-pointer p-1" onClick={uploadPic}>
                  <FaImage />
                </span>
              </div>
            </div>
            <StyledTextBox
             
              name="answer"
              id='answer'
              value={formData.answer}
              onChange={handleInput}
              className="border border-slate-300 w-full h-9 rounded-md focus:border-blue-300 px-2"
            />
          </div>
          <Preview className="h-14 w-full border border-dashed mt-8 overflow-auto">
            <div className="h-full w-full px-2">
              <div id="preview"></div>
            </div>
          </Preview>
          {
                profile && 
                <div className="h-[40%] w-full mt-2 ">
                    <img className='h-full w-full object-scale-down' src={profile} alt="" />
                </div>
        }
        <button className="border bg-blue-400 rounded-md hover:bg-blue-500 px-4 py-1 mt-1 text-white">Submit Answer</button>
        </form>
        <main>
          {
            close && <ImageDilog close={close} setClose={setClose} profile={profile} setProfile={setProfile}/>
          }
        </main>
      </div>
    </div>
  )
}

export default Answer

const StyledInput = styled.input`
  border: 1px solid slategray;
  width: 100%;
  height: 36px;

  &:focus {
    border-color: #9b9bea;
    box-shadow: 0.1px 0.1px 5px #bbbbfa;
    outline: none;
  }
`;

const StyledTextBox = styled.textarea`
  border: 1px solid slategray;
  width: 100%;
  height: 15rem;

  &:focus {
    border-color: #9b9bea;
    box-shadow: 0.1px 0.1px 5px #bbbbfa;
    outline: none;
  }
`;

const Preview = styled.div`
  #Preview:empty::before {
    content: "Preview Here";
    color: #8e9196;
  }
`;