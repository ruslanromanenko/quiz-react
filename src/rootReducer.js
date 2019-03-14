
const initialState = {
  finished: false,
  userAnswers: [] // { questionId: null, userAnswerId: null }
};

export default function rootReducer(state = initialState, action) {

  switch (action.type) {
    case 'USER_ANSWER':

      const answer = state.userAnswers.find( (answer) => answer.questionId === action.payload.questionId);

      if( answer === undefined ){
        return {...state, userAnswers: [...state.userAnswers, action.payload] };
      }
      const answers = state.userAnswers.map( (answer)=> {
        if(answer.questionId === action.payload.questionId && answer.userAnswerId !== action.payload.userAnswerId){
          answer.userAnswerId = action.payload.userAnswerId;
        }
        return answer
      });
      return { ...state, userAnswers: answers };

    case 'QUIZ_FINISHED':
      if( action.payload.numberQuestion === action.payload.quizLength ){
        return { ...state, finished: true }
      }
      return state;

    case 'QUIZ_RESET':
      return {
        finished: false,
        userAnswers: []
      };

    default:
      return state
  }
}