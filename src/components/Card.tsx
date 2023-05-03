import { Checkbox } from "@material-tailwind/react";

export default function Example() {
    return (
        <>
            <div className="">
                <div className="bg-white drop-shadow-xl rounded-md">
                    <div className="pt-3 px-3">
                        <p>ästhetische Beratung</p>
                        <p>Die Gebühr für die Beratung wird bei</p>
                        <p>Buchung einer Behandlun...MEHR</p>
                    </div>
                    <div>
                        <Checkbox />
                    </div>

                </div>
            </div>
        </>
    );
}