import Header from "../header";
import Footer from "../footer";
import './layout.scss'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="appContainer">{children}</div>
      <Footer />
    </>
  );
}
