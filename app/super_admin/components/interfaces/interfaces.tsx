// interfaces.ts

export interface Contact {
    phone_num: number;
    email: string;
    address: string;
    website?: string;
  }
  
  export interface Teacher {
    name: string;
    // Add more fields if necessary
  }
  
  export interface About {
    teachers_data: Teacher[];
    student_n: number;
  }
  
  export interface Course {
    subject: string;
    teachers: string[]; // Array of teacher names
    payment: number;
    duration: string;
  }
  
  export interface Event {
    title: string;
    img: string; // URL to the image
    description: string;
    date: string; // ISO date string
  }
  
  export interface History {
    month: string;
    status: string;
    date: string;
  }
  
  export interface Pay {
    plan: string;
    status: "fulfilled" | "waiting";
    date: string; // ISO date string
    history: History[];
  }
  
  export interface Achievement {
    title: string;
    description: string;
    date: string; // ISO date string
    img: string; // URL to the image
  }
  
  export interface Data {
    CEO: number;
    admin: number;
    sub_admin: number;
  }
  
  export interface CenterInput {
    name: string;
    contact: Contact;
    
  }
  