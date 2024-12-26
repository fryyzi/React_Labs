// App.jsx
import useStepper from "./components/Hooks/useStepper";

function App() {
  const { currentStep, nextStep, prevStep, resetStep } = useStepper(0, 5);  // Початковий крок: 0, кількість кроків: 5

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Кроковий процес</h1>
      <h2>Теперішній крок: {currentStep + 1}</h2> {/* Виводимо кроки з 1 */}
      
      <div>
        {currentStep === 0 && <div>Крок 1: Введення даних</div>}
        {currentStep === 1 && <div>Крок 2: Перегляд даних</div>}
        {currentStep === 2 && <div>Крок 3: Підтвердження</div>}
        {currentStep === 3 && <div>Крок 4: Перевірка</div>}
        {currentStep === 4 && <div>Крок 5: Завершення</div>}
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <button onClick={prevStep} disabled={currentStep === 0}>Попередній</button>
        <button onClick={nextStep} disabled={currentStep === 4}>Наступний</button>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <button onClick={resetStep}>Скинути</button>
      </div>
    </div>
  );
}

export default App;
