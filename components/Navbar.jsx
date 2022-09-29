import { Navbar, Container } from "react-bootstrap";
import Link from "next/link";
import { Button } from "antd";

export default function MyNavbar() {
  const __href = [
    "/",
    "/signin",
    "/currencyConverter",
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
              <Button type="primary">{e}</Button>
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
