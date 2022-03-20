import { PREV } from '../constants/constants';

export const evaluateNextStep = (jumps, currentStep, questions) => {
    let nextStep = currentStep + 1;
    jumps.forEach((jump) => {
        let met = false;
        for (let i in jump.conditions) {
        const condition = jump.conditions[i];
        const question = questions.find((question) => question.identifier === condition.field);
        if (condition.value !== question.answer) {
            break;
        } else {
            met = true;
        }
        }
        if (met) {
            const index = questions.findIndex(q => { 
                return q.identifier === jump.destination.id
            });
            nextStep = index;
        }
    });
    return nextStep;
}

export const handleNavigation = (direction, questions, currentStep, setCurrentStep) => {
    const currentQuestion = questions?.[currentStep]
    if (direction === PREV) {
        setCurrentStep(currentStep - 1);
    } else {
        if (currentQuestion.jumps.length) {
        const nextStep = evaluateNextStep(currentQuestion.jumps, currentStep, questions);
        setCurrentStep(nextStep);
        } else {
        setCurrentStep(currentStep + 1);
        }
    }
}