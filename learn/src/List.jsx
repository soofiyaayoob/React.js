function List() {
    const fruits = [
      { id: 1, name: "apple", calories: 95 },
      { id: 2, name: "orange", calories: 62 },
      { id: 3, name: "banana", calories: 105 },
      { id: 4, name: "jackfruit", calories: 157 },
      { id: 5, name: "coconut", calories: 354 },
    ];
  

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); // Numerical order
    // fruits.sort((a, b) => b.calories - a.calories); // Reverse numerical
  
    // Filtering
    const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
    const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100); // ✅ Fixed condition
  
    // Mapping 
    const fruitList = fruits.map((fruit) => (
      <li key={fruit.id}>
        {fruit.name}: &nbsp;
        {fruit.calories} calories
      </li>
    ));
  
    const lowCalList = lowCalFruits.map((fruit) => (
      <li key={fruit.id}>
        {fruit.name}: &nbsp;
        {fruit.calories} calories
      </li>
    ));
  
    const highCalList = highCalFruits.map((fruit) => (
      <li key={fruit.id}>
        {fruit.name}: &nbsp;
        {fruit.calories} calories
      </li>
    ));
  
    return (
      <div>
        <h2>All Fruits</h2>
        <ul>{fruitList}</ul>
  
        <h2>Low-Calorie Fruits (Under 100 Calories)</h2>
        <ul>{lowCalList}</ul>
  
        <h2>High-Calorie Fruits (100 Calories & Above)</h2>
        <ul>{highCalList}</ul>
      </div>
    );
  }
  
  export default List;
  