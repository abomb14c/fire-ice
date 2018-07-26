import React from 'react';

const MembersCard = (props) => {
  console.log(props);

  const displayMembers = props.members.map(member => {
    return (
      <div>
        <h5>{member.name}</h5>
      </div>
    );
  });
  return (
    <div>
      {displayMembers}
    </div>
  );
};

export default MembersCard;