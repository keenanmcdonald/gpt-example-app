import Head from "next/head";
import styles from "./index.module.css";

const promptBio = 'Keenan McDonald is a software engineer from Austin, TX. He '

export async function getServerSideProps() {
  const response = await fetch(process.env.BASE_URL + '/api/generate', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({promptBio}),
  })
  const data = await response.json()

  return {
    props: {gptBio: data.result},
  }
}

export default function Home({gptBio}) {

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
