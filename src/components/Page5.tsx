import {
    Card,
    Checkbox,
    Typography,
    Button,
    Input
} from "@material-tailwind/react";
import { Fragment, useState } from "react";
import { AiOutlineCalendar } from 'react-icons/ai';

const Page5 = () => {
    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }


    return (
        <>
            <div className="flex flex-col">
                <div className="bg-white w-full">
                    <div className="flex items-center justify-between mx-80 py-3">
                        <div className="flex items-center">
                            <div className='flex items-center'>
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center text-xl font-bold h-8 w-8 bg-black rounded-full text-white">1</span><p>Tag und Zeit</p>
                                </div>
                            </div>
                            <div className='flex items-center ml-5'>
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center text-xl font-semibold h-8 w-8 border border-gray-700 rounded-full text-gray-700">2</span><p className="text-gray-700">Tag und Zeit</p>
                                </div>
                            </div>
                            <div className='flex items-center ml-5'>
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center text-xl font-bold h-8 w-8 border border-gray-700 rounded-full text-gray-700">3</span><p className="text-gray-700">Tag und Zeit</p>
                                </div>
                            </div>
                        </div>
                        <div className=" cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex mx-80 mt-10">
                    <div>
                        <div className=" bg-white border-t-4 border-gray-700 drop-shadow-xl">
                            <div className="p-8">
                                <div>
                                    <div className="my-3 w-[35rem]">
                                        <Card color="transparent" shadow={false}>
                                            <Typography variant="h4" color="blue-gray">
                                                Geben Sie Ihre Kontaktdaten ein
                                            </Typography>
                                        </Card>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Fragment>
                                            <Checkbox id="ripple-on" label="Zahlung vor Ort" ripple={true} />
                                            <Checkbox onClick={handleClick} id="ripple-off" label="Kreditkarte" ripple={false} />
                                        </Fragment>
                                    </div>
                                    {
                                        toggle && <div>
                                            <form className="mt-8 mb-2 w-full  ">
                                                <div className="mb-4 w-full flex flex-col gap-6">
                                                    <Input size="lg" label="Vorname*" />
                                                    <Input size="lg" label="Nachname*" />
                                                    <div className="flex gap-5">
                                                        <Input size="lg" label="Email" />
                                                        <Input size="lg" label="Mobiltelefon*" />
                                                    </div>
                                                </div>
                                            </form>
                                            <p className=" text-gray-400">Felder mit * sind Pflichtfelder</p>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-10">
                        <div className="p-5 bg-white drop-shadow-xl">
                            <div className="pb-5 border-b border-gray-400">
                                <h3>Ihr Termin</h3>
                                <p className=" text-gray-600">4 Leistungen für 2 Personen</p>
                                <div className="flex mt-3">
                                    <AiOutlineCalendar className=" text-4xl" />
                                    <div>
                                        <p>12. Mai 2023</p>
                                        <p>10:00 bis 11:35 - 1 Std. 35 Min.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 mt-3 border-b border-gray-400">
                                <div className="flex justify-between">
                                    <p>ästhetische Beratung</p>
                                    <span>39,00 €</span>
                                </div>
                                <div className="flex justify-between">
                                    <div>
                                        <p>kosmetische Beratung/</p>
                                        <p>Hautanalyse</p>
                                    </div>
                                    <span>39,00 €</span>
                                </div>
                                <div className="flex justify-between">
                                    <p>Pflege-und Produktberatung</p>
                                    <span>39,00 €</span>
                                </div>
                                <div className="flex justify-between">
                                    <p>Kontrolle</p>
                                    <span>39,00 €</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 mt-3 border-b border-gray-400">
                                <div className="flex justify-between">
                                    <p>Kontrolle</p>
                                    <span>39,00 €</span>
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="w-full">
                                    <Input label="Username" />
                                </div>
                                <Checkbox label={
                                    <Typography color="blue-gray" className="font-medium flex">I agree with the
                                        <Typography as="a" href="#" color="blue" className="font-medium hover:text-blue-700 transition-colors">
                                            &nbsp;terms and conditions
                                        </Typography>.
                                    </Typography>
                                } />
                                <Button className="w-full">Button</Button>;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page5
