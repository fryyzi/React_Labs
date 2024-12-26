// useStepper.js
import { useState } from 'react';

function useStepper(initialStep = 0, totalSteps = 3) {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetStep = () => {
    setCurrentStep(0);
  };

  return {
    currentStep,
    nextStep,
    prevStep,
    resetStep,
  };
}

export default useStepper;
