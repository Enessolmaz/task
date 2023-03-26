"use client"
import React from "react";
import styled from "./page.module.css";
import AddTaskButton from "@/components/AddTaskButton/AddTaskButton";
import Todo from "@/components/AddTaskButton/TodoVisible/Todo";



export default function Page() {





  return (
    <div className={styled.tasksTab}>
      <div className={styled.borderButton}>
        <AddTaskButton />
      </div>
      <div className={styled.contentMain}>
        <Todo />
      </div>
    </div>
  );
}
