import styles from '../page.module.scss'
import React from 'react';
import dynamic from 'next/dynamic';
import SmoothScroll from './components/smoothScroll';
import Projects from './components/projects';


export default function About() {
  return (
    <SmoothScroll>
      <main className={styles.main}>
        <Projects />
      </main>
    </SmoothScroll>
  )
}