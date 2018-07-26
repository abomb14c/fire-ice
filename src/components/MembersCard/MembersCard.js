import React from 'react';
import { connect } from 'react-redux';

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

export const mapStateToProps = state => ({
  members: state.members
});

export default connect(mapStateToProps, null)(MembersCard);