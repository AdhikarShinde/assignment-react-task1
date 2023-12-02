import Header from "./components/Header/Header";
import SplitBanner from "./components/SplitBanner/SplitBanner";
import Footer from "./components/Footer/Footer";
import CalloutBlock from "./components/CalloutBlock/CalloutBlock";
import CardBlock from "./components/CardBlock/CardBlock";
import {
  cardBlockProps,
  splitBannerProps,
  calloutBlockProps,
} from "./helper/constants";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <SplitBanner
          heading={splitBannerProps[0].heading}
          subheading={splitBannerProps[0].subheading}
          buttons={splitBannerProps[0].buttons}
          imageSrc={splitBannerProps[0].imageSrc}
          altText={splitBannerProps[2].altText}
          swap={false}
        />

        <CalloutBlock
          title={calloutBlockProps[0].title}
          subtitle={calloutBlockProps[0].subtitle}
        />
        <div className={styles.cards}>
          {cardBlockProps.map((card, index) => (
            <CardBlock
              key={index}
              imgSrc={card.imgSrc}
              altText={card.altText}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>
        <SplitBanner
          heading={splitBannerProps[1].heading}
          subheading={splitBannerProps[1].subheading}
          buttons={splitBannerProps[1].buttons}
          imageSrc={splitBannerProps[1].imageSrc}
          altText={splitBannerProps[2].altText}
          swap={false}
        />
        <SplitBanner
          heading={splitBannerProps[2].heading}
          subheading={splitBannerProps[2].subheading}
          buttons={splitBannerProps[2].buttons}
          imageSrc={splitBannerProps[2].imageSrc}
          altText={splitBannerProps[2].altText}
          swap={true}
        />
        <Footer />
      </main>
    </>
  );
}

export default App;
