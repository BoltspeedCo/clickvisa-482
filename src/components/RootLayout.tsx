import {
  ReactNode
} from "react";
import Container from "./Container";
// import Footer from "./Footer";
// import Header from "./Header";
import Image from 'next/image'
import { GlobalSectionsDocument } from "../../prismicio-types";
import { SmartText } from "./Typography";
interface ILayout {
  children: ReactNode;
  globalContext: GlobalSectionsDocument<string>
}

const RootLayout = ({ globalContext, children }: ILayout) => {
  const { footerHeading } = globalContext.data
  return (
    <>
      {/* <Header headerType={headerType} /> */}
      <header className="">
        <Container size="wide" className="py-3 lg:py-4">
          <div className="flex justify-between items-center">
            <div className="">
              <Image src={'/images/clickvisa-logo.svg'} alt="clickvisa-logo" className="h-4 lg:h-6 w-auto" width={200} height={50} />
            </div>
            <nav className="flex gap-4 ">
              <div className="">
                W
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
      <footer className="">
        <Container size="wide">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <SmartText text={footerHeading} variant="h2" className="lg:text-4xl xl:text-5xl max-w-xl" />
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default RootLayout;
