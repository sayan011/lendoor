import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "./components/NavBar";
import HomeMain from "./HomeMain";
import Landing from "./Landing";
export default function Home() {
  return (
    <>
      <NavBar/>
      <Landing/>
    </>
  );
}
