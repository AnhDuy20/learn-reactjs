import React, { useMemo, useState } from "react";
import TodoList from "../compoments/TodoList";

TodoFeature.propTypes = {};

const FILTER_STATUS = {
  NEW: "new",
  COMPLETED: "completed",
  ALL: "all",
};

function TodoFeature() {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: FILTER_STATUS.NEW,
    },
    {
      id: 2,
      title: "sleep",
      status: FILTER_STATUS.COMPLETED,
    },
    {
      id: 3,
      title: "code",
      status: FILTER_STATUS.NEW,
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(FILTER_STATUS.ALL);

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
      status:
        newTodoList[index].status === FILTER_STATUS.NEW
          ? FILTER_STATUS.COMPLETED
          : FILTER_STATUS.NEW,
    };

    // cập nhập new to do ở vị trí thứ index
    // newTodoList[index] = newtodo;

    // set state là to do mới
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilteredStatus(FILTER_STATUS.ALL);
  };

  const handleShowCompletedClick = () => {
    setFilteredStatus(FILTER_STATUS.COMPLETED);
  };

  const handleShowNewClick = () => {
    setFilteredStatus(FILTER_STATUS.NEW);
  };

  const renderedTodoList = useMemo(() => {
    return todoList.filter(
      (todo) =>
        filteredStatus === FILTER_STATUS.ALL || filteredStatus === todo.status
    );
  }, [todoList, filteredStatus]);

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
