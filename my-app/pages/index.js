import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

//           // server side generation
// export async function getStaticProps() {
//   const resp = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json');

//   return {
//     props: {
//       pokemon: await resp.json(), 
//     },
//   }
// }
          // server side render
export async function getServerSideProps() {
  const resp = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json');

  return {
    props: {
      pokemon: await resp.json(), 
    },
  }
}


export default function Home({pokemon}) {

        // client side 
  // const [pokemon, setPokemon] = useState([]);
  // useEffect(() => {
  //   async function getPokemon() {
  //     const resp = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json');
  //     setPokemon(await resp.json());
  //   }
  //   getPokemon();
  // } ,[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon list</title>>
      </Head>
      <div className={styles.grid}>
        {pokemon.map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <a> 
                <img 
                  className={styles.pokemon_image}
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                />
                <h3>{pokemon.name}</h3> 
              </a>
            </Link>

          </div>
        ))}  
      </div>  


    </div>
  )
}
