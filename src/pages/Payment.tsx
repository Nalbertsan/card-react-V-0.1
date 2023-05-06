import React from 'react';
import Cardform from '../components/Cardform';
import FlippableCard from '../components/FlippableCard';
import { PayContext } from '../contexts/payContext';
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from "@material-tailwind/react";



export default function Payment() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const [infoCard, setInfoCard] = React.useState({
        cardNumber: "",
        name: "",
        date: "",
        cvv: ""
    })

    return (
        <React.Fragment>
            <Button onClick={handleOpen}>Sign In</Button>
            <Dialog
                size="xl"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none "
            >
                <Card className="mx-auto w-full max-w-[80rem] h-96">
                    <CardBody className='flex justify-items-center'>
                        <PayContext.Provider value={{ infoCard, setInfoCard }} >
                            <div className="flex h-full w-full justify-center gap-y-12 items-center">
                                <div className="flex flex-col justify-center items-center h-full w-4/6 ">
                                    <FlippableCard />
                                    <Cardform />
                                </div>
                            </div>
                        </PayContext.Provider>
                    </CardBody>
                </Card>
            </Dialog>
        </React.Fragment>
    )
}