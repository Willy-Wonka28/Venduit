import {ReactNode} from "react";
import '@/app/globals.css'
import Image from 'next/image'

export default function RootLayout({children}: {children: ReactNode}){
    return(
        <html lang="en">
            <body className="min-h-screen flex flex-col">
            <header>
            <Image 
            className="invert"
            src="/images/logo white.svg"
            alt="venduit-icon"
            width={250}
            height={250}
                        />
            </header>
                {children}
                <footer className="text-white bg-black mt-auto">
                <Image 
                        src="/images/logo white.svg"
                        alt="venduit-icon"
                        width={250}
                        height={250}
                        />
                    {/* icons */}
                    <div className="ml-[30px]">
                    <div className="flex w-[75px] justify-around items-center">
                        <Image 
                        src="/images/instagram.svg"
                        alt="instagram-icon"
                        width={25}
                        height={25}
                        />

                        <Image
                        src="/images/icons8-x.svg"
                        alt="twitter-icon"
                        width={25}
                        height={25}
                        />
                    </div>
                    <div className=" h-[175px]">
                        <ul className="h-[125px] w-full flex flex-col justify-between items-left py-5">
                            <li>Contact us</li>
                            <li><u>Send us a mail</u></li>
                            <li><u>Join our community</u></li>
                        </ul>
                        <div>Copyright &copy; Venduit 2024</div>
                    </div>
                    </div>
                </footer>
            </body>
        </html>
    )
}