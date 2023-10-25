import {
  ReactNode
} from "react";
import Container from "./Container";
// import Footer from "./Footer";
// import Header from "./Header";
import Image from 'next/image'
interface ILayout {
  children: ReactNode;
}

const RootLayout = ({ children }: ILayout) => {
  return (
    <>
      {/* <Header headerType={headerType} /> */}
      <header className="">
        <Container className="py-3 lg:py-6">
          <div className="flex justify-between items-center">
            <div className="">
              <Image src={'/images/clickvisa-logo.svg'} alt="clickvisa-logo" className="h-4 lg:h-6 w-auto" width={200} height={50} />
            </div>
            <nav className="flex gap-4 ">
              <div className="">

                home

              </div>
              <div className="">
                about
              </div>
            </nav>
          </div>
        </Container>
      </header>
      <main className="flex-1">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default RootLayout;
