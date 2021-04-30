import React from "react";
import "./Add.css";
// import "../component/Header";
// import { HashRouter, Route } from "react-router-dom";

function Add() {
  return (
    <div className="add">
        <div className="header">
            <div className="close">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div className="check">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
        <div className="note-page">
            <textarea id="note"></textarea>
        </div>
    </div>
  );
}
//input이 아니라 클릭하면 어디든 노트를 만들 수 있는 기능은 어떻게 만드는 걸까?
export default Add;
