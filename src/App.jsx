import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <div>
          <p>未完了のTODO</p>
          <ul>
            <li>
              <div>
                <span>ああああ</span>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
            <li>
              <div>
                <span>いいいいい</span>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <p>完了したTODO</p>
          <ul>
            <li>
              <div>
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
