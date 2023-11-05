export const useErrorTodo = () => {
  const getErrorText = (error: unknown) => {
    return error instanceof Error ? error.message : String(error);
  };
  const onSetErrorTodo = (error: unknown) => {
    const errorTextDisplay = document.body.querySelector<HTMLElement>(
      ".theme-component__error-text"
    );
    if (errorTextDisplay) {
      errorTextDisplay.dataset.errorText = getErrorText(error);
    }
  };
  return { onSetErrorTodo };
};
