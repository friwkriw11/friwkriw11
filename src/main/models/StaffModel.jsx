import React from 'react'

class StaffModel extends React.Component {

    Data = {

        staffs: [
            { id: 1, serial_number:'G-467890', last_name: 'John', first_name: 'Doe', role_id: 1, image: 'john.jpg' , gender:"Male" ,id_card_number: "A0000", date_of_birth: "1999-07-19" , phone_number:"+212 6 12 34 56 78",email:"soufiane@gmail.com", home_address:"Hay essalam N°600",date_joined:"2020-07-20" ,nssf_id_number:"2342999",password:"1235SH",status:"admin",image:"", date_created: "2023-09-06" },
            { id: 2, serial_number:'G-467891', last_name: 'Jane' , first_name: 'Smith', role_id: 3, image: 'jane.jpg' , gender:"Female" ,id_card_number: "A0001", date_of_birth: "1995-12-10" , phone_number:"+212 6 98 76 54 32",email:"jane@example.com", home_address:"Hay Riad N°123",date_joined:"2021-03-15" ,nssf_id_number:"9876543",password:"pass123",status:"admin",image:"", date_created: "2023-09-06" },
            { id: 3, serial_number:'G-467892', last_name: 'Robert' , first_name: 'Johnson', role_id:1, image: 'robert.jpg' , gender:"Male" ,id_card_number: "A0002", date_of_birth: "1988-06-25" , phone_number:"+212 6 55 44 33 22",email:"robert@example.com", home_address:"Hay Nahda N°789",date_joined:"2019-01-01" ,nssf_id_number:"4567890",password:"password123",status:"crew member",image:"", date_created: "2023-09-06" },
            { id: 4, serial_number:'G-467893', last_name: 'Emily ' , first_name: 'Johnson', role_id: 3, image: 'emily.jpg' , gender:"Female" ,id_card_number: "A0003", date_of_birth: "1990-09-15" , phone_number:"+212 6 11 22 33 44",email:"emily@example.com", home_address:"Hay Al Irfane N°456",date_joined:"2018-05-10" ,nssf_id_number:"9876543",password:"emily123",status:"crew member",image:"", date_created: "2023-09-06" },
        
        ],

        roles:[
            { id: 1,  role_name: 'Manager'}, 
            { id: 2,  role_name: 'developer'}, 
            { id: 3,  role_name: 'Cleaner'}, 
            { id: 4,  role_name: 'Coach'}, 

        ]

    };


    render() {
        return null;
    }
}
export default StaffModel