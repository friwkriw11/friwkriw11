import React from 'react'

class SettingsModel extends React.Component {

    Data = {


        aviableWorkouts:[
            { id: 1,  name: 'Taekwondo' , price:106 }, 
            { id: 2,  name: 'Crossfit' , price:1900  }, 
            { id: 3,  name: 'Tennis' , price:200 }, 
            { id: 4,  name: 'Mesculation' , price:200 }, 
            { id: 5,  name: 'Soccer' , price:100 }, 
            { id: 7,  name: 'Aerobics' , price:100 }, 
            { id: 8,  name: 'Basketball' , price:100 }, 
            { id: 9,  name: 'Volleyball' , price:100 }, 
          

        ],


        additionalFeatures:[
            { id: 1,  name: 'spa' , price:106 }, 
            { id: 2,  name: 'sauna' , price:1900 }, 
        
        ],

        plans:[

            {   id:1,
                name:'golden plan',
                price: 5000,
                workouts:[
                    {workout_id:1},
                    {workout_id:2},
                    {workout_id:3},
                ],
               
            },

            {   id:2,
                name:'selver plan',
                price: 8000,
                workouts:[
                    {workout_id:1},
                    {workout_id:4},
                    {workout_id:3},
                ],
               
            }
        ]

    };


    render() {
        return null;
    }
}
export default SettingsModel