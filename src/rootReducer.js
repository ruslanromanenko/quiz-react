import cloneDeep from "lodash.clonedeep";
import * as dataQuiz from '../src/initialQuiz';
const initialQuiz = dataQuiz.default;

const initialState = {
  finished: false,
  quiz: cloneDeep(initialQuiz)
};

export default function rootReducer(state = initialState, action) {

  switch (action.type) {
    case 'USER_ANSWER':
      const quiz = state.quiz.map( ( question, index ) => {
        if(action.payload.indexActiveQuestion === index){
          const uzerAnswer = question.answers.find( (answer) => {
            return answer.id === action.payload.idUserAnswer ? true : false
          });
          question.idUserAnswer = action.payload.idUserAnswer;
          question.valueUserAnswer = uzerAnswer.text
        }
        return question
      });
      return Object.assign( {}, state, {quiz: quiz } );

    case 'QUIZ_FINISHED':
      if(action.indexActiveQuestion === state.quiz.length){
        return {
          ...state, finished: true
        }
      }
      return state;

    case 'QUIZ_RESET':
    return {
      finished: false,
      quiz: cloneDeep(initialQuiz)
    };
    default:
      return state
  }
}