// components/CenterInfo.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectVIP_CENTER_DATA, selectVIP_token,selectVIPDATA} from './../../../../redux/lib/selectors'
import {getVIP_CenterData} from "../../../../redux/lib/reducers/vip_reducers/thunks"
import { Button } from '@mui/material';

interface Contact {
  phone_num: number;
  email: string;
  address: string;
  website?: string;
}

interface About {
  teachers_data: string[];
  student_n: number;
}

interface Course {
  subject: string;
  teachers: string[];
  payment: number;
  duration: string;
}

interface Event {
  title: string;
  img: string;
  description: string;
  date: string;
}

interface PaymentHistory {
  month: string;
  status: string;
  date: string;
}

interface Pay {
  plan: string;
  status: 'fulfilled' | 'waiting';
  date: string;
  history: PaymentHistory[];
}

interface Achievement {
  title: string;
  description: string;
  date: string;
  img: string;
}

interface CenterData {
  CEO: string;
  admin: string;
  sub_admin: string;
}

interface CenterProps {
  UID: string;
  name: string;
  contact: Contact;
  about?: About;
  courses?: Course[];
  events?: Event[];
  pay?: Pay;
  achievements?: Achievement[];
  data?: CenterData;
}

const CenterInfo = () => {

  const [formData,setFormData]=useState<object>({})
  useEffect( ()=>{
    const link=window.location.href
    const splitted=link.split("?")
    const filtered=splitted.filter(item=>item.includes("username") || item.includes("password") || item.includes("token"))
    if(filtered){
    const proccessed_data=filtered.map((item)=>item.split("="))
    const formData=Object.fromEntries(proccessed_data)
    setFormData(formData)
    }
  },[])

  const dispatch=useDispatch()
  const token=useSelector(selectVIP_token);
  const VIP_DATA=useSelector(selectVIPDATA);
  const VIP_CENTER=useSelector(selectVIP_CENTER_DATA);
  const handleSubmit=()=>{
      dispatch(getVIP_CenterData(formData,token))
      
  }
  


  

  const { UID, name, contact, about, courses, events, achievements, data, pay } = VIP_CENTER
  return (
    <div className="p-6 bg-gray-50 shadow-lg rounded-lg space-y-6 max-w-2xl mx-auto">
      {/* Center Header */}
      <Button onClick={()=>handleSubmit()}>submit</Button>
      <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">Center Information</h2>

      {/* UID and Name */}
      <div className="space-y-1 bg-blue-100 p-4 rounded-md">
        <p className="text-lg font-semibold"><strong>UID:</strong> {UID}</p>
        <p className="text-lg font-semibold"><strong>Name:</strong> {name}</p>
      </div>

      {/* Contact Information */}
      <div className="border-t border-gray-300 pt-4 bg-green-100 p-4 rounded-md">
        <h3 className="text-xl font-semibold text-gray-700">Contact</h3>
        <p className="text-gray-600"><strong>Phone:</strong> {contact.phone_num}</p>
        <p className="text-gray-600"><strong>Email:</strong> {contact.email}</p>
        <p className="text-gray-600"><strong>Address:</strong> {contact.address}</p>
        {contact.website && (
          <p className="text-gray-600"><strong>Website:</strong> <a href={`https://${contact.website}`} className="text-blue-500 hover:underline">{contact.website}</a></p>
        )}
      </div>

      {/* About Section */}
      {about && (
        <div className="border-t border-gray-300 pt-4 bg-yellow-100 p-4 rounded-md">
          <h3 className="text-xl font-semibold text-gray-700">About</h3>
          <p className="text-gray-600"><strong>Teachers:</strong> <span className="italic">{about.teachers_data.join(', ')}</span></p>
          <p className="text-gray-600"><strong>Number of Students:</strong> <span className="italic">{about.student_n}</span></p>
        </div>
      )}

      {/* Courses */}
      {courses && (
        <div className="border-t border-gray-300 pt-4 bg-purple-100 p-4 rounded-md">
          <h3 className="text-xl font-semibold text-gray-700">Courses</h3>
          {courses.map((course:Course, index:number) => (
            <div key={index} className="border-b border-gray-200 py-2 hover:bg-purple-200 transition duration-200">
              <p className="text-gray-700"><strong>Subject:</strong> <span className="underline">{course.subject}</span></p>
              <p className="text-gray-600"><strong>Teachers:</strong> <span className="italic">{course.teachers.join(', ')}</span></p>
              <p className="text-gray-600"><strong>Payment:</strong> <span className="font-bold">${course.payment}</span></p>
              <p className="text-gray-600"><strong>Duration:</strong> <span className="italic">{course.duration}</span></p>
            </div>
          ))}
        </div>
      )}

      {/* Events */}
      {events && (
        <div className="border-t border-gray-300 pt-4 bg-pink-100 p-4 rounded-md">
          <h3 className="text-xl font-semibold text-gray-700">Events</h3>
          {events.map((event:Event, index:number) => (
            <div key={index} className="border-b border-gray-200 py-2 hover:bg-pink-200 transition duration-200">
              <p className="text-gray-700"><strong>Title:</strong> <span className="underline">{event.title}</span></p>
              <p className="text-gray-600"><strong>Date:</strong> <span className="italic">{event.date}</span></p>
              <p className="text-gray-600"><strong>Description:</strong> <span className="italic">{event.description}</span></p>
              {event.img && <img src={event.img} alt={event.title} className="mt-2 w-full rounded-lg shadow-md" />}
            </div>
          ))}
        </div>
      )}

      {/* Payment */}
      {pay && (
        <div className="border-t border-gray-300 pt-4 bg-teal-100 p-4 rounded-md">
          <h3 className="text-xl font-semibold text-gray-700">Payment</h3>
          <p className="text-gray-600"><strong>Plan:</strong> <span className="italic">{pay.plan}</span></p>
          <p className="text-gray-600"><strong>Status:</strong> <span className="font-bold">{pay.status}</span></p>
          <p className="text-gray-600"><strong>Date:</strong> <span className="italic">{pay.date}</span></p>
          <h4 className="mt-2 font-semibold">History</h4>
          {pay.history.map((entry:PaymentHistory, index:number) => (
            <div key={index} className="border-b border-gray-200 py-1">
              <p className="text-gray-600"><strong>Month:</strong> <span className="italic">{entry.month}</span></p>
              <p className="text-gray-600"><strong>Status:</strong> <span className="font-bold">{entry.status}</span></p>
              <p className="text-gray-600"><strong>Date:</strong> <span className="italic">{entry.date}</span></p>
            </div>
          ))}
        </div>
      )}

      {/* Achievements */}
      {achievements && (
        <div className="border-t border-gray-300 pt-4 bg-orange-100 p-4 rounded-md">
          <h3 className="text-xl font-semibold text-gray-700">Achievements</h3>
          {achievements.map((achievement:Achievement, index:number) => (
            <div key={index} className="border-b border-gray-200 py-2">
              <p className="text-gray-700"><strong>Title:</strong> <span className="underline">{achievement.title}</span></p>
              <p className="text-gray-600"><strong>Description:</strong> <span className="italic">{achievement.description}</span></p>
              <p className="text-gray-600"><strong>Date:</strong> <span className="italic">{achievement.date}</span></p>
              {achievement.img && <img src={achievement.img} alt={achievement.title} className="mt-2 w-full rounded-lg shadow-md" />}
            </div>
          ))}
        </div>
      )}

      {/* Center Data */}
      {data && (
        <div className="border-t border-gray-300 pt-4 bg-gray-200 p-4 rounded-md">
          <h3 className="text-xl font-semibold text-gray-700">Center Data</h3>
          <p className="text-gray-600"><strong>CEO UID:</strong> <span className="italic">{data.CEO}</span></p>
          <p className="text-gray-600"><strong>Admin UID:</strong> <span className="italic">{data.admin}</span></p>
          <p className="text-gray-600"><strong>Sub Admin UID:</strong> <span className="italic">{data.sub_admin}</span></p>
        </div>
      )}
    </div>
  );
};

export default CenterInfo;
