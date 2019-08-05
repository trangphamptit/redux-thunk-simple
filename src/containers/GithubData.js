import React from "react";
import { connect } from "react-redux";

function GithubData({ data }) {
   if (!data) {
      return <div>no data</div>;
   }
   return (
      <div>
         <div>{data.name}</div>
         <div>{data.company}</div>
         <div>{data.location}</div>
      </div>
   );
}
const mapStateToProps = state => {
   return {
      data: state.data
   };
};
export default connect(
   mapStateToProps,
   null
)(GithubData);
