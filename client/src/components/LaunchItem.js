import React from 'react';

// export default function LaunchItem(props) {
//   console.log(props.launch)
//   return (
//     <div>
//       test
//     </div>
//   );
// }

export default function LaunchItem({ launch: { flight_number, mission_name, launch_date_local, launch_success } }) {
  // console.log(flight_number)
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>Mission: {mission_name} </h4>
          <p>Date: {launch_date_local} </p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary">Launch Detail</button>
        </div>

      </div>
    </div>
  );
}


