import Head from "next/head"
import { useEffect, useState } from "react"
import styles from "./index.module.css"

const promptBio = 'Keenan McDonald is a software engineer from Austin, TX. He '

export default function Home() {
  const [gptBio, setGptBio] = useState('...')

  useEffect(async () => {
    const response = await fetch('/api/generate', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({promptBio}),
    })
    const data = await response.json()
    setGptBio(data.result)
  }, [promptBio])

  return (
    <div>
      <Head>
        <title>OpenAI Example</title>
        <link rel="icon" href="/dog.png" />
      </Head>
      <main className={styles.main}>
        <h3>Bio</h3>
        <p>{promptBio + gptBio}</p>
      </main>
    </div>
  );
}
