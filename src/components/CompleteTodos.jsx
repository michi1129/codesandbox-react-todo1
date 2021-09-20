import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onBack } = props;
  return (
    <div className="complete-area">
      <div>
        <p className="title">完了したTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <span>{todo}</span>
                  <button onClick={() => onBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
