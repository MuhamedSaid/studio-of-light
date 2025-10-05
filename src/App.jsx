function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Tailwind v3 Test ✓
        </h1>
        <p className="text-gray-600 mb-6">
          If you see this styled card with gradients and shadows, Tailwind is
          working perfectly!
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
