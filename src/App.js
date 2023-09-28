import "./app.css";
import AppScreen from "./component/AppScreen";
import Commitment from "./component/Commitment";
import Download from "./component/Download";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import ItemDetail from "./component/ItemDetail";
import KnowMore from "./component/KnowMore";
import MoreDetail from "./component/MoreDetail";

function App() {
  return (
    <div>
      <HeroSection/>
      <KnowMore />
      <MoreDetail />
      <AppScreen
        showBackground={true}
        mainText="We’ve all heard of instant groceries, now say hello to"
        gradientText="instant credit"
        descriptionText="0% hassle, 100% paperless. Get your Uni Card instantly."
        imageSrc="https://www.uni.cards/images/nx-wave/app_screen_1.webp"
      />
      <AppScreen
        mainText="With Uni"
        gradientText="you’re always in control"
        descriptionText="Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app."
        imageSrc="https://www.uni.cards/images/nx-wave/app_screen_2.webp"
      />
      <ItemDetail />
      <Commitment />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
