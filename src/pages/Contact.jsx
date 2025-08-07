import "./Contact.css";


const Contact = () => {

 return (
    <>
      <div className="bg-gray-100">
       <div className=" flex justify-center items-center w-full min-h-screen"> 
          <div className=" flex flex-col space-y-6 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
            <div className="flex flex-col space-y-8 justify-between"> 
               <div>
                 <h1 className=" font-bold text-4xl tracking-wide">contact us </h1>
                  <p className="pt-2 text-cyan-100 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, minus.
                    
                  </p>
               </div>
               <div className="flex flex-col space-y-4">
                <div className="inline-flex space-x-2 items-center">
                    <span className="text-cyan-300">contact.jpg</span> 
                   <span> (+91) 8142 6243 12 </span>
                </div>  
                <div className="inline-flex space-x-2 items-center">
                    <span className="text-cyan-300">email.jpg</span> 
                   <span> CarrerCare@gmail.com </span>
                </div>
                  <div className="inline-flex space-x-2 items-center">
                    <span className="text-cyan-300">location.jpg</span> 
                   <span> Lorem ipsum dolor sit. </span>
                </div>
               
               </div>
               <div></div>
            </div> 
            <div></div>  
          </div>
       </div>
      </div>
      
     

    </>
  )
};

export default Contact;
