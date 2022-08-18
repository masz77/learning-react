import { Navbar, Container, Button } from "react-bootstrap";
import Link from "next/link";
import { useRef } from "react";

export default function MyNavbar() {
  const __href = [
    "/",
    "/learnUseEffect",
    "/learnUseRef",
    "/InfiniteScrolling",
    "/learnUseState",
  ];
  return (
    <div>
      <Navbar bg="dark" expand="">
        <Container>
          {__href.map((e) => (
            <Link passHref key={e} href={e}>
              <Button>{e}</Button>
            </Link>
          ))}

          {/* <Link passHref href="/">
            <Button>Home</Button>
          </Link>
          <Link href="/learnUseEffect">learn Use Effect</Link>
          <Link href="/learnUseRef">learn Use Ref</Link>
          <Link href="/InfiniteScrolling">Infinite Scrolling</Link>
          <Link href="/learnUseState">learn Use State</Link> */}
        </Container>
      </Navbar>
    </div>
  );
}
