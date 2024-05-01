import ContactUs from "@/components/contact-us/contact-us";
import BourseInfo from "@/container/bourse-page/bourse-info/bourse-info";
import Intro from "@/container/bourse-page/intro/intro";

export default function page() {
  return (
    <main>
      <Intro />
      <BourseInfo />
      <ContactUs />
    </main>
  );
}
