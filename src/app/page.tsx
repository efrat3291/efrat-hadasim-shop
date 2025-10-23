"use client";
import React from "react";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import styles from "./page.module.css";
import ProductsList from "./components/ProductsList/ProductsList";

export default function HomePage() {
  return (
    <>
      <div className="page-container">
        <main className="content">
          <ProductsList />
        </main>
      </div>
    </>
  );
}