import { Link } from "react-router-dom";
import { Post } from "./components/Post";

export function Home() {
  return (
    <>
      <nav>
        <Link to="/details">Details</Link>
      </nav>
      <Post
        title="Meu post com props"
        description="Muito legal!"
      >
        <span>Data: 28 de novembro de 2023</span>
        <span>Data: 28 de novembro de 2023</span>
        <span>Data: 28 de novembro de 2023</span>
        <span>Data: 28 de novembro de 2023</span>
      </Post>
      <Post
        title="Meu segundo post com props"
        description="Eba!"
      />

      <Post
        title="Agora eu saquei!"
        description="Eba!"
      />
    </>
  )
}