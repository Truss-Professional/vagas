export const goToHomePage = (history) => {
    history.push("/");
};
  
export const goToListPage = (history) => {
    history.push(`/todolist`);
};
  
export const goBack = (history) => {
    history.goBack();
};