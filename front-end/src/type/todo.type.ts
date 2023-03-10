export type Todo = {
  id: string;
  content: string;
  title: string;
  createdAt: string;
  updatedAt: string;
};

export type TodoId = {
  todoId: string;
};

export type FormType = {
  component?: () => JSX.Element;
};
