/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@material-tailwind/react";

const Page1 = ({ page2 }: any) => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen w-screen">
                <div className="flex flex-col">
                    <h1 className="text-2xl">Wählen Sie eine Filiale aus</h1>
                    <div className="flex flex-col gap-8 my-10">

                        <div className="flex items-center justify-between cursor-pointer gap-96 px-3 py-3 bg-white hover:drop-shadow-lg border hover:border-blue-gray-300 transition-all duration-300">
                            <div className="flex flex-col">
                                <p>Flagship Store kalia lab - Hamburg</p>
                                <p>21025 Hamburg - Ballindamm</p>
                            </div>
                            <Button onClick={page2}>Auswählen</Button>
                        </div>

                        <div className="flex items-center justify-between cursor-pointer gap-96 px-3 py-3 bg-white hover:drop-shadow-lg border hover:border-blue-gray-300 transition-all duration-300">
                            <div className="flex flex-col">
                                <p>Flagship Store kalia lab - Hamburg</p>
                                <p>21025 Hamburg - Ballindamm</p>
                            </div>
                            <Button>Auswählen</Button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Page1
