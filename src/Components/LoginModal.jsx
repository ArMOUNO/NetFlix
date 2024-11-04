
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { GiCrossedAirFlows } from "react-icons/gi";
export function LoginModal({OnClose}) {
    return (
        <div className="flex justify-center">
            <Card className="w-[450px] flex flex-col p-6 justify-center items-center bg-black bg-opacity-70" color="" shadow={false}>
                <div className="flex justify-end w-full text-red-400 text-xl cursor-pointer ">
                   <button onClick={OnClose}><GiCrossedAirFlows /></button> 
                </div>
                <Typography variant="h4" color="white">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">

                        <Typography variant="h6" color="white" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-white-200 focus:!border-t-red-400"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="white" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-white-200 focus:!border-t-red-400"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button color="red" className="mt-6" fullWidth>
                        sign In
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        New to Netflix ?{" "}
                        <a href="#" className="font-medium text-white">
                            Sign Up Now
                        </a>
                    </Typography>
                </form>
            </Card>
        </div>
    );
}
export default LoginModal