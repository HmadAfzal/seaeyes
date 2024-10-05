"use client";

import { qualities } from "@/constants";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function MovingCards() {
    return (
        <section className="flex flex-col items-center justify-center px-8 pb-20   relative">
            <p className="text-lg pb-6 text-primary text-center">Delivering tailored, world-class solutions to help businesses thrive globally.</p>
                <InfiniteMovingCards
                    items={qualities}
                    direction="left"
                    speed="normal"
                />
            </section>

    );
}