import React, { useEffect, useState } from 'react';

const client = require('@sanity/client')({
  projectId: 'g5pmhiyp',
  dataset: 'production',
  useCdn: true
});


const App = () => {
  const [ data, setData ] = useState({});

  useEffect(state => {
    client.fetch(`*[_type == "class"]`)
      .then(data => setData({ data }))
      .catch(err => console.error(err));
  });

  console.log(data);
  return (
    <div className="App">
      <h2>This is a test page</h2>
    </div>
  );
}

export default App;
