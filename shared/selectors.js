export const loadingSelector = (loadingStateTree, key) =>
     loadingStateTree[key] || false;
export const errorSelector = (errorStateTree, key) => errorStateTree[key] || "";
export const successSelector = (successStateTree, key) =>
     successStateTree[key] || false;
