import {ReactNode} from "react";
import '@/app/globals.css'
import Image from 'next/image'
import Link from 'next/link'

export default function RootLayout({children}: {children: ReactNode}){
    return(
        <html lang="en">
            <body className="min-h-screen flex flex-col">
            <header>
            <Link href="/">
            <Image 
            className="invert"
            src="/images/logo white.svg"
            alt="venduit-icon"
            width={150}
            height={150}
                        />
            </Link>
            </header>
                {children}
                <footer className="text-white bg-black my-auto">
                <Link href="/">
                <Image 
                        className="my-[15px]"
                        src="/images/logo white.svg"
                        alt="venduit-icon"
                        width={150}
                        height={150}
                        />
                </Link>
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