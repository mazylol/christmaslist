import prisma from "@/utils/prisma";
import Todo from "@/app/todo";

export default async function Home() {
  const todos = await prisma.todo.findMany();
  return (
    <main>
      <h1 className="font-bold">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id}></Todo>
        ))}
      </ul>
    </main>
  );
}