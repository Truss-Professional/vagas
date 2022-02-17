export const goToHome = (history) => {
    history.push("/")
}

export const goToTodoList = (history) => {
    history.push("/todolist")
}

export const goBack = (history) => {
    history.goBack()
}
