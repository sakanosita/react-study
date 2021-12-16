import Article from "./components/Article";

function App() {
  const now = new Date();
  return (
    <div>
      <Article
        title={"hoge"}
        content={"fuga"}
        updatedAt={now}
      />
    </div>
  );
}

export default App;
