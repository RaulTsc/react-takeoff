# REDUX

Need to deep dive more..dont have a good understanding of it & I encounter it everywhere..

## `redux-thunk`

* A thunk is another word for a function. But it’s not just any old function. It’s a special (and uncommon) name for a function that’s returned by another.
Like this:

```javascript
function not_a_thunk() {
	// this one is a "thunk" because it defers work for later:
	return function() {
		console.log('do stuff now')
	}
}
```
* Redux concepts: actions, action creators, reducers, middleware.

* Actions are just objects – and they are expected to only be objects.

* redux-thunk: it is a middleware that looks at every action that passes through the system, and if it’s a function, it calls that function. That’s all it does.

* Redux will pass two arguments to thunk functions: dispatch, so that they can dispatch new actions if they need to; and getState, so they can access the current state. So you can do things like this:

  ```javascript

  function userLoggedIn() {
	   return {
    		type: "USER_LOGGED_IN",
    		username: "dave"
	   };
  }


  function logOutUser() {
    return function(dispatch, getState) {
      return axios.post('/logout').then(function() {
    // pretend we declared an action creator
    // called 'userLoggedOut', and now we can dispatch it
      dispatch(userLoggedOut());
  });
}
}
  ```

```javascript
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

dispatch(addTodo(text))

//or create a bound action creator that automatically dispatches

const boundAddTodo = text => dispatch(addTodo(text))
```
## Reducers
