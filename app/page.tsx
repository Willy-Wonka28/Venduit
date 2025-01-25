import Button from '@/app/components/Button';
import Image from 'next/image';
import HeroImage from '../public/images/unsplash_62GTOD-oY0w.svg';
import Card from "@/app/components/Card"
import Box from "@/app/components/Box"
import Link from 'next/link'

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-around px-4 lg:px-30 lg:ml-20 py-6">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-3xl lg:text-7xl font-medium font-serif leading-tight">
            Save and invest<br /> in <span className="text-[#805ad5]">dollars</span>.
          </h1>
          <h3 className="font-medium text-base lg:text-lg mt-4">
            Protect your money from inflation, unlock global investment opportunities, and build wealth with your Squad.
          </h3>
          <div className="mt-6">
            <Link href="/waitlist-form"><Button buttonColor="#805ad5" text="Join waitlist" color="white" border="none" borderColor="transparent"/></Link>
          </div>
        </div>

        {/* Hero Image */}
        <div>
          <Image
            alt="image of woman smiling"
            src={HeroImage}
            width={600}
            height={700}
            layout='responsive'
            className="w-full rounded-lg"
            priority
          />
        </div>
      </div>

        <div className="flex items-center w-full justify-center mt-8">
           <h1 className='text-3xl w-[75%] lg:text-5xl font-medium font-serif leading-tight text-center text-wrap'>
           Join the waitlist today and get exclusive early access to the future of saving and investing in Africa.
           </h1> 
        </div>

      {/* Frame1 */}
      <Card 
        cardH1="INFLATION-PROOF"
        cardH2="Save in Dollars"
        cardBio="Secure your savings and hedge against inflation with competitive dollar-saving rates. Set your savings goals and crush them. Start with as little as $5."
        imageAlt="coin jar"
        imageSrc="/images/unsplash_0ITvgXAU5Oo.svg"
        bgColor="#805ad51A"
        />
        {/* Frame2 */}
        <Card 
        cardH1="GLOBAL OPPORTUNITIES"
        cardH2="Invest like a Pro"
        cardBio="Invest in diverse portfolios of stocks, ETFs and mutual funds handpicked by our experts. Allocate your money according to your risk appetite."
        imageAlt="building blocks"
        imageSrc="/images/unsplash_vsLbaIdhwaU.svg"
        bgColor="#BD21211A"
        />
        {/* Frame3*/}
        <Card 
        cardH1="LEVEL UP TOGETHER"
        cardH2="Grow with your Squad"
        cardBio="Save and invest with your family, friends and loved ones. Set collective savings targets and build your squad portfolio because no one is getting left behind."
        imageAlt="looking up and smiling"
        imageSrc="/images/image 31.svg"
        bgColor="#0898A01A"
        />
        <Box />
    </>
  );
}
