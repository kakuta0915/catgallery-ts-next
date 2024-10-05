export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>猫画像アプリ</h1>
      <img
        src="https://cdn2.thecatapi.com/images/6gj.jpg"
        alt="猫"
        width={500}
        height="auto"
      />
      <button
        style={{
          display: "inline-block",
          marginTop: "3rem",
        }}
        onClick={fetchCatImage}
      >
        今日の猫さん
      </button>
    </div>
  );
}
