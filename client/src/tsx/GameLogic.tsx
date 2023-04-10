export default {
    guesses: ["katla","fitja","uggl","pleb"],
    guessCount: 0,
    
    keyEvents(ev: KeyboardEvent) {
        if (ev.key === "Enter")
        console.log(ev);
        console.log("YAY");
    }
}    