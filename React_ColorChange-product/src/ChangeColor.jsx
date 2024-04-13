import { useState } from "react";

export default function ChangeColor() {
    // const colors = [
    //     '#FF5733', // Coral
    //     '#33FF57', // Lime
    //     '#5733FF', // Indigo
    //     '#FF33C7', // Fuchsia
    //     '#33FFC7', // Aqua
    //     '#FF5733', // Coral
    //     '#33FF57', // Lime
    //     '#5733FF', // Indigo
    //     '#FF33C7', // Fuchsia
    //     '#33FFC7'  // Aqua
    // ];

    const colors = Array.from({ length: 100 }, () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    });

    const [rand, setRand] = useState(Math.floor(Math.random() * 10));

    const colorChange = () => {
        const newRand = Math.floor(Math.random() * 10);
        setRand(newRand);
    };

    return (
        <div
            style={{ height: '100px', width: '100px', backgroundColor: colors[rand] }}
            onClick={colorChange}
        >
        </div>
    );
}
