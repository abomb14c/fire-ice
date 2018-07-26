import React, {Component} from 'react';
import MembersCard from '../MembersCard/MembersCard';

class Card extends Component {
  constructor(props){
    super(props);

    this.state= {
      members:[]
    };
  }

 fetchMembers = async () => {
   const members = this.props.swornMembers.map( async member => {
     const response = await fetch(member);
     const memberData = await response.json();
     return memberData;
   });
   const allMembers = await Promise.all(members);
   this.setState({members:allMembers});
 };




 render(){
   return (
     <div className="Card" onClick={this.fetchMembers}>
       <h1>{this.props.name}</h1>
       <h3>{this.props.founded}</h3>
       <h3>{this.props.seats}</h3>
       <h3>{this.props.titles}</h3>
       <h3>{this.props.coatOfArms}</h3>
       <h3>{this.props.ancestralWeapons}</h3>
       <h3>{this.props.words}</h3>
       <div>
         <h3>House Members</h3>
         <MembersCard members={this.state.members} /> 
       </div>
     </div>
  
   );
 }
}

export default Card; 