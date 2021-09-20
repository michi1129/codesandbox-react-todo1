import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <div>
          <p className="title">未完了のTODO</p>
          <ul>
            <li>
              <div className="list-row">
                <span>ああああ</span>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
            <li>
              <div className="list-row">
                <span>いいいいい</span>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="complete-area">
        <div>
          <p className="title">完了したTODO</p>
          <ul>
            <li>
              <div className="list-row">
                <span>うううう</span>
                <button>戻す</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
