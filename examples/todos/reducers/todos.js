const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

const initialState =
[
    {
        id: 1388534400000,
        text: "Hey there!",
        completed: false
    }
]
// const initialState = () => {
//   // return
//       [{
//           id: 1388534400000,
//           text: "Hey there!",
//           completed: false
//       }]
// }

const todos = (state = initialState, action) => {
// const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
