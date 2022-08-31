// Is the var keyword dead in ES6?

// Mathias Bynens
//1. Use const by default
//2. Use let only if rebinding is needed.
//3. Var should not be used in ES6

// Kyle Simpson
//1. Use var for top-level variables that are shared across many larger scopes
//2. Use let for localized variables in smaller scopes.
//3. Refactor let to const only after some code has to be witten,
// and you're resonably sure that you've got a case where there shouldn't be variable reassignment.
