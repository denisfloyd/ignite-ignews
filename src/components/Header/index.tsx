import { useRouter } from "next/router";

import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

import { ActiveLink } from "../ActiveLink";

export function Header() {
  const { asPath } = useRouter();

  return (
    <header className={styles.header__container}>
      <div className={styles.header__content}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a href="">Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
