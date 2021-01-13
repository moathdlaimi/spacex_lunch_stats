import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import './App.css';
import logo from './spaceXlogo.jpg';


const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img src={logo} alt="SpaceXlogo" style={{ width: 300, display: 'block', margin: 'auto' }} />
        <Launches />
      </div>
    </ApolloProvider >
  );
}

export default App;

// WILL COMMENT ALL THIS CODE AND TRY A NEW ONE 

// const rootContainer = document.getElementById('root');

// const fetchData = async () => {
//   const res = await fetch(
//     'http://localhost:5000/graphql',
//     {
//       method: "POST",
//       headers: {
//         "content-type": "application/json"
//       },
//       body: JSON.stringify({
//         query: `
//         {
//           launches{
//             flight_number
//             mission_name
//           }
//         }
//         `
//       })
//     })
//   const { data } = await res.json()
//   return data
// }

// fetchData().then(({ launches }) => {
//   launches.map(launch => {
//     const newData = document.createElement('h1')
//     newData.textContent = launch.launch
//     rootContainer.append(newData)
//   })
// })