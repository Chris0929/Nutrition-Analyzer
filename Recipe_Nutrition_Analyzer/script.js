function analyzeRecipe() {
  const input = document.getElementById("recipeInput").value;
  const results = document.getElementById("results");

  if (!input.trim()) {
    results.innerHTML = "<p>Please enter a recipe.</p>";
    return;
  }

  // Simulated nutritional values
  const mockData = {
    sodium: 2300,
    protein: 20,
    calories: 450,
    potassium: 700,
    cholesterol: 30,
    sugar: 12,
  };

  results.innerHTML = `
    <p><strong>Sodium:</strong> ${mockData.sodium} mg (96% DV)</p>
    <p><strong>Protein:</strong> ${mockData.protein} g (40% DV)</p>
    <p><strong>Calories:</strong> ${mockData.calories} kcal (23% DV)</p>
    <p><strong>Potassium:</strong> ${mockData.potassium} mg (15% DV)</p>
    <p><strong>Cholesterol:</strong> ${mockData.cholesterol} mg (10% DV)</p>
    <p><strong>Sugar:</strong> ${mockData.sugar} g (24% DV)</p>
  `;
}
