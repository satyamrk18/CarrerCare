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
               <div className="flex space-x-4 text-lg">
                <a href="#"><span>F</span></a>
                <a href="#"><span>I</span></a>
                <a href="#"><span>T</span></a>
                <a href="#"><span>L</span></a>
               </div>
            </div> 
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8  text-gray-600">
               <form action="flex flex-col space-y-6">

                <div>
                  <label htmlFor="" className="text-sm">your name</label>
                </div>
                <div>
                  <input type="text" placeholder="your name" className="ring-1 ring-gray-300 w-full
                   rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 " />
                </div>
                 <div>
                  <label htmlFor="" className="text-sm">Email address</label>
                </div>
                <div>
                  <input type="text" placeholder="Email adress" className="ring-1 ring-gray-300 w-full
                   rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 " />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">Message</label>
                </div>
                <div>
                  <textarea placeholder="Message" rows={4} className="ring-1 ring-gray-300 w-full
                   rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 " />
                  
                </div>
               </form>
              </div>
            </div>  
          </div>
       </div>
      </div>
      
     

    </>
  )
};

export default Contact;
