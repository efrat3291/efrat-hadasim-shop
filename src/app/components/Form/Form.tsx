"use client";
import React, { useState } from "react";
import styles from "./Form.module.css";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  birthDate: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  birthDate?: string;
}

export default function RegistrationForm() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    birthDate: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "fullName":
        const words = value.trim().split(" ");
        if (words.length < 2) {
          error = "חייב להיות לפחות שתי מילים";
        } else if (words.some((w) => /^\d/.test(w))) {
          error = "שום מילה לא יכולה להתחיל במספר";
        }
        break;

      case "phone":
        if (!/^\d*$/.test(value)) error = "טלפון יכול להכיל רק ספרות";
        break;

      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "כתובת אימייל לא חוקית";
        break;

      case "birthDate":
        if (value) {
          const dob = new Date(value);
          const ageDifMs = Date.now() - dob.getTime();
          const ageDate = new Date(ageDifMs);
          const age = Math.abs(ageDate.getUTCFullYear() - 1970);
          if (age < 18) error = "חייב להיות מעל גיל 18";
        }
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // בדיקה סופית
    Object.entries(form).forEach(([key, value]) => validateField(key, value));
    if (Object.values(errors).every((err) => !err)) {
      alert("הטופס נשלח בהצלחה!");
      setForm({ fullName: "", phone: "", email: "", birthDate: "" });
      setErrors({});
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>טופס רישום</h2>

      <label className={styles.label}>שם מלא</label>
      <input
        className={styles.input}
        type="text"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
      />
      {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}

      <label className={styles.label}>טלפון</label>
      <input
        className={styles.input}
        type="text"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />
      {errors.phone && <p className={styles.error}>{errors.phone}</p>}

      <label className={styles.label}>אימייל</label>
      <input
        className={styles.input}
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      {errors.email && <p className={styles.error}>{errors.email}</p>}

      <label className={styles.label}>תאריך לידה</label>
      <input
        className={styles.input}
        type="date"
        name="birthDate"
        value={form.birthDate}
        onChange={handleChange}
      />
      {errors.birthDate && <p className={styles.error}>{errors.birthDate}</p>}

      <button className={styles.button} type="submit">
        הרשמה
      </button>
    </form>
  );
}
