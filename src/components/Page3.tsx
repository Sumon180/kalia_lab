import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
]

const Page3 = () => {
    const [selected, setSelected] = useState(people[0])

    return (
        <>
            <div className="flex flex-col">
                <div className="bg-white w-full">
                    <div className="flex items-center justify-between mx-96 py-3">
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
                <div className="flex mx-96 mt-10">
                    <div className=" bg-white border-t-4 border-gray-700">
                        <div className="p-8">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center justify-center text-xl font-bold h-8 w-8 border border-gray-700 rounded-full text-gray-800">1</span><p className="text-gray-700">Für wie viele Personen buchen Sie?</p>
                            </div>
                            <div>
                                <div className="w-72 my-3">
                                    <Listbox value={selected} onChange={setSelected}>
                                        <div className="relative mt-1">
                                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                <span className="block truncate">{selected.name}</span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronUpDownIcon
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Listbox.Button>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {people.map((person, personIdx) => (
                                                        <Listbox.Option
                                                            key={personIdx}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                                }`
                                                            }
                                                            value={person}
                                                        >
                                                            {({ selected }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                            }`}
                                                                    >
                                                                        {person.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </Listbox>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center text-xl font-bold h-8 w-8 border border-gray-700 rounded-full text-gray-800">2</span><p className="text-gray-700">Für wie viele Personen buchen Sie?</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>BBBB</div>
                </div>
            </div>
        </>
    )
}

export default Page3
