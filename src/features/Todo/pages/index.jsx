import React, { useState } from "react";
import TodoList from "../compoments/TodoList";

TodoFeature.propTypes = {};

function TodoFeature() {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "code",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState("all");

  // function obj: cập nhập status phần tử thứ index của mảng
  const handleTodoClick = (todo, index) => {
    // copy mang to do list
    const newTodoList = [...todoList];

    // cập nhập to do được chọn
    newTodoList[index] = {
      // copy những field không modified của object to do ở vị trí thứ index
      // tìm hiểu spread operator của object và arr
      ...newTodoList[index],

      // cập nhập field status (được modified nên spread operator k copy)
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };

    // cập nhập new to do ở vị trí thứ index
    // newTodoList[index] = newtodo;

    // set state là to do mới
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilteredStatus("all");
  };

  const handleShowCompletedClick = () => {
    setFilteredStatus("completed");
  };

  const handleShowNewClick = () => {
    setFilteredStatus("new");
  };

  const renderedTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || filteredStatus === todo.status
  );

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
