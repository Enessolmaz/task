"use client"
import React, { useContext, useState } from "react";
import styled from "./page.module.css";
import AddTaskButton from "@/components/AddTaskButton/AddTaskButton";
import Todo from "@/components/AddTaskButton/TodoVisible/Todo";
import { DataContext } from "@/components/Context/Context";




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
