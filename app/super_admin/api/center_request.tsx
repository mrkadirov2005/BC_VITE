import { parseCookies } from "nookies"


// / request to get all centers data
const cookies=parseCookies()
const token=cookies.super_admin_token?cookies.super_admin_token:"undefined";
// verify suoer admin
export interface SuperAdminResponse {
    sendable_data: {
        name: string,
        username: string,
        signedIn: string
    },
    token: string
}

export const sample:SuperAdminResponse={
    sendable_data:{
      name:"Muzaffar",
      username:"mr_kadirov",
      signedIn:"false",
    },
    token:""
  }







interface PROPS{
    setStatus:React.Dispatch<React.SetStateAction<number>>,
    setData:React.Dispatch<React.SetStateAction<Data[]>>

}

export interface CONTACT{
    email:string,
    phone_num:string,
    address:string,
    website:string

}
export interface DATA{
    CEO:string,
    sub_admin:string,
    admin:string
}
export interface Data {
	_id: string;
	UID: string;
	contact: CONTACT;
	name: string;
    data:DATA
}
export const SAMPLE_CENTER:Data[]=[
    {
        _id:"loading",
        UID:"fdsfds",
        contact:{
            address:"loading",
            email:"loading",
            phone_num:"loading",
            website:"loading"
        },
        data:{
            admin:"loading",
            CEO:"loading",
            sub_admin:"loading"
        },
        name:"loading"

    }
]
 export const getCentersData = async ({setStatus,setData}:PROPS) => {
    try {
         const response=await fetch("http://localhost:7000/super_admin/get_centers", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
        
            body: JSON.stringify({ token}),
        })
            .then((item) => item.json())
            .then((item) => item);
        if(response.message){

            setStatus(0);
            alert(` ${JSON.stringify(response)}`)
        }else if(!response.message){

            setData(response);
            setStatus(1)
        }
            

    } catch (error) {
        alert(error)
    }
};


interface deleteCenter{
    selectedCenter:string | undefined;
}
export const deleteCenterRequest=async({selectedCenter}:deleteCenter)=>{
    try {
        const response=await fetch("http://localhost:7000/super_admin/delete_center",{
            method:"DELETE",
            headers:{
                "Content-type":"application/json",
            
            },
            body:JSON.stringify({token,UID:selectedCenter})
        
        }).then(item=>item.json()).then(item=>item)
        alert(response.message)
    } catch (error) {
        alert(error)
    }
}

// add center
export interface Center{
        token: string | null;
        name: string;
        contact: {
            phone_num: number;
            email: string;
            address: string;
            website: string;
        };
    }

interface AddCenter{
    formData:Center,
    setResponseFB:React.Dispatch<React.SetStateAction<string | undefined>>
}
export const handleSubmit = async ({formData,setResponseFB}:AddCenter) => {


    try {
      const response = await fetch("http://localhost:7000/super_admin/add_center", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(formData)
      }).then(item=>item.json()).then(item=>item);


      
      setResponseFB(response.message)   
      console.log(response)  
    } catch (error) {
      setResponseFB("An error occurred. Please try again.");
      console.log(error)
    }
    
  };



//   ADMIN INTERFACE
export interface AdminInterface{
    _id:string,
    firstname: string,
    lastname: string,
    username: string,
    age:number,
    email:string,
    address: string,
    password:string,
    loggedIn:boolean,
    phone_number:number,
    center_id:string,
    vip_id:string
}




// get VIPS data
// Fetch VIPs data from the server
export interface VIP_SCOPE {
	_id: string;
	firstname: string;
	lastname: string;
	username: string;
	age: number;
	email: string;
	address: string;
	password: string;
	loggedIn: boolean;
	phone_number: number;
	center_id: string;
	__v: number;
}
export const VIP_SCOPE_ITEM_SAMPLE:VIP_SCOPE={
    _id: "fsdds",
firstname: "string",
lastname: "string",
username: "string",
age: 45,
email: "string",
address: "string",
password: "string",
loggedIn: false,
phone_number: 1546551,
center_id: "string",
__v: 15 
}
export const VIP_SCOPE_SAMPLE:VIP_SCOPE[]=[
    {
    	_id: "fsdds",
	firstname: "string",
	lastname: "string",
	username: "string",
	age: 45,
	email: "string",
	address: "string",
	password: "string",
	loggedIn: false,
	phone_number: 1546551,
	center_id: "string",
	__v: 15 
    }
]
export interface single_VIP_SCOPE{
    data:[{
    
      _id: string,
    firstname: string,
    lastname: string,
    username: string,
    age: number,
    email: string,
    address: string,
    password: string,
    loggedIn: boolean,
    phone_number: number,
    center_id: string,
    __v: number
    }]
      
    }

export interface GETVIPSPROPS{
    setMessage:React.Dispatch<React.SetStateAction<string | undefined>>,
    setVIPsData:React.Dispatch<React.SetStateAction<VIP_SCOPE[]>>,
    setStatus:React.Dispatch<React.SetStateAction<number>>
}





export const getVIPSData = async ({setMessage,setVIPsData,setStatus}:GETVIPSPROPS) => {
    try {
        const response = await fetch("http://localhost:7000/super_admin/get_vips", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ token }),
        });

        if (response.ok) {
            setMessage("Data fetched successfully!");
        } else {
            setMessage("Failed to fetch data.");
        }

        const items = await response.json();
        setVIPsData(items);
        setStatus(1);
    } catch (error) {
            setMessage("Something went wrong. Please try again later."+error)
    
    }
};


// add admin get vips data
export interface FormData {
    firstname: string;
    lastname: string;
    username: string;
    age: number;
    email: string;
    address: string;
    password: string;
    phone_number: string;
    center_id: string;
    vip_id: string;
    loggedIn?: boolean;
    token?:string
  };


export interface submitAddminInterface{
    setMessage: React.Dispatch<React.SetStateAction<string | undefined>>
    formData:FormData
};

export const handleSubmitAddAdmin = async ({formData,setMessage}:submitAddminInterface) => {
    console.log(formData)
    formData.token=token as string;
    try {
      const response = await fetch('http://localhost:7000/super_admin/add_admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then(item=>item.json()).then(item=>item);

      setMessage(response.message)
    } catch (error) {
      setMessage('An unexpected error occurred: '+error);
    }
  };


//   get_admins Data
export interface ADMININTERFACE{
    _id:string,
    firstname:string,
    lastname: string, 
    username: string,
    age:number,
    email:string,
    address: string,
    password:string,
    loggedIn:boolean,
    phone_number:number,
    center_id:string,
    vip_id:string
}
export interface getAdminsInterface{
    setMessage: React.Dispatch<React.SetStateAction<string | undefined>>,
    setAdminsData: React.Dispatch<React.SetStateAction<AdminInterface[]>>,
    setStatus:React.Dispatch<React.SetStateAction<number>>
};

export const getAdminsData=async({setMessage,setAdminsData,setStatus}:getAdminsInterface)=>{
    try {
        const adminsDataFromBackend=await fetch("http://localhost:7000/super_admin/get_admins",
            {method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({token})
            }
        ).then(admin=>admin.json()).then(admin=>admin);

        if(adminsDataFromBackend.data.length>0){
        setAdminsData(adminsDataFromBackend.data)
        setStatus(1)}
        else{
            setStatus(0)
            setMessage("No admins Found")
        }


    } catch (error) {
        setMessage("Error occured: "+error)
    }
}


interface DeleteAdminPROPS{
    setMessage: React.Dispatch<React.SetStateAction<string | undefined>>,
    setAdminsData: React.Dispatch<React.SetStateAction<AdminInterface[]>>,
    id:string,
}
export const handleDeleteAdmin=async({setMessage,setAdminsData,id}:DeleteAdminPROPS)=>{
    try {
        const response=await fetch("http://localhost:7000/super_admin/delete_admin",
            {method:"DELETE",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({token:parseCookies().super_admin_token,_id:id})
            }
        ).then(item=>item.json()).then(item=>item);
        if(response.statusCode!==200){
            setMessage("Error occured")
        }
        if(response.statusCode==200){
            setMessage(response.message)
            
            setAdminsData(response.data)
        }
    } catch (error) {
     setMessage("Error occured"+error)   
    }

}




interface PROPSOfAdmin{
    setSingleAdminData: React.Dispatch<React.SetStateAction<AdminInterface | undefined>>,
    id:string
}

export const getSingleAdminData=async({setSingleAdminData,id}:PROPSOfAdmin )=>{

    try {
        

        const response=await fetch("http://localhost:7000/super_admin/single_admin",{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                "authorization":JSON.stringify(token),
                "_id":`${id}`
            }
        }).then(item=>item.json()).then(item=>item)
        setSingleAdminData(response.data?response.data:"")
    } catch (error) {
        console.log(error)
    }

    


}

// GROUPS_assets
export interface GROUP_INTERFACE{
    _id?:string,
    name:string,
    uid:string,
    center_id:string,
    teacher_id:string,
    members:number,
    date:string,
    description:string,
}
export const GROUP_INTERFACE_SAMPLE:GROUP_INTERFACE[]=[
{
    _id:"loading",
name:"loading",
uid:"loading",
center_id:"loading",
teacher_id:"loading",
members:0,
date:`${Date()}`,
description:"loading..."
}]
export interface getGroupProps{
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    setStatus:React.Dispatch<React.SetStateAction<number>>,
    setGroupsData:React.Dispatch<React.SetStateAction<GROUP_INTERFACE[]>>,
}
export const getGroups=async({setMessage,setStatus,setGroupsData}:getGroupProps)=>{

    try {
        const response=await fetch("http://localhost:7000/super_admin/get_groups",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                "authorization":JSON.stringify(token)
                
            }
        }).then(item=>item.json()).then(item=>item).catch(err=>setMessage(err));
        
        setMessage(response.message);
        setGroupsData(response.data);
        setStatus(1)
    } catch (error) {
        setMessage("Error occured:"+error);
    }
}

// add_group
interface AddGroupInterface{
    setStatus:React.Dispatch<React.SetStateAction<number>>,
    setMessage:React.Dispatch<React.SetStateAction<string>>,
    formData:object
}
export const add_group_super_admin=async({setStatus,setMessage,formData}:AddGroupInterface)=>{
    
    try {
        const response=await fetch("http://localhost:7000/super_admin/add_group",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                "authorization":JSON.stringify(token)
            },
            body:JSON.stringify(formData)
        })
        const res=await response.json()
        if(response.status==200 ){
            setMessage(res.message)
        }else{
            setMessage(res.message)
        }
    } catch (error) {
        setMessage(`${error}`)
    }
}

// delete group


export const delete_group=async(_id:string,setMessage:React.Dispatch<React.SetStateAction<string>>)=>{
    console.log(_id)
    try {
        const response=await fetch("http://localhost:7000/super_admin/delete_group",{
            method:"DELETE",
            headers:{
                "Content-type":"application/json",
                "authorization":JSON.stringify(parseCookies().super_admin_token)
            },
            body:JSON.stringify({_id})
        });
        console.log("response",response)
        const res=await response.json()
        if(response.status==200){

            setMessage(res.message)
        }
        else{
            setMessage(res.message?res.message:response.statusText)
        }

    } catch (error) {
        setMessage(`Error is: ${error}`)
    }
}

// Teachers page interface



export interface TEACHERINTERFACE{
    
    firstname: string, 
    lastname:string,
    username:string,
    email:string,
    address:string,
    password:string,
    phone_number:string,
    subject:string,
}
interface interfaceOfAddTeacher{
    formData:TEACHERINTERFACE,
    setMessage:React.Dispatch<React.SetStateAction<string>>,
    setTeachersData:React.Dispatch<React.SetStateAction<IncomingTeachersData[]>>,
    setStatus:React.Dispatch<React.SetStateAction<number>>

}
export const SuperAdminAddTeacher=async({formData,setMessage,setTeachersData,setStatus}:interfaceOfAddTeacher)=>{

try {
    const response = await fetch('http://localhost:7000/super_admin/add_teacher', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization":JSON.stringify(token)
        },
        body: JSON.stringify(
                formData
        )
    }).then(item=>item.json()).then(item=>item);
    
    setMessage(response.message as string)
    setTeachersData(response.data as IncomingTeachersData[])
    setStatus(1)

    
    
} catch (error) {
    setMessage(`Error occured: ${error}`);
    setStatus(1)
}

}

// getTeachersRouteProps
interface GetTeachersProps{
    setMessage:React.Dispatch<React.SetStateAction<string>>,
    setStatus:React.Dispatch<React.SetStateAction<number>>,
    setTeachersData:React.Dispatch<React.SetStateAction<IncomingTeachersData[]>>,
}

export interface IncomingTeachersData{
    _id:string,
    firstname: string, 
    lastname:string,
    username:string,
    email:string,
    address:string,
    password:string,
    phone_number:string,
    subject:string,
}

export const INCOMING_TEACHERS_SAMPLE_DATA=
[{
    _id:"loading",
    firstname: "loading", 
    lastname:"loading",
    username:"loading",
    email:"loading",
    address:"loading",
    password:"loading",
    phone_number:"loading",
    subject:"loading",
}]
export const getTeachers=async({setMessage,setStatus,setTeachersData}:GetTeachersProps)=>{

    try {
        const response=await fetch('http://localhost:7000/super_admin/get_teachers',{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                "authorization":JSON.stringify(token)
            }
        }).then(item=>item.json()).then(item=>item);
        setMessage(response.message);
        setStatus(1)
        setTeachersData(response.data?response.data:[])
    } catch (error) {
        setMessage("Error occured: "+error)
    }
}

// PROPS for deleting the teacher
interface DeleteTeacherProps{
    setMessage:React.Dispatch<React.SetStateAction<string>>,
    setStatus:React.Dispatch<React.SetStateAction<number>>,
    setTeachersData:React.Dispatch<React.SetStateAction<IncomingTeachersData[]>>,
    _id:string
}
export const deleteTeacher=async({setMessage,setStatus,setTeachersData,_id}:DeleteTeacherProps)=>{
try{
    const response=await fetch("http://localhost:7000/super_admin/delete_teacher",{
        method:"DELETE",
        headers:{
            "Content-type":"application/json",
            "authorization":JSON.stringify(token)
        },
        body:JSON.stringify({_id})
    }).then(res=>res.json()).then(res=>res);
    setMessage(response.message as string);
    setTeachersData(response.data as IncomingTeachersData[]);
    setStatus(1);

}catch(error){
    setMessage(`${error}`)

}
    
}

// student interfaces
export interface STUDENT_INCOMING_INTERFACE{
    _id:string,
    firstname:string,
    lastname:string,
    username:string,
    email:string,
    address: string,
    password:string,
    loggedIn:boolean,
    phone_number:number,
    group_id:string,
    rank:object[]
}
export const STUDENTS_INCOMING_SAMPLE:STUDENT_INCOMING_INTERFACE[]=[{
    _id:"example",
    firstname:"example",
    lastname:"example",
    username:"example",
    email:"example",
    address:"example",
    password:"example",
    loggedIn:false,
    phone_number:461586162,
    group_id:"example",
    rank:[]

}]


export const add_student=async(formData:object,setMessage:React.Dispatch<React.SetStateAction<string>>)=>{

    try {
        const response=await fetch("http://localhost:7000/super_admin/add_student",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                "authorization":JSON.stringify(parseCookies().super_admin_token)
            },
            body:JSON.stringify(formData)
        });
        
        
        const res=await response.json();
        setMessage(`${res.message?res.message:res}`)
    } catch (error) {
        
    }
}

interface getStudentProps{
    setMessage:React.Dispatch<React.SetStateAction<string>>,
    setStatus:React.Dispatch<React.SetStateAction<number>>,
    setStudentsData:React.Dispatch<React.SetStateAction<STUDENT_INCOMING_INTERFACE[]>>,
    
}
export const getAllStudents=async({setMessage,setStatus,setStudentsData}:getStudentProps)=>{
    try {
        const response=await fetch("http://localhost:7000/super_admin/get_students",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                "authorization":JSON.stringify(parseCookies().super_admin_token)
            }
        });
        const jsonified=await response.json()
        if(response.status==200){
            setStudentsData(jsonified.data)
        }
        setStatus(1)
        setMessage(jsonified.message)
    } catch (error) {
        setMessage(`Error occured: ${error}`)
    }
}

export const delete_student = async (_id: string, setMessage: React.Dispatch<React.SetStateAction<string>>) => {
    try {
        const token = parseCookies().super_admin_token;
        if (!token) {
            return setMessage("No authorization token found.");
        }

        const response = await fetch("http://localhost:7000/super_admin/delete_student", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}` // Use Bearer token for better clarity
            },
            body: JSON.stringify({ _id })
        });

        // Parse the response JSON only if response is of type JSON
        const contentType = response.headers.get("Content-Type");
        let jsonified;
        if (contentType && contentType.includes("application/json")) {
            jsonified = await response.json();
        }

        if (response.ok) {
            setMessage("Successfully deleted.");
        } else if (response.status === 404) {
            setMessage("Student entry not found.");
        } else {
            setMessage(jsonified?.message || "Unknown error occurred.");
        }
    } catch (error) {
        setMessage("Deletion unsuccessful. Error: " + error);
    }
};
