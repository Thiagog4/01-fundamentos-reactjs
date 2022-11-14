import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css'

import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Thiago"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto reiciendis molestiae saepe distinctio laudantium ipsa adipisci consequatur optio fugiat animi? Consequatur porro laudantium cumque dolorem reprehenderit sequi, rerum id repellat!"
          />
          <Post
            author="Teste"
            content="Isso e outro post" />
        </main>
      </div>
    </div>
  )
}

export default App
