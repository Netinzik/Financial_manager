'use client';

import style from "@/styles/login.module.scss";
import { FormEvent } from "react";

export default function Login() {


  const formSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    console.log(event.target);
  }

  return (
    <main className={`${style.login}`}>
      <section>
        <title>Login</title>
        <form onSubmit={(e) => formSubmit(e)}>
          <div>
            <label htmlFor=""></label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor=""></label>
            <input type="text" />
          </div>
          <button type="submit">teste</button>
          <button type="reset">teste</button>
        </form>
      </section>
    </main>
  );
}
