import React from 'react';
import CardComponentstext from "./CardComponentstext";

export default class CardWithtext extends React.Component{

    render(){
        this.state ={
            carddata :[
                {
                id : 0,
                 title : "Card Title",
                 discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
                 buttonvalue:"Learn More",
                 hasImage:false
                },
                {
                    id : 1,
                    title : "Card Title",
                    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
                    buttonvalue:"Learn More",
                    hasImage:false
                },
                {
                    id : 2,
                    title : "Card Title",
                    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
                    buttonvalue:"Learn More",
                    hasImage:false
                },
                {
                    id : 3,
                    title : "Project One",
                    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
                    buttonvalue:"Learn More",
                    hasImage:true
                },
                {
                    id : 4,
                    title : "Project Two",
                    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
                    buttonvalue:"Learn More",
                    hasImage:true
                },
                {
                    id : 5,
                    title : "Project Three",
                    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
                    buttonvalue:"Learn More",
                    hasImage:true
                },
                {
                    id : 6,
                    title : "Project Four",
                    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
                    buttonvalue:"Learn More",
                    hasImage:true
                },
                {
                    id : 7,
                    title : "Project Five",
                    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
                    buttonvalue:"Learn More",
                    hasImage:true
                },
                {
                    id : 8,
                    title : "Project Six",
                    discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
                    buttonvalue:"Learn More",
                    hasImage:true
                }

            ]

        };

        return(
            <div>


                <div className="container">
                    <h1 className="my-4">Welcome to Modern Business</h1>

                    <div className="row">

                        {this.state.carddata.map((data,index ) => {
                            return <CardComponentstext hasImage={data.hasImage} CardTitle={data.title}
                                                     CardDiscription={data.discription} buttonvalue={data.buttonvalue}/>
                            })
                        }
                    </div>



                </div>
            </div>

        );
    }

}