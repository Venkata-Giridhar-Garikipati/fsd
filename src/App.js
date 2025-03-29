
import './App.css';

function App() {
  const data = [
    { id: 1, name: 'Venkata Giridhar', age: 20 },
    { id: 2, name: 'Hemanth', age: 20 },
    { id: 3, name: 'Vinay', age: 20 },
    { id: 4, name: 'Yaswanth', age: 20 ,color: 'yellow'}, 
  ];
  return (
    <div className="App">
      <table border="1" align="center">
        <caption>Data Table</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item) => (
          <tr key={item.id}
           id={item.color} style={{ backgroundColor: item.color }}>
               <td id="yellow">{item.id}</td>
               <td id="yellow" >{item.name}</td>
               <td id ="yellow">{item.age}</td>
            
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
