import { toast } from 'react-toastify';

import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { Routes, Route, useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Answer from '../pages/Answer';



const Question = () => {

    const questionId=useParams()
    const [question,setQuestion]=useState("")
    const [comment,setComment]=useState("")
    const [close,setClose] = useState(false)
    const [showanswer,setShowAnswer]=useState(false)

    const getQuestion = async() => {
        console.log(questionId);
        const Response = await fetch(SummaryApi.question.url,{
            method:SummaryApi.question.method,
            credentials:'include',
            headers:{
              "content-type" : "application/json"
            },
            body:JSON.stringify({
              questionId:questionId.id
            })
          })

        const data=await Response.json()
        setQuestion(data.data)
        console.log(question);
    }
    useEffect(() => {
      getQuestion()
      const previewElement = document.getElementById("Preview");
      if (previewElement) {
        previewElement.innerHTML = question?.description;
      }
    }, [question?.length])

    const calculateYearsAgo = (date) => {
      if (!date) return '';
      const pastDate = new Date(date);
      const currentDate = new Date();
  
      const differenceInDays = (currentDate - pastDate) / (1000 * 60 * 60 * 24);
      const differenceInYears = differenceInDays / 365.25;
      const differenceInMonths = differenceInYears * 12;

      if (differenceInYears < 0.1) return 'written recently';
      if (differenceInYears < 1) return differenceInMonths.toFixed(1) + 'written months ago';
      return differenceInYears.toFixed(1) + 'written years ago';
    };
    const handelInputChange=(e)=>{
      setComment(e.target.value)
    }
    const user=useSelector((state)=>{
      const user=state.user.user1
      return user 
    })
    const addComment=async(e)=>{
      e.preventDefault();
      const Response =await fetch(SummaryApi.addcomment.url,{
        method:SummaryApi.addcomment.method,
        credentials:'include',
        headers:{
          "content-type" : "application/json"
        },
        body:JSON.stringify({
          comment:comment,
          questionId:questionId.id,
          userId:user,
        })
      })
      const data=await Response.json()
      if(data.success){
        toast.success(data.message)
        setClose(!close)
        getQuestion()
        setComment("")
      }
      if(data.error){
        toast.error(data.message)
      }
    }

  return (
    <div className='flex justify-center scrollbar-none'>
    <div className='w-full h-[100vh] lg:w-[50%]'>
      <div className='px-6 border-b border-b-slate-300'>
        <div className='w-full py-4 text-xl font-semibold '>
        {question?.post}
        </div>
        <div>
            <div>
              <div>
                {calculateYearsAgo(question?.createdAt)}
              </div>
                <div className='h-9 md:w-[25%] w-[50%] bg-white flex items-center rounded-sm border border-slate-400 mt-3'>
                    <img className='max-h-8 px-1' src={question?.userId?.profilepic} alt='question image'/>
                    <span className='text-blue-400 text-sm'>{question?.userId?.username}</span>
                    {console.log(question)}
                </div>
                
            </div>
        </div>
        <div id='Preview'>
        </div>
        <div className=' w-full flex justify-center items-center mt-3'><img className='w-72 ' src={question?.image}/></div>
        <div className='w-fit px-1 flex items-center object-contain rounded-sm text-slate-500 text-lg bg-slate-200 mt-9'>{question?.subject}</div>
        <div className='w-full h-20 flex justify-end items-center'>
          <div className='w-1/3 h-full flex items-center'>
          <button className='bg-slate-400 px-3 rounded-md text-white' onClick={()=>{setClose(!close)}}>Add Comment</button>
          </div>
        </div>
        <div>
          <div >
            {
              close && (
                <form onSubmit={addComment}>
                <textarea name='comment' className='w-full border rounded-lg focus:outline-slate-300 p-2' value={comment} onChange={handelInputChange} rows={7}></textarea>
                
                <div className='w-full h-10 flex justify-between '>
                  <button className="border bg-blue-400 rounded-md hover:bg-blue-500 px-4 py-1 mt-1 text-white">Add comment</button>
                  <button className='text-blue-400' onClick={()=>{setClose(!close)}}>cancel</button>
                </div>
                </form>
              )
            }
          </div>
        </div>
        <div className='font-semibold relative bottom-0'>{question?.answers?.length}<span> Answer</span></div>
      </div>
    <div>
      <div className='px-6 h-[50vh] overflow-auto scrollbar-none'>
        {
          
          question?.Comments?.map((el,index)=>{
            return(
              <div className=' flex flex-wrap mb-1 w-full bg-slate-50 p-2 rounded-md'>
                <div className='rounded-full  w-full flex items-center gap-2'>
                  <img className='w-10 h-10 rounded-full object-contain' src={el.userId?.profilepic}/>
                  <span>{el.userId?.username}</span>
                </div>
              <div key={index} className='w-full  py-4'>
                <div className='px-2'>{el.comment}</div>
              </div>
              </div>
            )
          })
        }
      </div>
      <div className='h-fit border-t border-t-slate-300'>
        Your Answers
      </div>
      {
        showanswer?
        ( <Answer question={question} showanswer={showanswer} setShowAnswer={setShowAnswer}/>):(
          <div className='flex items-center'>
          Have got a better answer ?<div className='text-xs font-semibold text-blue-400 px-2' onClick={()=>{setShowAnswer(!showanswer)}}> ADD NEW ANSWER</div>
          </div>
        )
      }
      
     
    </div>
    </div>
    </div>
  )
}

export default Question
