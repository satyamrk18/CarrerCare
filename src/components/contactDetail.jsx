import { Mail, Phone, MapPinHouse } from "lucide-react";
const Contact = ({email,phone,address}) => 
    {
        return(
            <div>
                 <ul>
                <li style={{width:"100%",display:"flex",alignItems:"center", gap:"5px"}}>
                  <Mail size={15} color="purple" />
                  {email}
                </li>
                <li style={{width:"100%",display:"flex",alignItems:"center", gap:"5px"}}>
                  <Phone size={15} color="purple" />
                  {`+91${phone}`}
                </li>
                <li style={{width:"100%",display:"flex",alignItems:"center", gap:"5px"}}>
                  <MapPinHouse size={18} color="purple" />
                  {address}
                </li>
              </ul>
            </div>
        )
    };
    export default Contact;
